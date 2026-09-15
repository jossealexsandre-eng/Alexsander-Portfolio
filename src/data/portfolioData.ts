import { Project, PhotoItem, ExperienceItem, CapabilityCategory } from '../types';
import etifaPreview from '../assets/etifa-preview.png';
import etifaLogo from '../assets/etifa-logo.png';
import easteriaLogo from '../assets/easteria-logo.png';
import easteriaStorefront from '../assets/easteria-storefront.jpg';
import easteriaKedai from '../assets/easteria-kedai.jpg';

export const PERSONAL_INFO = {
  name: "ALEXSANDER JOSSE",
  fullName: "Alexsander Josse Sulistio",
  positioning: "Creative Technologist & Visual Content Creator",
  statement: "I CREATE. I CAPTURE. I BUILD.",
  secondaryPositioning: "Technology × Visual Storytelling × Creativity",
  location: "Bandung, Indonesia",
  origin: "Originally from Biak, Papua",
  email: "jossealexsandre@gmail.com",
  socials: {
    personalInstagram: {
      handle: "@bangpenom",
      url: "https://instagram.com/bangpenom",
      label: "Instagram — @bangpenom"
    },
    photographyInstagram: {
      handle: "@alxv.films",
      url: "https://instagram.com/alxv.films",
      label: "Photography — @alxv.films"
    },
    linkedin: {
      name: "Alexsander Josse Sulistio",
      url: "http://www.linkedin.com/in/alexsander-josse-sulistio-718b702b5",
      label: "LinkedIn — Alexsander Josse"
    }
  }
};

