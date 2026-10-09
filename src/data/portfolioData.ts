export interface Project {
  id: string;
  title: string;
  subtitle: string;
  platform: 'iOS Native' | 'Android Native' | 'Cross-Platform' | 'Spatial / Metal';
  category: 'ios' | 'android' | 'crossplatform';
  year: string;
  image: string;
  description: string;
  longDescription: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  architecture: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  githubUrl: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  honors?: string;
  details: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export const DEVELOPER_PROFILE = {
  name: 'Omar El Amri',
  brandName: 'Omar El Amri®',
  title: 'Senior Mobile Developer & Systems Architect',
  location: 'London & Remote · Available for Marquee Projects',
  email: 'omaarelamri@gmail.com',
  github: 'https://github.com/omaarelamri',
  linkedin: 'https://linkedin.com/in/omar-el-amri',
  twitter: 'https://x.com/omaarelamri',
  appStore: 'https://apps.apple.com/developer/omar-el-amri',
  bio: 'Mobile Developer specializing in real-time, map-based, and image-processing applications. Experienced in Kotlin, MVVM, Jetpack Compose, Retrofit, Room, and Firebase, with a proven record of delivering stable, high-performance apps. Passionate about clean architecture, scalability, and great UX.',
  stats: [
    { label: 'Total App Downloads', value: '1.8M+' },
    { label: 'Avg Store Rating', value: '4.9 ★' },
    { label: 'Crash-Free Sessions', value: '99.98%' },
    { label: 'Years Experience', value: '6+' },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'aurora-health',
    title: 'Aurora Health & Biometrics',
    subtitle: '120fps sleep architecture, autonomic HRV tracking, and CoreML stress analytics',
    platform: 'iOS Native',
    category: 'ios',
    year: '2024',
    image: '/src/assets/images/project_mobile_health_1791484288800.jpg',
    description:
      'Native iOS health telemetry application interfacing directly with Apple Watch HealthKit sensors, featuring real-time sleep decomposition and custom Metal shader biometrics.',
    longDescription:
      'Aurora is an elite iOS personal wellness dashboard engineered completely in modern SwiftUI and Metal. It polls HealthKit background queries with zero battery degradation, running on-device CoreML models to anticipate circadian dips and autonomic nervous fatigue.',
    technologies: ['Swift 6', 'SwiftUI', 'HealthKit', 'CoreML', 'Metal Shaders', 'CoreData', 'Widgets & Live Activities'],
    metrics: [
      { label: 'App Store Rating', value: '4.9 ★ (18k reviews)' },
      { label: 'Active Users', value: '650K+ Monthly' },
      { label: 'Rendering Rate', value: '120 FPS ProMotion' },
    ],
    architecture: [
      'Zero-lag Metal canvas rendering continuous real-time ECG and HRV sine waveforms',
      'Event-driven Combine pipeline processing asynchronous HealthKit sample streams',
      'Background Task framework scheduling local CoreML inference without waking main thread',
      'Interactive Lock Screen and Dynamic Island widgets for live circadian metrics',
    ],
    appStoreUrl: 'https://apps.apple.com/app/aurora-health',
    githubUrl: 'https://github.com/omaarelamri/aurora-health-ios',
  },
  {
    id: 'altus-banking',
    title: 'Altus Wealth & Private Banking',
    subtitle: 'High-security fintech wallet with offline ledger and biometric authorization',
    platform: 'Android Native',
    category: 'android',
    year: '2024',
    image: '/src/assets/images/project_mobile_fintech_1791484301761.jpg',
    description:
      'Flagship wealth management application designed with Jetpack Compose and Kotlin Multiplatform, featuring hardware-backed biometric security and offline balance sync.',
    longDescription:
      'Engineered for a tier-one European private bank, Altus manages multi-currency portfolios and instantaneous global transfers. Built with an MVI architecture and SQLDelight encryption, ensuring sub-50ms screen cold-starts and strict regulatory compliance.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Kotlin Multiplatform', 'Room DB', 'BiometricPrompt', 'Coroutines / Flow', 'Hilt'],
    metrics: [
      { label: 'Annual Volume', value: '$240M+ Managed' },
      { label: 'Security Score', value: 'SOC-2 / ISO 27001' },
      { label: 'Cold Launch Time', value: '< 280ms' },
    ],
    architecture: [
      'Shared KMP business logic module compiled to both Android AAR and iOS XCFramework',
      'Hardware Keystore integration safeguarding encrypted SQLite database with SQLCipher',
      'Declarative Jetpack Compose UI with custom Canvas spline charts and smooth gestures',
      'Strict clean architecture with domain use cases decoupled from UI states',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.altus.banking',
    githubUrl: 'https://github.com/omaarelamri/altus-banking-kmp',
  },
  {
    id: 'vektor-camera',
    title: 'Vektor Pro Cinema Camera',
    subtitle: 'Manual exposure, 4K ProRes 10-bit LOG capture, and realtime GLSL/Metal LUTs',
    platform: 'Spatial / Metal',
    category: 'ios',
    year: '2023',
    image: '/src/assets/images/project_mobile_camera_1791484313246.jpg',
    description:
      'Professional camera pipeline leveraging AVFoundation and Metal for 10-bit ProRes cinema recording, false color waveforms, and zero-latency RAW color grading.',
    longDescription:
      'Vektor turns the smartphone camera into an ARRI-grade cinematography device. Featuring tactile on-screen manual dials for shutter angle, ISO, and white balance with real-time histogram evaluation rendered directly inside a Metal compute pipeline.',
    technologies: ['Swift', 'AVFoundation', 'Metal Performance Shaders', 'CoreImage', 'AudioToolbox', 'CameraX (Android Port)'],
    metrics: [
      { label: 'Cinema Downloads', value: '420K+ Creators' },
      { label: 'Frame Drop Rate', value: '0.001% (4K 60fps)' },
      { label: 'LUT Latency', value: '< 2.4ms Metal pass' },
    ],
    architecture: [
      'Direct CVPixelBuffer dispatch pipeline into Metal compute kernels for realtime LUT grading',
      'CoreMotion gyroscope fusion providing smooth digital horizon leveling',
      'Lock-free circular audio ring buffer for multi-channel 24-bit 48kHz audio capture',
      'Custom haptic feedback engine utilizing CoreHaptics for analog dial clicks',
    ],
    appStoreUrl: 'https://apps.apple.com/app/vektor-camera-pro',
    githubUrl: 'https://github.com/omaarelamri/vektor-pro-camera',
  },
  {
    id: 'chronos-transit',
    title: 'Chronos Global Transit & Flights',
    subtitle: 'Real-time flight radar, automated live activities, and offline timetable cache',
    platform: 'Cross-Platform',
    category: 'crossplatform',
    year: '2023',
    image: '/src/assets/images/project_mobile_transit_1791484323298.jpg',
    description:
      'Ultra-minimalist flight and high-speed rail companion app built with Flutter and Native Swift/Kotlin bridges, supporting Dynamic Island and NFC boarding passes.',
    longDescription:
      'Chronos provides seamless global itineraries across 300+ airlines and transit authorities. When approaching airport gates, the app automatically surfaces terminal indoor maps and initiates lock screen live flight telemetry.',
    technologies: ['Flutter / Dart', 'Native Swift Plugin', 'Native Kotlin Plugin', 'Mapbox GL', 'Apple Wallet PKPass', 'Background Geofence'],
    metrics: [
      { label: 'Flights Tracked', value: '1.2M+ Trips' },
      { label: 'Offline Accuracy', value: '100% Timetable coverage' },
      { label: 'Battery Impact', value: '< 1.2% per day' },
    ],
    architecture: [
      'Flutter hybrid architecture paired with custom Swift ActivityKit bridge for Dynamic Island',
      'Local vector tile cache for offline terminal navigation without cellular connection',
      'Geofencing service triggering low-power beacon discovery around airport gates',
      'Apple Wallet and Google Pay automated boarding pass credential generation',
    ],
    appStoreUrl: 'https://apps.apple.com/app/chronos-transit',
    githubUrl: 'https://github.com/omaarelamri/chronos-transit',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'iOS & Apple Ecosystem',
    description: 'Native development across iOS, iPadOS, watchOS, and macOS',
    skills: [
      { name: 'Swift 6 & SwiftUI', level: 98, highlight: true },
      { name: 'UIKit & AutoLayout', level: 95 },
      { name: 'Combine & Swift Concurrency', level: 94 },
      { name: 'CoreData & SwiftData', level: 92 },
      { name: 'Metal & CoreImage Shaders', level: 88, highlight: true },
      { name: 'HealthKit & CoreMotion', level: 90 },
      { name: 'Live Activities & Dynamic Island', level: 96 },
      { name: 'App Intents & SiriKit', level: 86 },
    ],
  },
  {
    title: 'Android & Kotlin Ecosystem',
    description: 'Modern reactive mobile systems with Google Jetpack and Multiplatform',
    skills: [
      { name: 'Kotlin & Coroutines / Flow', level: 96, highlight: true },
      { name: 'Jetpack Compose & Material 3', level: 95, highlight: true },
      { name: 'Kotlin Multiplatform (KMP)', level: 90 },
      { name: 'Room DB & SQLCipher', level: 92 },
      { name: 'Hilt, Koin & Dagger', level: 90 },
      { name: 'WorkManager & Foreground Services', level: 88 },
      { name: 'CameraX & Media3', level: 85 },
      { name: 'Android NDK / C++ interop', level: 78 },
    ],
  },
  {
    title: 'Cross-Platform & Hybrid',
    description: 'High-performance shared codebases with native bridges',
    skills: [
      { name: 'React Native (New Arch / Fabric)', level: 90, highlight: true },
      { name: 'TurboModules & JSI Bindings', level: 86 },
      { name: 'Flutter & Dart', level: 88 },
      { name: 'TypeScript & Mobile Redux/Zustand', level: 94 },
      { name: 'Expo & EAS Build Pipelines', level: 92 },
    ],
  },
  {
    title: 'Architecture & Mobile DevOps',
    description: 'System design, testing, performance profiling, and continuous delivery',
    skills: [
      { name: 'Clean Architecture & MVI / MVVM', level: 98, highlight: true },
      { name: 'Offline-First Sync & Conflict Resolution', level: 94 },
      { name: 'Instruments & Memory Profiling', level: 92, highlight: true },
      { name: 'Fastlane & Xcode Cloud', level: 90 },
      { name: 'XCTest, Espresso & Maestro UI Tests', level: 88 },
      { name: 'App Store / Google Play Release Management', level: 96 },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Sc. in Computer Science & Software Systems',
    institution: 'University of London / Imperial Computing Affiliate',
    location: 'London, United Kingdom',
    period: '2016 – 2020',
    honors: 'First Class Honours (Summa Cum Laude equivalent)',
    details: [
      'Specialized in Mobile Computing, Distributed Systems, Computer Graphics, and Real-Time Operating Systems.',
      'Dissertation: "Zero-Allocation Real-time Audio Synthesizer Engine on ARM Micro-Architectures".',
      'President of Mobile Developer & Robotics Society.',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: 'Apple Certified iOS Developer',
    issuer: 'Apple Developer Academy',
    year: '2021',
    credentialId: 'APPLE-DEV-98214',
  },
  {
    name: 'Associate Android Developer Certification',
    issuer: 'Google Developers Certification',
    year: '2022',
    credentialId: 'GGL-AND-44012',
  },
  {
    name: 'Advanced Metal Graphics & GPU Computing',
    issuer: 'WWDC Masterclass Laboratory',
    year: '2023',
    credentialId: 'WWDC-MTL-7719',
  },
  {
    name: 'Kotlin Multiplatform Certified Engineer',
    issuer: 'JetBrains Academy',
    year: '2024',
    credentialId: 'JB-KMP-00913',
  },
];
