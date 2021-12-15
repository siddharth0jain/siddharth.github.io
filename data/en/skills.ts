import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiNextDotJs, SiGraphql, SiTypescript } from 'react-icons/si'
import { ImGit } from 'react-icons/im'
import getExperienceTime from '../../utils/getExperienceTime'
import { SkillsInterface } from '../../components/section/skills/types'

const skills: SkillsInterface[] = [
  {
    name: 'React.js',
    expTime: () => getExperienceTime(new Date("2021-01-10")),
    icon: FaReact
  },
  {
    name: 'Next.js',
    expTime: () => getExperienceTime(new Date("2021-02-10")),
    icon: SiNextDotJs
  },
  {
    name: 'React Native',
    expTime: () => getExperienceTime(new Date("2021-02-10")),
    icon: FaReact
  },
  {
    name: 'Node.js',
    expTime: () => getExperienceTime(new Date("2021-08-10")),
    icon: FaNodeJs
  },
  {
    name: 'GraphQL',
    expTime: () => getExperienceTime(new Date("2021-08-10")),
    icon: SiGraphql
  },
  {
    name: 'Git',
    expTime: () => getExperienceTime(new Date("2021-01-10")),
    icon: ImGit
  },
  {
    name: 'Typescript',
    expTime: () => getExperienceTime(new Date("2021-01-10")),
    icon: SiTypescript
  },
  {
    name: 'HTML',
    expTime: () => getExperienceTime(new Date("2018-10-10")),
    icon: FaHtml5
  },
  {
    name: 'CSS',
    expTime: () => getExperienceTime(new Date("2018-10-10")),
    icon: FaCss3
  },
]


export default skills
