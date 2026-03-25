import { faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

/**
 * Navigation items for navbar and mobile nav
 */
export const NAV_ITEMS = [
  { title: "About", sectionId: "About-section" },
  { title: "Tech Stack", sectionId: "TechStack-section" },
  { title: "QA Manual", sectionId: "ManualTesting-section" },
  { title: "QA Automation", sectionId: "AutomationTesting-section" },
  { title: "GitHub", sectionId: "GitHub-section" },
];

/**
 * Social media links for contact section
 */
export const SOCIAL_LINKS = [
  {
    id: "facebook",
    url: "https://www.facebook.com/jet.surachokk/",
    icon: faFacebook,
    label: "Facebook",
  },
  {
    id: "github",
    url: "https://github.com/JSONBREAK",
    icon: faGithub,
    label: "GitHub",
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/surachok-kaewchan/",
    icon: faLinkedinIn,
    label: "LinkedIn",
  },
];

/**
 * Email address for contact
 */
export const EMAIL = "jet-surachok.job@hotmail.com";
