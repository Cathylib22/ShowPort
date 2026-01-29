import profileImg from "../assets/profile.jpg";
import heroBg from "../assets/hero-bg.jpg";
import logo from "../assets/logo.svg";

export const profileData = {
  brand: {
    name: "Catherine Young",
    subtitle: "Portfolio / Model Card",
    logo,
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
