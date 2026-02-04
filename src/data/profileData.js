// @ts-ignore
import profileImg from "../assets/profile.jpg";
// @ts-ignore
import heroBg from "../assets/hero-bg.jpg";
// @ts-ignore
import logo from "../assets/logo.svg";

export const profileData = {
  brand: {
    name: "Catherine Young",

    title: "Simulation Engine (Solver) Developer · FEA Application Engineer",

    intro:
      "I design and build high-performance simulation engines and applied FEA solutions, bridging numerical methods, software architecture, and real-world engineering problems.",

    affiliations: [
      {
        label: "CalcSim",
        type: "company",
        icon: "🏢",
      },
      {
        label: "Freelancer",
        type: "freelance",
        icon: "🧩",
      },
    ],
    /* -------- LINE 1: Engagement type -------- */
    engagement: {
      label: "Agency or Freelancer",
      icon: "🧭",
    },

    /* -------- LINE 2: WorksFor + roles -------- */
    worksFor: {
      company: "CalcSim",
      icon: "🏢",
      roles: ["Simulation Engineer", "FEA Developer", "Solver Developer"],
    },

    knowsAbout: [
      "Finite Element Analysis (FEA)",
      "Simulation Engines",
      "Numerical Methods",
      "Structural Mechanics",
      "CAD/CAE",
      "Fashion Design",
      "Runway Modeling",
    ],
    brandName: "CalcSim",

    location: {
      label: "Newport Beach, California, United States",
      icon: "📍",
    },

    roles: [
      { label: "Designer", icon: "🎨" },
      { label: "Runway Model", icon: "👠" },
    ],
    profiles: [
      { label: "Portfolio", url: "https://yourdomain.com" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/yourhandle" },
      { label: "Instagram", url: "https://www.instagram.com/yourhandle" },
    ],
    logo: null,
    logoAlt: "Catherine Young Logo",
  },

  hero: {
    backgroundImage: heroBg,
  },

  profileCard: {
    image: profileImg,
    displayName: "Catherine Young",
  },

  stats: [
    { value: "172", label: "posts" },
    { value: "212", label: "followers" },
    { value: "321", label: "following" },
  ],

  measurements: {
    height: `5'8"`,
    bust: "32D",
    waist: `24.8"`,
    hips: `35.5"`,
    shoes: "6.5 US",
  },

  contact: {
    email: "xoyqha@gmail.com",
    phone: "(949) 343-0822",
  },
};