export const PROJECTS: Project[] = [
  {
    id: "e-tifa",
    number: "01",
    title: "E-TIFA",
    subtitle: "Electronic Tracking & Information Fisheries Application",
    category: "Web Development / Information System",
    location: "Biak, Papua",
    year: "2024",
    description: "A web-based fisheries information system designed to support the recording and management of vessel and catch data in Biak, Papua.",
    highlight: "Designed and developed as a digital information system for fisheries data management.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    imageUrl: etifaPreview,
    caseStudy: {
      overview: "E-TIFA (Electronic Tracking & Information Fisheries Application) is a dedicated web information system conceived to digitize and optimize fisheries logistics and vessel catch administration in Biak, Papua. The platform streamlines manual maritime logs into a centralized, accessible digital database.",
      problem: "Traditional maritime data recording in coastal regions often relies on fragmented physical logs, creating delays in catch audit, vessel registration, and maritime quota supervision. The geographical context of Biak demands a reliable, structured digital system capable of managing vessel identities, departures, and landings with high data integrity.",
      objective: "To design and develop an intuitive, responsive web-based information system that centralizes fishing vessel profiles, operational permits, and real-time catch entries for fisheries management and administrative stakeholders in Biak, Papua.",
      process: [
        "Domain analysis of maritime data recording protocols in Biak",
        "Entity-relationship modeling for vessels, catch categories, captains, and harbor logs in MySQL",
        "Backend architecture design utilizing Laravel MVC framework",
        "Frontend interface implementation with clean tabular views and accessible forms",
        "Validation, role management, and harbor data reporting workflows"
      ],
      architecture: [
        "Model-View-Controller (MVC) pattern implemented via Laravel framework",
        "Relational MySQL database structured for normalized vessel and catch records",
        "Blade templating engine coupled with modern JavaScript for responsive client-side validations",
        "Role-based authentication dividing administrative overseers from maritime field registrars"
      ],
      features: [
        {
          title: "Vessel Profile & Fleet Registry",
          desc: "Comprehensive digital directory tracking fishing vessels, gross tonnage, registration credentials, and ownership records."
        },
        {
          title: "Catch & Landing Log Management",
          desc: "Standardized digital forms for recording daily marine catches by species, weight volume, and landing docks."
        },
        {
          title: "Harbor Clearance & Verification",
          desc: "Administrative approval pipeline confirming vessel inspection clearance before departure and upon harbor arrival."
        },
        {
          title: "Data Reporting & Export System",
          desc: "Structured filtering and aggregated reporting tools aiding administrative audits and marine resource planning."
        }
      ],
      galleryImages: [
        {
          url: etifaLogo,
          caption: "Official Logo of E-TIFA (Electronic Tracking & Information Fisheries Application)"
        },
        {
          url: etifaPreview,
          caption: "E-TIFA Web Platform System Interface"
        }
      ],
      outcome: "E-TIFA establishes a dependable digital foundation for fisheries records in Biak, Papua, demonstrating how structured information systems bridge technical engineering with regional coastal infrastructure needs.",
      reflection: "Building E-TIFA reinforced the importance of context-sensitive software engineering—designing systems that solve real-world administrative friction for local communities with clarity, speed, and reliability."
    }
  },
  {
    id: "mpl",
    number: "02",
    title: "MPL",
    subtitle: "Maranatha Pro League Ticketing & Event System",
    category: "Web Development / Ticketing System",
    location: "Bandung, Indonesia",
    year: "2024",
    description: "A web-based sports and esports ticketing platform concept created for the Maranatha Pro League, connecting tournament organizers, athletes, and spectator communities.",
    highlight: "High-energy sports editorial ticketing concept with real-time QR verification and multi-bracket management.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1600&q=85",
    caseStudy: {
      overview: "Maranatha Pro League (MPL) is a web-based ticketing platform concept engineered to modernize event admission and crowd logistics for university sports tournaments, featuring both traditional athletic competitions (Basketball 5v5) and competitive esports leagues (Mobile Legends).",
      problem: "Campus tournaments frequently struggle with slow physical gate entry, ticket duplication, and fragmented communication between event organizers and audience members across multi-day athletic and esports fixtures.",
      objective: "To construct a unified, high-octane sports ticketing platform combining modern online ticket purchasing, encrypted QR e-tickets, instant gate check-in scanning, and modular admin management.",
      process: [
        "Requirement gathering across sports divisions (Basketball 5v5) and esports sectors (Mobile Legends)",
        "Database schema design accommodating multi-tier seating, match schedules, and unique ticket UUIDs",
        "Implementation of QR code generation engine tied to spectator identification",
        "Creation of responsive gate marshal check-in scanning interface",
        "Sports editorial visual design featuring high-contrast typography and dynamic motion"
      ],
      architecture: [
        "Laravel backend providing secure session handling, transaction records, and QR code token validation",
        "MySQL database tracking match fixtures, bracket allocations, and check-in statuses in real time",
        "Multi-role user permission system: Spectators, Event Organizers, Gate Marshals, and Master Administrators"
      ],
      features: [
        {
          title: "Multi-Sport Tournament Modules",
          desc: "Dedicated event branches tailored specifically for Basketball 5v5 courts and Mobile Legends competitive stages."
        },
        {
          title: "Unique QR E-Ticket Generation",
          desc: "Automated digital passes generated upon booking with unique encrypted payload to prevent gate ticket duplication."
        },
        {
          title: "Real-time Gate Check-in Scanning",
          desc: "Fast, mobile-friendly scanner interface enabling staff to validate spectator credentials in seconds at stadium doors."
        },
        {
          title: "Organizer & Admin Dashboard",
          desc: "Operational portal providing live capacity counts, ticket distributions, and match day participant tracking."
        }
      ],
      visualDirection: "Sports editorial aesthetic pairing energetic basketball and esports imagery with restrained luxury typography.",
      outcome: "A cohesive, production-ready ticketing platform concept that bridges event excitement with rock-solid digital verification and user administration.",
      reflection: "Balancing the electric energy of collegiate sports with clean, frictionless transactional UX underscored the power of marrying visual direction with system architecture."
    }
  },
  {
    id: "easteria",
    number: "03",
    title: "EASTERIA",
    subtitle: "Easteria — Nongs and Chill",
    category: "Brunch & Breakfast / Digital Marketing",
    location: "Biak, Papua",
    year: "Est. 22 Juli 2026",
    role: "Pengurus Digital Marketing",
    instagramUrl: "https://instagram.com/hello.easteria",
    instagramHandle: "@hello.easteria",
    mapsUrl: "https://maps.app.goo.gl/brWnwfLNgLNS7QAe7",
    description: "Sebuah rumah makan brunch yang berdiri pada 22 Juli 2026 di Biak, Papua. Menyediakan hidangan sarapan dan brunch sebagai menu utama dalam nuansa santai 'nongs and chill'.",
    highlight: "Berperan sebagai Pengurus Digital Marketing: memimpin strategi konten media sosial (@hello.easteria), visual branding, fotografi sajian sarapan, dan positioning kedai.",
    technologies: ["Digital Marketing", "Brand Strategy", "Content Creation", "Food Photography", "Social Media"],
    imageUrl: easteriaKedai,
    caseStudy: {
      overview: "Easteria — Nongs and Chill adalah rumah makan brunch yang didirikan pada tanggal 22 Juli 2026 di Biak, Papua. Mengutamakan aneka menu sarapan dan hidangan brunch segar, Easteria dirancang sebagai oase kuliner pagi dan tempat berkumpul yang hangat untuk menikmati waktu santai bersama kerabat maupun rekan kerja.",
      problem: "Kebutuhan akan destinasi sarapan dan brunch yang menyajikan hidangan lezat dengan estetika visual kontemporer, suasana nongkrong santai, dan kemudahan informasi digital di Biak masih sangat langka. Diperlukan strategi digital marketing yang konsisten untuk memperkenalkan Kedai Easteria ke masyarakat lokal dan komunitas muda Biak.",
      objective: "Sebagai Pengurus Digital Marketing, merancang dan mengeksekusi kehadiran visual menyeluruh untuk Easteria: mulai dari logo identitas kedai, aktivasi Instagram resmi (@hello.easteria), fotografi menu sarapan yang menggugah selera, hingga integrasi navigasi Google Maps.",
      visualDirection: "Identitas visual ramah dengan logo hijau berkarakter senyum & daun organik, palet warna earth-tone hangat, dan atmosfer kedai terbuka yang nyaman khas Kedai Easteria Biak.",
      process: [
        "Perumusan konsep brand 'Nongs and Chill' dengan fokus utama menu sarapan pagi dan brunch",
        "Pengembangan logo dan visual identity resmi bertema senyum hijau yang bersahabat",
        "Penyusunan strategi konten digital marketing dan pengelolaan Instagram resmi @hello.easteria",
        "Pengambilan foto dan video kreatif (food & beverage, suasana kedai, dan interaksi pengunjung)",
        "Pengelolaan listing lokasi Google Maps dan promosi terarah kepada masyarakat Biak dan sekitarnya"
      ],
      features: [
        {
          title: "Sajian Utama: Menu Sarapan & Brunch Pilihan",
          desc: "Menghadirkan hidangan sarapan favorit, kopi berkualitas, dan camilan santai yang menjadi daya pikat utama pengunjung setiap pagi."
        },
        {
          title: "Pengelolaan Digital Marketing (@hello.easteria)",
          desc: "Memproduksi konten reels, feeds promosi, cerita di balik layar dapur, dan interaksi langsung dengan pelanggan di media sosial."
        },
        {
          title: "Identitas Visual & Desain Logo",
          desc: "Mengusung logo hijau ikonik dengan lekukan senyuman hangat, mencerminkan keramahan pelayanan dan kesegaran bahan makanan."
        },
        {
          title: "Navigasi Lokasi via Google Maps",
          desc: "Tautan Google Maps resmi untuk mempermudah akses pelanggan dan komunitas Biak dalam menemukan Kedai Easteria."
        }
      ],
      galleryImages: [
        {
          url: easteriaLogo,
          caption: "Logo Resmi Easteria — Nongs and Chill"
        },
        {
          url: easteriaKedai,
          caption: "Tampak Depan Kedai Easteria, Biak, Papua"
        }
      ],
      links: [
        {
          label: "Instagram @hello.easteria",
          url: "https://instagram.com/hello.easteria",
          icon: "instagram"
        },
        {
          label: "Google Maps Location",
          url: "https://maps.app.goo.gl/brWnwfLNgLNS7QAe7",
          icon: "map"
        }
      ],
      outcome: "Membangun Kedai Easteria sebagai destinasi brunch dan sarapan favorit di Biak dengan engagement media sosial yang hidup, identitas brand yang kuat, dan kunjungan pelanggan yang konsisten.",
      reflection: "Berperan sebagai Pengurus Digital Marketing di Easteria menegaskan bahwa pemasaran kuliner modern bertumpu pada sinergi antara rasa otentik makanan, estetika visual yang konsisten, dan kedekatan emosional dengan komunitas."
    }
  }
];

