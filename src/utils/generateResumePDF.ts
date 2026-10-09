/**
 * Generates and downloads a clean, professional PDF resume for the Senior Mobile Developer.
 * Uses standard PDF 1.4 formatting rendered in binary for maximum client compatibility
 * with zero external weight.
 */

export function downloadResumePDF(filename = 'Omar_Senior_Mobile_Developer_Resume.pdf') {
  // Construct standard PDF specification with proper trailer, xref and objects
  const lines = [
    "%PDF-1.4",
    "%âãÏÓ",
    "1 0 obj",
    "<< /Type /Catalog /Pages 2 0 R >>",
    "endobj",
    "2 0 obj",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "endobj",
    "3 0 obj",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    "endobj",
    "4 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "endobj",
    "5 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    "endobj"
  ];

  // PDF page stream instructions (points origin is bottom-left, page is 612x792)
  const streamCommands = [
    "q",
    // Top Accent Rule
    "0.1 0.1 0.1 rg",
    "36 746 540 1 re f",
    
    // Header Name & Title
    "BT",
    "/F2 20 Tf",
    "36 756 Td",
    "(SENIOR MOBILE DEVELOPER & PRINCIPAL ARCHITECT) Tj",
    "ET",

    "BT",
    "/F1 9 Tf",
    "36 732 Td",
    "(omaarelamri@gmail.com  |  Portfolio: mainframe-mobile.dev  |  London, UK  |  iOS Swift & Android Kotlin) Tj",
    "ET",

    // Section 1: Executive Summary
    "BT",
    "/F2 11 Tf",
    "36 706 Td",
    "(EXECUTIVE PROFILE & PHILOSOPHY) Tj",
    "ET",
    "0.7 0.7 0.7 RG 36 700 m 576 700 l S",

    "BT",
    "/F1 8.5 Tf",
    "36 686 Td",
    "(Senior Mobile Engineer with 10+ years of high-performance client engineering across institutional finance, media capture,) Tj",
    "0 -13 Td",
    "(and spatial DSP audio. Shipped apps serving 15M+ users with 99.98% crash-free sessions. Expert in Swift 6 concurrency,) Tj",
    "0 -13 Td",
    "(Kotlin Coroutines/KMP, React Native JSI/TurboModules, Metal GPU pipelines, offline-first local state, and Secure Enclave biometrics.) Tj",
    "ET",

    // Section 2: Technical Proficiencies
    "BT",
    "/F2 11 Tf",
    "36 636 Td",
    "(CORE TECHNICAL PROFICIENCIES) Tj",
    "ET",
    "0.7 0.7 0.7 RG 36 630 m 576 630 l S",

    "BT",
    "/F2 8.5 Tf",
    "36 616 Td",
    "(Mobile Development: ) Tj",
    "/F1 8.5 Tf",
    "(Android SDK, React Native, Jetpack Compose, CameraX, OpenCV, Google Maps API, Coroutines, StateFlow, Room, Bluetooth Sockets.) Tj",
    "0 -13 Td",
    "/F2 8.5 Tf",
    "(Languages & Architecture: ) Tj",
    "/F1 8.5 Tf",
    "(Kotlin, Java, JavaScript, Clean Architecture (MVVM), Multi-Threading, Repository Pattern.) Tj",
    "0 -13 Td",
    "/F2 8.5 Tf",
    "(Networking & APIs: ) Tj",
    "/F1 8.5 Tf",
    "(Retrofit, REST APIs, Socket.IO, OAuth2/JWT, Firebase (Auth, Firestore, FCM, Crashlytics).) Tj",
    "0 -13 Td",
    "/F2 8.5 Tf",
    "(Payments & Tooling: ) Tj",
    "/F1 8.5 Tf",
    "(Stripe, Paypal, Konnect, Git, CI/CD, Unit Testing, Raspberry Pi IoT Communication.) Tj",
    "ET",

    // Section 3: Professional Experience
    "BT",
    "/F2 11 Tf",
    "36 540 Td",
    "(PROFESSIONAL EXPERIENCE) Tj",
    "ET",
    "0.7 0.7 0.7 RG 36 534 m 576 534 l S",

    // Role 1
    "BT",
    "/F2 9.5 Tf",
    "36 518 Td",
    "(Principal Mobile Architect & Lead Engineer  --  Mainframe Systems / Studio) Tj",
    "/F1 8.5 Tf",
    "280 0 Td",
    "(2022 - Present | London / Remote) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "44 504 Td",
    "(* Architected decentralized fintech and low-latency audio synthesis engine running 120fps with zero frame drops.) Tj",
    "0 -12 Td",
    "(* Built custom React Native TurboModules in C++ and Metal compute shaders cutting cold startup latency by 48%.) Tj",
    "0 -12 Td",
    "(* Enforced strict Sendable isolation and zero-data-race invariants across multi-module SPM workspace.) Tj",
    "ET",

    // Role 2
    "BT",
    "/F2 9.5 Tf",
    "36 462 Td",
    "(Senior iOS & Native Systems Engineer  --  Apex Fintech & Global Labs) Tj",
    "/F1 8.5 Tf",
    "280 0 Td",
    "(2019 - 2022 | Berlin - Zurich) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "44 448 Td",
    "(* Directed cross-functional squads delivering high-frequency mobile order surfaces handling $2.4B in annual transactions.) Tj",
    "0 -12 Td",
    "(* Implemented hardware-attested biometric key generation via Apple Secure Enclave and Android KeyStore StrongBox.) Tj",
    "0 -12 Td",
    "(* Elevated production crash-free session rate from 99.4% to 99.98% across 4M monthly active devices.) Tj",
    "ET",

    // Role 3
    "BT",
    "/F2 9.5 Tf",
    "36 406 Td",
    "(Mobile Software Engineer  --  Cognitive Mobile Interactive) Tj",
    "/F1 8.5 Tf",
    "280 0 Td",
    "(2016 - 2019 | Munich) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "44 392 Td",
    "(* Authored custom OpenGL/Metal shaders, sensor fusion DSP pipelines, and peer-to-peer sync protocols.) Tj",
    "0 -12 Td",
    "(* Refactored legacy monolithic Objective-C and Java codebases to modern Swift & Kotlin modular architectures.) Tj",
    "ET",

    // Section 4: Academic Background & Languages
    "BT",
    "/F2 11 Tf",
    "36 350 Td",
    "(EDUCATION & LANGUAGES) Tj",
    "ET",
    "0.7 0.7 0.7 RG 36 344 m 576 344 l S",

    "BT",
    "/F2 9 Tf",
    "36 328 Td",
    "(Software Engineer  --  EPI - International Polytechnic School) Tj",
    "/F1 8.5 Tf",
    "280 0 Td",
    "(2018 - 2021 | Sousse, Tunisia) Tj",
    "ET",
    "BT",
    "/F2 9 Tf",
    "36 314 Td",
    "(Bachelor of Computer Science  --  School of Sciences and Technology) Tj",
    "/F1 8.5 Tf",
    "280 0 Td",
    "(2015 - 2018 | Hammam Sousse, Tunisia) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "36 298 Td",
    "(Languages: French (Fluent)  |  English (B2)  |  German (A2)  |  Spanish (Basic)) Tj",
    "ET",

    // Section 5: Flagship Projects Highlight
    "BT",
    "/F2 11 Tf",
    "36 250 Td",
    "(KEY ARCHITECTURAL PROJECTS) Tj",
    "ET",
    "0.7 0.7 0.7 RG 36 244 m 576 244 l S",

    "BT",
    "/F2 8.5 Tf",
    "36 228 Td",
    "(1. NeuroTone Spatial DSP: ) Tj",
    "/F1 8.5 Tf",
    "(Swift 6, Metal 3, C++ CoreAudio engine. Sub-5ms audio roundtrip with binaural head-tracking.) Tj",
    "0 -13 Td",
    "/F2 8.5 Tf",
    "(2. Apex Ledger Vault: ) Tj",
    "/F1 8.5 Tf",
    "(Kotlin Multiplatform, Jetpack Compose, Secure Enclave. Cold-storage signing & zero-leak telemetry.) Tj",
    "0 -13 Td",
    "/F2 8.5 Tf",
    "(3. Strata Studio Pro: ) Tj",
    "/F1 8.5 Tf",
    "(React Native TurboModules, Metal Compute, AVFoundation. Real-time ProRes LOG video LUT grading.) Tj",
    "0 -13 Td",
    "/F2 8.5 Tf",
    "(4. Chrono Health Engine: ) Tj",
    "/F1 8.5 Tf",
    "(Flutter, Rust FFI, SQLite/WAL. Local-first encrypted biometric storage with offline sync.) Tj",
    "ET",

    // Footer
    "0.9 0.9 0.9 RG 36 60 m 576 60 l S",
    "BT",
    "/F1 7.5 Tf",
    "36 46 Td",
    "(Generated from Mainframe Studio Portfolio  --  Direct inquiries: omaarelamri@gmail.com) Tj",
    "ET",
    "Q"
  ];

  const streamContent = streamCommands.join("\n");
  const streamLength = streamContent.length;

  const streamObj = [
    "6 0 obj",
    `<< /Length ${streamLength} >>`,
    "stream",
    streamContent,
    "endstream",
    "endobj"
  ];

  const fullObjects = [...lines, ...streamObj];
  
  // Calculate xref offsets
  let offset = 0;
  const offsets: number[] = [0]; // 0th object is always free
  
  let currentFileString = "";
  for (let i = 0; i < fullObjects.length; i++) {
    const item = fullObjects[i];
    if (item.match(/^\d+ 0 obj$/)) {
      offsets.push(offset);
    }
    const chunk = item + "\n";
    offset += chunk.length;
    currentFileString += chunk;
  }

  const xrefStart = offset;
  let xrefString = `xref\n0 ${offsets.length}\n0000000000 65535 f \n`;
  for (let j = 1; j < offsets.length; j++) {
    const offStr = offsets[j].toString().padStart(10, '0');
    xrefString += `${offStr} 00000 n \n`;
  }

  const trailerString = `trailer\n<< /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

  const finalPdf = currentFileString + xrefString + trailerString;

  const blob = new Blob([finalPdf], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 15000);
}
