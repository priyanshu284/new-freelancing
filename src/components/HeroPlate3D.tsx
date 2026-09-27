import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroPlate3DProps {
  mouseXRatio?: number;
  mouseYRatio?: number;
}

export const HeroPlate3D: React.FC<HeroPlate3DProps> = ({ mouseXRatio = 0.5, mouseYRatio = 0.5 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseTargetRef = useRef({ x: 0, y: 0 });

  // Update target when props change
  useEffect(() => {
    mouseTargetRef.current = {
      x: (mouseXRatio - 0.5) * 0.6,
      y: (mouseYRatio - 0.5) * 0.5,
    };
  }, [mouseXRatio, mouseYRatio]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || 380;
    const height = container.clientHeight || 380;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Create Olympic Plate Geometry Group
    const plateGroup = new THREE.Group();

    // 1. Procedural Texture for Olympic Bumper Plate Face with TWS Emblem
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Dark graphite base with subtle radial brushed metal texture
      const grad = ctx.createRadialGradient(512, 512, 50, 512, 512, 500);
      grad.addColorStop(0, '#22232a');
      grad.addColorStop(0.3, '#16171d');
      grad.addColorStop(0.7, '#1f2027');
      grad.addColorStop(0.9, '#111216');
      grad.addColorStop(1, '#2c2e38');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 1024);

      // Metallic concentric rings
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 2;
      for (let r = 80; r < 480; r += 28) {
        ctx.beginPath();
        ctx.arc(512, 512, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Outer rim accent ring
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(512, 512, 455, 0, Math.PI * 2);
      ctx.stroke();

      // Bold Brand Name "TWS"
      ctx.save();
      ctx.translate(512, 330);
      ctx.fillStyle = '#f8fafc';
      ctx.font = '900 110px "Syne", "Impact", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.shadowBlur = 12;
      ctx.fillText('TWS', 0, 0);

      // Subtle metallic highlight line inside TWS
      ctx.strokeStyle = 'rgba(200, 215, 230, 0.4)';
      ctx.lineWidth = 2;
      ctx.strokeText('TWS', 0, 0);
      ctx.restore();

      // Subtitle "OLYMPIC POWER"
      ctx.save();
      ctx.translate(512, 400);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('STRENGTH & DISCIPLINE', 0, 0);
      ctx.restore();

      // Bottom Weight Specification "20 KG"
      ctx.save();
      ctx.translate(512, 690);
      ctx.fillStyle = '#f8fafc';
      ctx.font = '800 68px "Syne", "Impact", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('20 KG', 0, 0);
      ctx.restore();

      // "44 LBS"
      ctx.save();
      ctx.translate(512, 750);
      ctx.fillStyle = '#64748b';
      ctx.font = '700 22px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('44.1 LBS', 0, 0);
      ctx.restore();
    }

    const faceTexture = new THREE.CanvasTexture(canvas);
    faceTexture.anisotropy = 8;

    // Materials
    const plateMaterial = new THREE.MeshStandardMaterial({
      map: faceTexture,
      roughness: 0.35,
      metalness: 0.75,
      bumpScale: 0.05,
    });

    const steelRingMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4d8e0,
      metalness: 0.95,
      roughness: 0.2,
    });

    const rimMaterial = new THREE.MeshStandardMaterial({
      color: 0x181920,
      metalness: 0.8,
      roughness: 0.4,
    });

    // Outer Main Cylinder Body
    const outerRadius = 1.9;
    const plateThickness = 0.28;
    const plateGeo = new THREE.CylinderGeometry(outerRadius, outerRadius, plateThickness, 64, 1, false);
    // Orient cylinder forward
    plateGeo.rotateX(Math.PI / 2);
    const mainPlateMesh = new THREE.Mesh(plateGeo, [
      rimMaterial,   // Side rim
      plateMaterial, // Front face
      plateMaterial  // Back face
    ]);
    mainPlateMesh.castShadow = true;
    mainPlateMesh.receiveShadow = true;
    plateGroup.add(mainPlateMesh);

    // Inner Center Olympic Steel Bushing Ring
    const innerSteelRingGeo = new THREE.CylinderGeometry(0.38, 0.38, plateThickness + 0.02, 32);
    innerSteelRingGeo.rotateX(Math.PI / 2);
    const centerBushingMesh = new THREE.Mesh(innerSteelRingGeo, steelRingMaterial);
    plateGroup.add(centerBushingMesh);

    // Hollow center bore hole
    const boreHoleGeo = new THREE.CylinderGeometry(0.24, 0.24, plateThickness + 0.04, 32);
    boreHoleGeo.rotateX(Math.PI / 2);
    const boreMaterial = new THREE.MeshBasicMaterial({ color: 0x050507 });
    const boreMesh = new THREE.Mesh(boreHoleGeo, boreMaterial);
    plateGroup.add(boreMesh);

    // Outer raised lip rings for 3D depth
    const lipGeo = new THREE.TorusGeometry(outerRadius - 0.05, 0.04, 16, 64);
    const lipMeshFront = new THREE.Mesh(lipGeo, steelRingMaterial);
    lipMeshFront.position.z = plateThickness / 2;
    plateGroup.add(lipMeshFront);

    const lipMeshBack = new THREE.Mesh(lipGeo, steelRingMaterial);
    lipMeshBack.position.z = -plateThickness / 2;
    plateGroup.add(lipMeshBack);

    scene.add(plateGroup);

    // Dynamic Lighting
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Key directional light with cold athletic tone
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 5, 6);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Rim light for dramatic metallic edge specular highlight
    const rimLight = new THREE.DirectionalLight(0x90b0e0, 2.8);
    rimLight.position.set(-5, -3, 4);
    scene.add(rimLight);

    // Subtle warm bottom fill light
    const bottomLight = new THREE.DirectionalLight(0x8a92a0, 1.2);
    bottomLight.position.set(0, -5, -3);
    scene.add(bottomLight);

    // Animation Loop
    let animationFrameId: number;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const animate = () => {
      // Continuous slow majestic rotation
      plateGroup.rotation.y += 0.006;
      plateGroup.rotation.z += 0.0015;

      // Smooth lerp to mouse targets
      const targetX = mouseTargetRef.current.y * 0.45;
      const targetY = mouseTargetRef.current.x * 0.55;

      currentTiltX += (targetX - currentTiltX) * 0.06;
      currentTiltY += (targetY - currentTiltY) * 0.06;

      plateGroup.rotation.x = currentTiltX + Math.sin(Date.now() * 0.001) * 0.08;
      plateGroup.position.x = currentTiltY * 0.3;
      plateGroup.position.y = -currentTiltX * 0.2;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      faceTexture.dispose();
      plateGeo.dispose();
      innerSteelRingGeo.dispose();
      boreHoleGeo.dispose();
      lipGeo.dispose();
      plateMaterial.dispose();
      steelRingMaterial.dispose();
      rimMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
      <div ref={containerRef} className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] max-w-full aspect-square" />
    </div>
  );
};
