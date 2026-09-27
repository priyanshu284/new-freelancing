export interface Program {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  image: string;
  duration: string;
  intensity: 'High' | 'Very High' | 'Custom' | 'Moderate';
  targetGoals: string[];
  scheduleHighlights: string;
  features: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  certifications: string[];
  image: string;
  quote: string;
  socials: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'weight-training' | 'cardio' | 'interior' | 'trainers' | 'equipment';
  categoryLabel: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  rating: number;
  duration: string;
  quote: string;
  achievement: string;
}
