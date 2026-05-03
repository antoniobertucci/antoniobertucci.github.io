export const profile = {
  name: 'Antonio Bertucci',
  title: 'Director of Engineering across platform, mobile, and delivery',
  location: 'Barcelona, Spain',
  company: 'Director of Engineering at Glovo',
  intro:
    'I am a dedicated and passionate engineering leader with more than a decade of experience across management, mobile products, platform work, and delivery.',
  summary: [
    'Over the last decade plus I have led engineering teams, helped organisations deliver reliably, improved engineering processes, and invested in strong engineering cultures.',
    'My work spans director, senior engineering manager, engineering manager, and platform leadership roles across companies such as Glovo, Zalando, and Novoda.',
    'I care deeply about how engineering practices shape high-performing teams, and how well-crafted processes, tooling, and automation help organisations scale without losing quality.',
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/antoniobertucci/',
    github: 'https://github.com/mr-archano',
    resume: 'https://www.visualcv.com/abertucci/',
  },
  highlights: [
    { label: 'Experience', value: '15+ years' },
    { label: 'Focus', value: 'Platform, mobile, delivery' },
    { label: 'Current role', value: 'Director of Engineering' },
  ],
  languages: ['Italian', 'English', 'German'],
  award: 'Adobe MAX 2011 Public Favorite Prize of the Adobe AIR App Challenge',
};

export const experiences = [
  {
    period: 'Apr 2025 — May 2026',
    company: 'Glovo',
    role: 'Director of Engineering',
    location: 'Barcelona, Catalonia, Spain · On-site',
    description:
      'Leading engineering at director level in Glovo, building on earlier management roles in the same organisation.',
    bullets: [
      'Progressed from engineering manager to senior engineering manager and then director of engineering.',
      'Operating in a high-scale platform and product environment in Barcelona.',
      'Continuing a career focused on leverage: stronger systems, stronger teams, and stronger delivery.',
    ],
  },
  {
    period: 'Apr 2024 — Apr 2025',
    company: 'Glovo',
    role: 'Senior Engineering Manager',
    location: 'Barcelona, Catalonia, Spain · On-site',
    description:
      'Senior management role focused on engineering leadership and organisational effectiveness within Glovo.',
    bullets: [
      'Built on prior team and platform leadership inside the company.',
      'Worked across engineering leadership, engineering management, and related organisational topics.',
    ],
  },
  {
    period: 'Apr 2022 — Apr 2024',
    company: 'Glovo',
    role: 'Engineering Manager',
    location: 'Barcelona, Catalonia, Spain',
    description:
      'Engineering manager role at Glovo, alongside public writing on infrastructure automation, AWS networking, and database platform work at scale.',
    bullets: [
      'Worked in a high-scale engineering environment with platform and delivery challenges.',
      'Public writing highlights Aurora MySQL, automation, and internal platform improvements.',
      'Contributed through technical discussions, technical leadership, and engineering management.',
    ],
  },
  {
    period: 'Jun 2020 — Feb 2022',
    company: 'Zalando SE',
    role: 'Engineering Manager',
    location: 'Berlin, Germany',
    description:
      'Led 4 mobile engineers as part of the Beauty Proposition team, in a role centered on team health, collaboration, and cross-functional delivery.',
    bullets: [
      'Led a mobile engineering team in a broader cross-functional environment.',
      'Built trust and psychological safety, helping maintain morale and retention during a period of high uncertainty.',
      'Supported strongly collaborative ways of working across organisational boundaries, with product managers, designers, and engineers working as one team.',
      'Was recognised publicly by a former colleague for thoughtful leadership and a high-performing team culture.',
    ],
  },
  {
    period: 'Dec 2017 — Nov 2019',
    company: 'Novoda',
    role: 'Principal Engineer / Engineering Manager',
    location: 'Berlin, Germany',
    description:
      'Worked closely with the Head of Engineering and directly managed engineers in Novoda while serving clients including NewsUK and Glovo.',
    bullets: [
      'Managed 4–6 direct reports and supported the growth of 8 engineers through regular 1:1s, workshops, and goal-oriented initiatives.',
      'Co-ran 60+ performance reviews for the wider engineering department.',
      'Helped define strategy, quality practices, and collaboration models for distributed teams across multiple countries and time zones.',
      'Led initiatives for Glovo focused on mobile productivity, CI/CD, and internal enablement.',
    ],
  },
  {
    period: 'Mar 2014 — Dec 2017',
    company: 'Novoda',
    role: 'Android Platform Lead',
    location: 'London, United Kingdom / Berlin, Germany',
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
    period: 'Jul 2013 — Mar 2014',
    company: 'Novoda',
    role: 'Android Software Craftsman',
    location: 'London Area, United Kingdom',
    description:
      'Used in-depth Android knowledge and mobile software craftsmanship to build products with a focus on polished UI, automation, and maintainable delivery.',
    bullets: [
      'Built custom branded UI components and animations.',
      'Improved automated tooling to support high-quality, repeatable delivery.',
    ],
  },
  {
    period: 'Sep 2010 — Jan 2013',
    company: 'Small Screen Design',
    role: 'Lead Android Developer',
    description:
      'Collaborated with studios in the UK and US on Android and mobile product work, combining prototyping, delivery, and close collaboration with design teams.',
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
