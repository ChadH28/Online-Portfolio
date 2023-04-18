import CV from "../assets/docs/Resume.pdf";
import aboutImage from "../assets/chad-removebg.png";

export const data = {
  about_intro_content: {
    heading: "About Me",
    sub_heading:
      "Developer & Entrepreneur in the making, based out of Sunny Cape Town",
    paragraph: `
        I have a strong drive and a deep interest in web development. I
        consider building a functioning website through code to be an art
        form and have a passion for solving problems and creating visually
        appealing content. I'm dedicated to continually learning and
        improving my skills, including mastering programming languages and
        understanding the broader web technology ecosystem. I recognize the
        importance of search engine optimization and am committed to
        delivering high-quality results that exceed expectations. I'm quite
        enthusiastic about making a positive impact in the web development
        industry and look forward to collaborating with clients and managers
        to create memorable and immersive experiences.
        `,
  },
  bio: {
    column1: [
      {
        icon: "fas fa-birthday-cake",
        title: "Birthday",
        content: `28<sup>th</sup> October 1997`,
      },
      {
        icon: "fas fa-map-marked-alt",
        title: "Location (suburb)",
        content: `Northern Suburbs, Cape Town`,
      },
      {
        icon: "fas fa-plane-departure",
        title: "Willing to relocate",
        content: `Yes, anywhere locally or abroad`,
      },
    ],
    column2: [
      {
        icon: "fas fa-globe-africa",
        title: "Nationality",
        content: `South African`,
      },
      {
        icon: "fas fa-sms",
        title: "Direct Contact",
        content: `(+27) 84 466 4783`,
      },
    ],
  },
  find_me: {
    buttons: [
      {
        href: CV,
        label: "DOWNLOAD CV",
        fade: "fade-right",
      },
      {
        href: "#contactme",
        label: "HIRE ME",
        fade: "fade-left",
      },
    ],
  },
  image: aboutImage,
};