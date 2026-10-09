import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectImageLightbox } from './ProjectImageLightbox';
import ecoshareImage from '../assets/images/ecoshare.jpg';
import itchekImage from '../assets/images/itchek.jpg';
import physiologicalSignalsImage from '../assets/images/physiological-signals.png';
import wegestuImage from '../assets/images/wegestu.png';
import healthcareImage from '../assets/images/healthcare-app.png';

export interface Project {
  id: string;
  title: string;
  category: string;
  platform: string;
  year: string;
  description: string;
  image: string;
  imageFit?: 'cover' | 'contain';
  url?: string;
  metrics: string;
  techStack: string[];
}

const PROJECTS_DATA: Project[] = [
  {
    "id": "physiological-signals",
    "title": "Physiological Signals App",
    "category": "Health & Image Processing",
    "platform": "Android · Kotlin",
    "year": "Aug 2024 – Aug 2025",
    "description": "Real-time rPPG mobile app estimating heart rate, SpO₂, and blood pressure from facial video. Implemented signal processing with CameraX, including FFT, filtering, and interpolation, with on-device processing and server-side aggregation. Added Bluetooth communication with Raspberry Pi devices for Wi-Fi setup, app updates, and receiving camera images.",
    "image": physiologicalSignalsImage,
    "imageFit": "contain",
    "metrics": "Real-time rPPG",
    "techStack": [
      "Kotlin",
      "OpenCV",
      "CameraX",
      "Socket.IO",
      "Threads",
      "Bluetooth Sockets",
      "Retrofit",
      "Room",
      "Raspberry Pi"
    ]
  },
  {
    "id": "ecoshare",
    "url": "https://myecoshare.com",
    "title": "Ecoshare",
    "category": "School Transport & Ride Sharing",
    "platform": "Android · iOS",
    "year": "Jan 2024 – Jul 2024",
    "description": "Ride-sharing platform for school transport optimization with real-time Google Maps route tracking, QR validation, and chat. Integrated subscription payments to support user retention and monetization. Available on Google Play and the App Store.",
    "image": ecoshareImage,
    "metrics": "Live route tracking",
    "techStack": [
      "Kotlin",
      "MVVM",
      "Jetpack Compose",
      "Room",
      "Retrofit",
      "Firebase",
      "Konnect",
      "Socket.IO"
    ]
  },
  {
    "id": "wegestu",
    "title": "Wegestu",
    "category": "Recruitment & Professional Networking",
    "platform": "Android · Kotlin",
    "year": "Jul 2023 – Dec 2023",
    "description": "LinkedIn-style recruitment app where users create profiles, search for jobs, and connect with employers. Implemented real-time chat, job filtering, and push notifications to improve engagement and retention.",
    "image": wegestuImage,
    "imageFit": "contain",
    "metrics": "Real-time chat",
    "techStack": [
      "Kotlin",
      "MVVM",
      "Jetpack Compose",
      "Retrofit",
      "Room",
      "Firebase",
      "Socket.IO"
    ]
  },
  {
    "id": "itchek",
    "title": "ITCHEK",
    "category": "Professional Services Marketplace",
    "platform": "Android · iOS",
    "year": "Jan 2023 – Jul 2023",
    "description": "Service marketplace connecting users with verified professionals across multiple fields. Integrated Stripe payments, real-time Socket.IO alerts, and Google Maps location services. Built a scalable backend communication layer and reduced app crashes by 20% through Firebase monitoring. Available on Google Play and the App Store.",
    "image": itchekImage,
    "imageFit": "contain",
    "metrics": "20% fewer crashes",
    "techStack": [
      "Kotlin",
      "MVVM",
      "Google Maps API",
      "Stripe",
      "Socket.IO",
      "Firebase"
    ]
  },
  {
    "id": "healthcare-app",
    "title": "Healthcare App",
    "category": "Patient & Clinic Services",
    "platform": "Android · Kotlin",
    "year": "Apr 2022 – Dec 2022",
    "description": "Patient–clinic app for browsing services, booking appointments, and managing digital health records. Implemented secure report and e-prescription exchange with role-based access and GDPR-compliant data handling. Added subscription plans and in-app notifications for patient follow-ups and reminders.",
    "image": healthcareImage,
    "imageFit": "contain",
    "metrics": "Digital health records",
    "techStack": [
      "Kotlin",
      "MVVM",
      "Room",
      "Retrofit",
      "Firebase Auth",
      "FCM",
      "PDF Viewer",
      "REST APIs",
      "OAuth2/JWT"
    ]
  }
];

export const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/50 font-mono mb-3">
            01 · Mobile Engineering & Applications
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight max-w-2xl text-balance">
            Five mobile projects developed at ITGATE.
          </h2>
        </div>


      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onExpandImage={setExpandedProject}
          />
        ))}
      </div>

      {expandedProject && (
        <ProjectImageLightbox
          project={expandedProject}
          onClose={() => setExpandedProject(null)}
        />
      )}
    </section>
  );
};
