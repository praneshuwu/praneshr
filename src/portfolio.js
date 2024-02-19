const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'PR.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Pranesh R',
  role: 'Front End Developer',
  description:
    `I spend my days (and often nights) painting the Internet canvas with projects and lines of code, turning zeroes and ones into immersive, interactive experiences`,
  resume: '../files/Pranesh R - Frontend Developer.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/pranesh-r-537191199/',
    github: 'https://github.com/praneshuwu',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Meguesta',
    description:
      'Prototype of a platform where event photographers can leverage the cloud to promote guest engagement and use the user-generated content to satisfy their clients',
    stack: ['TailwindCSS', 'TypeScript', 'NextJs', 'ReactJs'],
    sourceCode: 'https://github.com/praneshuwu/meguesta',
    livePreview: 'https://meguesta-v1.vercel.app/',
  },
  {
    name: 'Signup Flow',
    description:
      'A step-by-step signup flow, built with the motive of understanding the intention of the user, which can be used to curate the product for them',
    stack: ['SASS', 'TailwindCSS', 'React'],
    sourceCode: 'https://github.com/praneshuwu/signup-flow',
    livePreview: 'https://eden-signup-flow.vercel.app/',
  },
  {
    name: 'Compreweather',
    description:
      'A simple, user-friendly weather app which can be installed on any device (a Progressive Web App) to keep yourself updated about the weather. Hey, it also shows how good (or bad) the air-quality is in your locality!',
    stack: ['TailwindCSS', 'PWA', 'React'],
    sourceCode: 'https://github.com/praneshuwu/compreweather',
    livePreview: 'https://compreweather.vercel.app/',
  },
  // {
  //   name: 'Full-stack E-Commerce website',
  //   description:
  //     'Built on MERN stack, it\'s the whole package of an online shopping platform - check it out!',
  //   stack: ['TailwindCSS', 'PWA', 'React'],
  //   sourceCode: 'https://github.com/praneshuwu/compreweather',
  //   livePreview: 'https://compreweather.vercel.app/',
  // },
  {
    name: 'and many more!',
    description:
      'You can find my other projects\' source code here 👇',
    stack: ['Mostly Javascript'],
    sourceCode: 'https://github.com/praneshuwu/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'ReactJs',
  'JavaScript',
  'TypeScript',
  'NextJs',
  'React Native',
  'Redux',
  'TailwindCSS',
  'Styled Components',
  'NodeJs',
  'MongoDB',
  'HTML',
  'CSS',
  'SASS',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'krishna.pranesh@live.com',
}

export { header, about, projects, skills, contact }