export const GALLERY_ITEMS: PhotoItem[] = [
  {
    id: "photo-1",
    title: "Crescent Over the City",
    category: "Nature",
    location: "Bandung, Indonesia",
    year: "2025",
    aspect: "tall",
    imageUrl: "/lens-sunset-sky.jpg?v=2",
    caption: "A crescent moon hangs above a blazing pink and coral sky, palm silhouettes framing the electric dusk of Bandung.",
    cameraInfo: "alxv.films"
  },
  {
    id: "photo-2",
    title: "Gelato Ice Cream",
    category: "Personal",
    location: "Tempo Gelato, Bandung",
    year: "2025",
    aspect: "tall",
    imageUrl: "/lens-gelato.jpg?v=2",
    caption: "A warm afternoon, a cone of chocolate and vanilla gelato at Tempo Gelato — savoring the quiet pleasure of a moment.",
    cameraInfo: "alxv.films"
  },
  {
    id: "photo-3",
    title: "Three Souls, One Horizon",
    category: "Portrait",
    location: "Bandung, Indonesia",
    year: "2025",
    aspect: "tall",
    imageUrl: "/lens-bw-portrait.jpg?v=2",
    caption: "Through wild grass and monochrome light — a candid moment of laughter and ease, captured in black and white.",
    cameraInfo: "alxv.films"
  },
  {
    id: "photo-4",
    title: "Before the Tide",
    category: "Nature",
    location: "Yogyakarta, Indonesia",
    year: "2024",
    aspect: "tall",
    imageUrl: "/lens-beach-sunset.jpg?v=2",
    caption: "Pastel blue meets pale rose above a remote coastal cliffside. Screw pines stand sentinel as the ocean exhales.",
    cameraInfo: "alxv.films"
  },
  {
    id: "photo-5",
    title: "Solitude on the Rock",
    category: "Personal",
    location: "Yogyakarta, Indonesia",
    year: "2024",
    aspect: "tall",
    imageUrl: "/lens-silhouette.jpg?v=2",
    caption: "A lone silhouette perched above the crashing surf at golden hour — stillness found between the waves.",
    cameraInfo: "alxv.films"
  },
  {
    id: "photo-6",
    title: "Frame Within a Frame",
    category: "Portrait",
    location: "Bandung, Indonesia",
    year: "2025",
    aspect: "tall",
    imageUrl: "/lens-portrait-green.jpg?v=1",
    caption: "A diptych study — quiet confidence framed by foreground blur and urban green. Two moments, one story.",
    cameraInfo: "alxv.films"
  },
  {
    id: "photo-7",
    title: "Prambanan at Dusk",
    category: "Nature",
    location: "Prambanan, Yogyakarta",
    year: "2024",
    aspect: "tall",
    imageUrl: "/lens-prambanan-sunset.jpg?v=1",
    caption: "The temple spires of Prambanan rise against a molten orange sky — sun and moon visible at once, an ancient witness to time.",
    cameraInfo: "alxv.films"
  },
  {
    id: "photo-8",
    title: "Ascending Stone",
    category: "Nature",
    location: "Prambanan, Yogyakarta",
    year: "2024",
    aspect: "tall",
    imageUrl: "/lens-prambanan-tower.jpg?v=1",
    caption: "Looking up at the main tower of Prambanan, framed by darkness on the left — a study in scale, shadow, and sacred geometry.",
    cameraInfo: "alxv.films"
  },
  {
    id: "photo-9",
    title: "The Guardian",
    category: "Nature",
    location: "Prambanan, Yogyakarta",
    year: "2024",
    aspect: "tall",
    imageUrl: "/lens-prambanan-statue.jpg?v=1",
    caption: "A divine guardian deity carved in stone, illuminated from below against the dark interior of the Prambanan temple chamber.",
    cameraInfo: "alxv.films"
  },
  {
    id: "photo-10",
    title: "Whispering Reeds",
    category: "Nature",
    location: "Bandung, Indonesia",
    year: "2025",
    aspect: "tall",
    imageUrl: "/lens-wild-grass.jpg?v=1",
    caption: "Monochrome wild reeds bending gently with the breeze — an intimate study of stillness and natural rhythm.",
    cameraInfo: "alxv.films"
  },
  {
    id: "photo-11",
    title: "Milestone at Maranatha",
    category: "Personal",
    location: "Maranatha Christian University, Bandung",
    year: "2025",
    aspect: "tall",
    imageUrl: "/lens-graduation-thesis.jpg?v=1",
    caption: "Holding the completed thesis high against the campus facade — celebrating a defining milestone of academic dedication and triumph.",
    cameraInfo: "alxv.films"
  },
  {
    id: "photo-12",
    title: "Emerald Symmetry",
    category: "Nature",
    location: "Bandung, Indonesia",
    year: "2025",
    aspect: "tall",
    imageUrl: "/lens-fern-frond.jpg?v=1",
    caption: "Sunlight traces the delicate architecture of a wild fern against the deep darkness — nature’s quiet geometry in vivid green.",
    cameraInfo: "alxv.films"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "easteria-marketing",
    role: "Digital Marketing Officer",
    type: "F&B / Hospitality",
    organization: "Easteria — Nongs and Chill",
    location: "Biak, Papua",
    period: "July 2026 — Present",
    description: "Leading digital marketing strategy, managing the official social media account (@hello.easteria), visual branding, and promoting the breakfast & brunch culinary experience at Kedai Easteria, Biak.",
    responsibilities: [
      "Digital Marketing Strategy",
      "Social Media Management (@hello.easteria)",
      "Food & Beverage Photography",
      "Video Reels & Content Creation",
      "Brand Visual Identity",
      "Customer Engagement & Promotion"
    ]
  },
  {
    id: "free-and-safe",
    role: "Visual Content Creator — Part-Time",
    type: "Part-Time",
    organization: "Free and Safe Indonesia",
    location: "Bandung, Indonesia",
    period: "2026 — Present",
    description: "Working as a part-time Visual Content Creator, supporting the organization through photography, videography, editing, and creative visual content.",
    responsibilities: [
      "Photography",
      "Videography",
      "Event documentation",
      "Video editing",
      "Social media content",
      "Visual storytelling",
      "Creative collaboration"
    ]
  },
  {
    id: "ps-victor-waang",
    role: "Spiritual Content Editor",
    organization: "PS. Victor Waang",
    location: "Biak, Papua",
    period: "Creative Contributor",
    description: "Worked as a spiritual content editor for Ps. Victor Waang, transforming sermon messages into impactful short-form video reels, inspiring quotes, and faith-driven social media content to reach and bless a broader audience.",
    responsibilities: [
      "Sermon video editing",
      "Spiritual content curation",
      "Social media reels & stories",
      "Creative typography & posters",
      "Visual storytelling",
      "Faith-based messaging",
      "Digital ministry distribution"
    ]
  },
  {
    id: "ukor-maranatha",
    role: "President",
    organization: "UKOR Maranatha",
    location: "Bandung, Indonesia",
    period: "2025",
    description: "Led the student sports and esports organization, coordinating teams, programs, events, communication, and organizational activities.",
    responsibilities: [
      "Leadership",
      "Team management",
      "Communication",
      "Event planning",
      "Organization",
      "Collaboration",
      "Creative coordination"
    ]
  },
  {
    id: "fisheries-biak",
    role: "Fisheries Administrator",
    type: "Government / Public Sector",
    organization: "Dinas Perikanan Biak — E-TIFA",
    location: "Biak, Papua",
    period: "2022 — 2023",
    description: "Served as a Fisheries Administrator in Biak, Papua, supporting maritime data administration, vessel registry, and the operations of the E-TIFA (Electronic Tracking & Information Fisheries Application) system.",
    responsibilities: [
      "Fisheries data recording & administration",
      "Vessel & catch log management",
      "Coordination with local fisheries stakeholders",
      "Field documentation & reporting",
      "Maritime resource monitoring"
    ]
  }
];

