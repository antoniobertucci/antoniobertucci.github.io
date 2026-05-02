export const profile = {
  name: 'Antonio Bertucci',
  title: 'Engineering leader across platform, mobile, and delivery',
  location: 'Barcelona, Spain',
  company: 'Currently at Glovo',
  intro:
    'I am a dedicated and passionate manager with more than a decade of experience across engineering leadership, mobile products, platform work, and delivery.',
  summary: [
    'Over the last decade I have led engineering teams, helped organisations deliver reliably, improved engineering processes, and invested in strong engineering cultures.',
    'My work spans product engineering, mobile platform leadership, internal tooling, CI/CD, distributed teams, and organisational scaling challenges in companies such as Glovo, NewsUK, Scout24, SoundCloud, and Novoda.',
    'I care deeply about how engineering practices shape high-performing teams, and how well-crafted processes, automation, and thoughtful leadership help organisations scale without losing quality.',
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/antoniobertucci/',
    github: 'https://github.com/mr-archano',
    resume: 'https://www.visualcv.com/abertucci/',
  },
  highlights: [
    { label: 'Experience', value: '10+ years' },
    { label: 'Focus', value: 'Platform, mobile, delivery' },
    { label: 'Teams', value: 'Distributed & cross-functional' },
  ],
  languages: ['Italian', 'English', 'German'],
  award: 'Adobe MAX 2011 Public Favorite Prize of the Adobe AIR App Challenge',
};

export const experiences = [
  {
    period: 'Today',
    company: 'Glovo',
    role: 'Engineering leadership',
    location: 'Barcelona, Spain',
    description:
      'Public profile and writing point to current work at Glovo, where recent topics include infrastructure automation, AWS networking, and database platform work at scale.',
    bullets: [
      'Operating in a high-scale engineering environment in Barcelona.',
      'Public writing highlights work around Aurora MySQL, automation, and internal platform challenges.',
      'Continuing a career focused on leverage: better systems, better teams, and better delivery.',
    ],
  },
  {
    period: '2018 — 2019',
    company: 'Novoda',
    role: 'Engineering Manager',
    description:
      'Worked closely with the Head of Engineering, directly managed engineers, and acted as the main interface with clients including NewsUK and Glovo.',
    bullets: [
      'Managed 4–6 direct reports and supported the growth of 8 engineers through regular 1:1s, workshops, and goal-oriented initiatives.',
      'Co-ran 60+ performance reviews for the wider engineering department.',
      'Helped define strategy, quality practices, and collaboration models for distributed teams across multiple countries and time zones.',
      'Led initiatives for Glovo focused on mobile productivity, CI/CD, and internal enablement.',
    ],
  },
  {
    period: '2014 — 2018',
    company: 'Novoda',
    role: 'Android Platform Lead',
    description:
      'Led teams of 3–8 engineers building mobile products used by millions of users for clients like NewsUK, SoundCloud, Scout24, and Channel 4.',
    bullets: [
      'Led technical and architectural decisions for mobile apps inside broader product ecosystems.',
      'Worked closely with product teams and analysts to turn requirements into clear development plans.',
      'Improved quality, communication, and throughput in distributed team setups.',
      'Mentored engineers on testing, architecture, scalability, and engineering best practices.',
    ],
  },
  {
    period: '2013 — 2014',
    company: 'Novoda',
    role: 'Android Software Craftsman',
    description:
      'Built Android products for clients such as Tesco, MUBI, Arte, and NewsUK, with a focus on polished UI, automation, and maintainable delivery.',
    bullets: [
      'Built custom branded UI components and animations.',
      'Improved automated tooling to support high-quality, repeatable delivery.',
    ],
  },
  {
    period: '2010 — 2013',
    company: 'SmallScreenDesign & freelance',
    role: 'Mobile developer',
    description:
      'Worked across Android, iOS, BlackBerry, and Adobe AIR/Flex projects, combining prototyping, product delivery, and close collaboration with design teams.',
    bullets: [
      'Supported early product ideas through fast prototyping.',
      'Implemented polished custom UI/UX with short feedback loops.',
      'Built a strong foundation across mobile engineering and client delivery.',
    ],
  },
];

export const projects = [
  {
    name: 'Glovo',
    period: 'May 2019 — Nov 2019',
    link: 'https://glovoapp.com/',
    description:
      'Led a team of four engineers augmenting the platform team to support Android and iOS app teams, improve CI/CD, and build internal SDKs and tooling.',
  },
  {
    name: 'SoundCloud Pulse',
    period: 'Jun 2015 — Apr 2016',
    link: 'https://play.google.com/store/apps/details?id=com.soundcloud.creators',
    description: 'Android lead developer on the creator-facing mobile product for SoundCloud.',
  },
  {
    name: 'The Sun Mobile',
    period: '2014 — 2015',
    link: 'http://novoda.com/work/the-sun',
    description:
      'Led Android delivery and helped shape the collaboration, quality, and architecture practices behind a large distributed product effort.',
  },
  {
    name: 'MUBI',
    period: 'Oct 2013 — Feb 2014',
    link: 'http://novoda.com/work/mubi',
    description: 'Android development focused on product quality and crafted user experience.',
  },
];

export const writing = [
  {
    title: 'Aurora MySQL at Glovo — The Foundation',
    link: 'https://medium.com/glovo-engineering/aurora-mysql-at-glovo-the-foundation-df1d2ca642a7',
    description:
      'A public write-up about scaling Aurora MySQL with automation and platform thinking.',
  },
  {
    title: 'How Glovo migrated their self-managed VPN solution to AWS Client VPN',
    link: 'https://aws.amazon.com/blogs/networking-and-content-delivery/how-glovo-migrated-their-self-managed-vpn-solution-to-aws-client-vpn/',
    description:
      'A practical engineering story about infrastructure migration, reliability, and operational simplification.',
  },
];

export const education = [
  {
    period: '2006 — 2010',
    school: 'University of Calabria',
    degree: 'MSc in Computer Engineering',
    detail:
      'Graduated with 110/110. Final work focused on topic segmentation and probabilistic modelling of textual data.',
  },
  {
    period: '2000 — 2006',
    school: 'University of Calabria',
    degree: 'BSc in Computer Engineering',
    detail:
      'Graduated with 98/110. Final work: “Learning Robust Web Wrappers”.',
  },
];
