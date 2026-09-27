import { Program, Trainer, GalleryItem, Testimonial } from '../types';

export const GYM_INFO = {
  name: 'TWS',
  fullName: 'TWS ATHLETIC CLUB',
  tagline: 'TRAIN HARD. STAY CONSISTENT.',
  heroHeadline: 'BUILD YOUR\nSTRONGEST SELF.',
  heroSupporting: 'Train with purpose. Push your limits. Become stronger every day.',
  address: '104 Ironworks Boulevard, Power District, NY 10014',
  phone: '+1 (800) 897-4967',
  email: 'contact@twsgym.com',
  hours: '24 Hours / 7 Days a week (Keycard & App Access)',
  staffedHours: 'Mon - Fri: 5:00 AM – 11:00 PM | Sat - Sun: 7:00 AM – 9:00 PM',
  stats: [
    { value: '500+', label: 'MEMBERS' },
    { value: '15+', label: 'EXPERT TRAINERS' },
    { value: '24/7', label: 'GYM ACCESS' }
  ]
};

export const PROGRAMS: Program[] = [
  {
    id: 'strength-training',
    title: 'STRENGTH TRAINING',
    tagline: 'Compound power, progressive overload, barbell mastery',
    category: 'Hypertrophy & Power',
    description: 'Master the barbell through structured periodization. Focus on deadlifts, squats, bench press, and heavy compound movements designed to raise your mechanical strength baseline.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    duration: '60 - 75 Mins',
    intensity: 'Very High',
    targetGoals: ['Maximal 1RM Progression', 'Neuromuscular Efficiency', 'Tendon & Bone Density'],
    scheduleHighlights: 'Mon / Wed / Fri at 6:00 AM, 12:00 PM, 6:30 PM',
    features: ['Eleiko Competition Racks', 'Calibrated Steel Plates', 'RPE Auto-Regulation Logs']
  },
  {
    id: 'muscle-building',
    title: 'MUSCLE BUILDING',
    tagline: 'Sculpted hypertrophy, peak contraction, volume optimization',
    category: 'Bodybuilding & Aesthetics',
    description: 'Scientifically driven hypertrophy protocols utilizing biomechanically aligned isolation machines, cable towers, and high-tension dumbbell complexes for maximum muscular development.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
    duration: '50 - 65 Mins',
    intensity: 'High',
    targetGoals: ['Targeted Muscular Symmetry', 'Time Under Tension (TUT)', 'Metabolic Conditioning'],
    scheduleHighlights: 'Daily split programming with morning and evening sessions',
    features: ['Prime Fitness Selectorized Equipment', 'Dumbbells up to 150 LBS', 'Hypertrophy Biometrics']
  },
  {
    id: 'cardio',
    title: 'CARDIO',
    tagline: 'Aerobic threshold, VO2 Max elevation, stamina dominance',
    category: 'Endurance & Conditioning',
    description: 'High-output metabolic conditioning incorporating curved treadmills, SkiErgs, assault bikes, and rowing intervals to elevate cardiovascular resilience and work capacity.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop',
    duration: '45 Mins',
    intensity: 'High',
    targetGoals: ['VO2 Max Enhancement', 'Resting Heart Rate Reduction', 'Rapid Lactate Clearance'],
    scheduleHighlights: 'Tue / Thu / Sat at 7:00 AM, 1:00 PM, 5:30 PM',
    features: ['Woodway Curve Runners', 'Concept2 Ergometers', 'Heart Rate Zone HUD Telemetry']
  },
  {
    id: 'functional-training',
    title: 'FUNCTIONAL TRAINING',
    tagline: 'Multi-planar agility, core stabilization, real-world power',
    category: 'Athletic Conditioning',
    description: 'Train for real athletic performance. Sled pushes, sandbag carries, plyometric boxes, and rotational kettlebell flows that translate gym effort into unstoppable everyday durability.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    duration: '50 Mins',
    intensity: 'High',
    targetGoals: ['Kinetic Chain Integration', 'Joint Longevity & Mobility', 'Explosive Power Output'],
    scheduleHighlights: 'Mon through Fri continuous open-turf coaching',
    features: ['60-Yard Prowler Sprint Turf', 'Rogue Soft Plyo Boxes', 'Kettlebell Arsenal (8kg - 48kg)']
  },
  {
    id: 'personal-training',
    title: 'PERSONAL TRAINING',
    tagline: '1-on-1 bespoke coaching, movement screening, tailored nutrition',
    category: 'Private Coaching',
    description: 'Direct partnership with an elite coach. We analyze your mobility, movement mechanics, and specific life demands to program a completely bespoke roadmap toward your peak physique.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    duration: '60 Mins',
    intensity: 'Custom',
    targetGoals: ['Rapid Targeted Transformation', 'Injury Rehabilitation & Prehab', 'Customized Macro Nutrition'],
    scheduleHighlights: 'Flexible scheduling by private coach appointment',
    features: ['Full Body 3D InBody Scan', 'Movement Video Analysis', '24/7 Direct Coach Communication']
  },
  {
    id: 'crossfit',
    title: 'CROSSFIT',
    tagline: 'Constantly varied, high-intensity functional movement',
    category: 'High Intensity WOD',
    description: 'High-octane team training blending gymnastics, Olympic weightlifting, and metabolic sprints. Push your limits alongside a dedicated community that will not let you quit.',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop',
    duration: '60 Mins',
    intensity: 'Very High',
    targetGoals: ['Total Body Conditioning', 'Olympic Snatch & Clean Mastery', 'Unbreakable Grit'],
    scheduleHighlights: 'Mon - Sat: 6:00 AM, 7:30 AM, 5:00 PM, 6:30 PM',
    features: ['Gymnastics Rig & Rings', 'Olympic Lifting Platforms', 'Official WOD Leaderboard']
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Head of Strength & Conditioning',
    specialization: 'Powerlifting & Olympic Lifting',
    experience: '12+ Years Experience',
    certifications: ['CSCS Certified', 'USAW Level 2 Coach', 'Ex-Division 1 Strength Specialist'],
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    quote: 'Strength is not an accident. It is the earned dividend of mechanical discipline and consistency.',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      youtube: 'https://youtube.com'
    }
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Director of Athletic Performance',
    specialization: 'Functional Training & Mobility',
    experience: '9+ Years Experience',
    certifications: ['NASM Master Trainer', 'FRC Mobility Specialist', 'Kinetic Movement Certified'],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
    quote: 'True power lives at the intersection of absolute joint mobility and uncompromising stability.',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      youtube: 'https://youtube.com'
    }
  },
  {
    id: 'dante-cross',
    name: 'Dante Cross',
    role: 'Hypertrophy & Physique Coach',
    specialization: 'Muscle Building & Body Composition',
    experience: '10+ Years Experience',
    certifications: ['IFBB Pro Specialist', 'ISSA Elite Trainer', 'Advanced Sports Nutritionist'],
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop',
    quote: 'We do not count reps until the muscle screams. That is where physical transformation begins.',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      youtube: 'https://youtube.com'
    }
  },
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    role: 'Cardio & High-Intensity Lead',
    specialization: 'Metabolic Conditioning & VO2 Max',
    experience: '8+ Years Experience',
    certifications: ['CrossFit Level 3 Coach', 'Oxygen Advantage Coach', 'Ironman Finisher'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    quote: 'Your mind breaks long before your body does. At TWS, we train both to be indestructible.',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      youtube: 'https://youtube.com'
    }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Olympic Lifting Platform',
    category: 'weight-training',
    categoryLabel: 'Weight Training',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    aspect: 'wide',
    caption: 'Solid oak lifting platforms calibrated for heavy drop barbell sessions.'
  },
  {
    id: 'gal-2',
    title: 'Cardio Assault Deck',
    category: 'cardio',
    categoryLabel: 'Cardio Deck',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop',
    aspect: 'tall',
    caption: 'Woodway curved treadmills facing high-contrast performance monitors.'
  },
  {
    id: 'gal-3',
    title: 'Machined Dumbbell Vault',
    category: 'equipment',
    categoryLabel: 'Gym Equipment',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
    aspect: 'square',
    caption: 'Custom urethane-coated solid steel dumbbells ranging from 5 to 150 lbs.'
  },
  {
    id: 'gal-4',
    title: 'Architectural Gym Floor',
    category: 'interior',
    categoryLabel: 'Gym Interior',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    aspect: 'wide',
    caption: 'Spacious high-ceiling facility with acoustic baffles and dark industrial lighting.'
  },
  {
    id: 'gal-5',
    title: 'High Intensity Sled Turf',
    category: 'weight-training',
    categoryLabel: 'Members Training',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    aspect: 'square',
    caption: 'Full-length high-density sled drag turf for explosive push-pull work.'
  },
  {
    id: 'gal-6',
    title: '1-on-1 Technique Coaching',
    category: 'trainers',
    categoryLabel: 'Trainers',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    aspect: 'tall',
    caption: 'Elite coaches refining bar path, foot drive, and neuromuscular alignment.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Alexander Ward',
    title: 'Competitive Powerlifter & Member',
    rating: 5,
    duration: '2 Years at TWS',
    quote: 'TWS completely redefined my expectations for what a gym should be. The equipment is competition standard, the community brings raw energy every single morning, and the coaches hold you to an elite standard.',
    achievement: '+85 lbs added to Big 3 total in 14 months'
  },
  {
    id: 't-2',
    name: 'Maya Chen',
    title: 'Corporate Executive & Functional Athlete',
    rating: 5,
    duration: '1.5 Years at TWS',
    quote: 'Between 60-hour workweeks, I needed an environment with zero fluff. TWS provides 24/7 access, razor-focused culture, and coaches who know how to program for high performance without injury.',
    achievement: 'Body fat reduced from 26% to 17%'
  },
  {
    id: 't-3',
    name: 'David Reynolds',
    title: 'Hyrox & Endurance Competitor',
    rating: 5,
    duration: '10 Months at TWS',
    quote: 'The functional turf, Concept2 ergs, and community grit here are unmatched in the city. There are no gimmicks, no loud influencers crowding the racks—just people working their hardest every single day.',
    achievement: 'Qualified for National Hyrox Championships'
  }
];