export const CAPABILITY_GROUPS: CapabilityCategory[] = [
  {
    title: "TECHNOLOGY",
    items: [
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "Information Systems"
    ]
  },
  {
    title: "VISUAL",
    items: [
      "Photography",
      "Videography",
      "Video Editing",
      "Visual Storytelling",
      "Event Documentation"
    ]
  },
  {
    title: "CONTENT",
    items: [
      "Content Creation",
      "Social Media Content",
      "Creative Concepts",
      "Digital Content",
      "Visual Communication"
    ]
  },
  {
    title: "LEADERSHIP",
    items: [
      "Leadership",
      "Team Collaboration",
      "Event Planning",
      "Project Coordination",
      "Communication"
    ]
  }
];

export const TOOLBOX = {
  development: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Laravel",
    "MySQL",
    "MySQL Workbench"
  ],
  creative: [
    "Photography",
    "Videography",
    "CapCut",
    "Visual Storytelling"
  ],
  ai: [
    "ChatGPT",
    "Claude",
    "NotebookLM"
  ]
};

export const EASTERIA_STORY_STEPS = [
  {
    step: "01",
    title: "Konsep Brunch",
    description: "Mendirikan rumah makan brunch di Biak, Papua (22 Juli 2026) dengan spesialisasi utama menu sarapan pagi berkualitas dan suasana santai."
  },
  {
    step: "02",
    title: "Brand & Logo",
    description: "Merancang identitas visual yang ramah dengan palet warna hijau alam dan lekukan logo senyum yang hangat dan bersahabat."
  },
  {
    step: "03",
    title: "Digital Marketing",
    description: "Memimpin strategi pemasaran media sosial @hello.easteria, menjangkau komunitas lokal, wisatawan, dan warga Biak secara luas."
  },
  {
    step: "04",
    title: "Visual & Content",
    description: "Memproduksi fotografi dan video reels kreatif menu sarapan, minuman kopi, serta atmosfer kedai yang menggugah selera."
  },
  {
    step: "05",
    title: "Community & Map",
    description: "Membangun kedekatan dengan pelanggan dan mempermudah akses lokasi melalui profil resmi Google Maps."
  }
];

export const PERSONAL_FACTS = [
  {
    label: "PHOTOGRAPHY",
    detail: "Around 7 years exploring photography and visual storytelling."
  },
  {
    label: "ORIGIN",
    detail: "Originally from Biak, Papua."
  },
  {
    label: "BASE",
    detail: "Currently based in Bandung, Indonesia."
  },
  {
    label: "SPORT",
    detail: "Enthusiastic about all sports — from football and basketball to badminton and beyond."
  },
  {
    label: "GAMING",
    detail: "Mobile Legends — Immortal."
  }
];
