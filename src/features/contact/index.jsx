import { memo } from "react";
import { faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
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

const Contact = memo(function Contact() {
  return (
    <div className="flex flex-col gap-4 pl-6">
      {/* Label */}
      <div className="text-sm font-semibold text-green-400 uppercase tracking-wider">
        Let's Connect
      </div>

      {/* Icons */}
      <div className="flex gap-6 text-xl text-gray-400">
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
      </div>
    </div>
  );
});

export default Contact;
