import { IconType } from "react-icons/lib";

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export interface footerSocialLinksProps {
  label: string
  link: string,
  icon: IconType
}

export const footerSocialLinks: footerSocialLinksProps[] = [
  {
    label: 'Github Profile',
    link: 'https://www.github.com/siddharth0jain',
    icon: FaGithub
  },
  {
    label: 'Linkedin Profile',
    link: 'https://www.linkedin.com/in/siddharth0jain/',
    icon: FaLinkedin
  },
  {
    label: 'Mail Me',
    link: 'mailto:siddharth0jain@gmail.com',
    icon: SiGmail
  },
]
