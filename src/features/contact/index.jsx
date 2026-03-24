import { memo } from "react";
import { faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TEXT_COLORS } from "../../shared/constants/classNames";
import { cn } from "../../shared/utils/cn";

const SOCIAL_LINKS = [
  {
    id: "facebook",
    url: "https://www.facebook.com/jetsur.24",
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

const EMAIL = "jet-surachok.job@hotmail.com";

const Contact = memo(function Contact() {
  return (
    <div className="flex flex-col items-start gap-3 lg:gap-4 pl-0 lg:pl-6 pt-4 border-t border-gray-800/60 lg:pt-0 lg:border-t-0">
      {/* Label */}
      <div className="text-xs lg:text-sm font-semibold text-green-400 uppercase tracking-wider">
        Let's Connect
      </div>

      {/* Icons */}
      <div className="flex gap-5 lg:gap-6 text-xl text-gray-400">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("transition-colors", TEXT_COLORS.greenHover)}
            aria-label={link.label}
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}

        {/* Email with tooltip */}
        <div className="hidden lg:block relative group">
          <a
            href={`mailto:${EMAIL}`}
            className={cn("transition-colors", TEXT_COLORS.greenHover)}
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-gray-800 border border-gray-700 text-xs text-gray-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {EMAIL}
          </div>
        </div>
      </div>

      {/* Mobile email text for visibility and copyability */}
      <a
        href={`mailto:${EMAIL}`}
        className={cn("lg:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-700/70 text-xs text-gray-400 break-all transition-colors", TEXT_COLORS.greenHover)}
        aria-label="Email address"
      >
        <FontAwesomeIcon icon={faEnvelope} className="text-[11px]" />
        <span>{EMAIL}</span>
      </a>
    </div>
  );
});

export default Contact;
