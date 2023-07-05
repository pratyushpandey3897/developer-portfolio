import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Pratyush Pandey',
  title: "Hi all, I'm Pratyush",
  description:
    "I'm a Computer Science and Engineering student at Arizona State University. As a passionate software developer, I specialize in cloud-native application development. With 3+ years of experience, I excel in building scalable enterprise-grade solutions. My skills encompass Cloud Computing Technologies, test-driven development, and agile methodologies. Let's collaborate and make a lasting impact with innovative projects.",
  resumeLink:
    'https://www.linkedin.com/in/pratyush-pandey-prat/overlay/1635521190601/single-media-viewer/?profileId=ACoAAB1a6KwBM7GaN_EHQ_TCDXDfdSu6shdie4E',
};

export const openSource = {
  githubUserName: 'pratyushpandey3897',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/pratyush-pandey-prat/',
  github: 'https://github.com/pratyushpandey3897',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'I build optimized, scalable applications',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Developing responsive application using React and Angular'),
        emoji('⚡ Building web pplication using Java, NodeJS'),
        emoji(
          '⚡ Building RESTful APIs and services using Spring and Nest JS frameworks'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Java',
          fontAwesomeClassName: 'vscode-icons:file-type-java',
        },
        {
          skillName: 'Spring',
          fontAwesomeClassName: 'devicon:spring',
        },
        {
          skillName: 'NodeJS',
          fontAwesomeClassName: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-nestjs',
        },
        {
          skillName: 'GraphQL',
          fontAwesomeClassName: 'logos:graphql',
        },
        {
          skillName: 'REST',
          fontAwesomeClassName: 'logos:graphql',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
      ],
    },
    {
      title: 'System Architecture, Infrastructure and Cloud Technologies',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience with multiple Cloud Platforms'),
        emoji(
          '⚡ Deploying web applications on virtual machine instances along with database integrations'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for integration testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'AWS Lambda',
          fontAwesomeClassName: 'logos:aws-lambda',
        },
        {
          skillName: 'AWS CloudFront',
          fontAwesomeClassName: 'logos:aws-cloudfront',
        },
        {
          skillName: 'GCP',
          fontAwesomeClassName: 'devicon:googlecloud',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'MySQL',
          fontAwesomeClassName: 'logos:mysql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Kubernetes',
          fontAwesomeClassName: 'logos:kubernetes',
        },
        {
          skillName: 'CloudFoundry',
          fontAwesomeClassName: 'vscode-icons:file-type-cloudfoundry',
        },
        {
          skillName: 'Openstack',
          fontAwesomeClassName: 'devicon:openstack',
        },
        {
          skillName: 'Apache Tomcat',
          fontAwesomeClassName: 'devicon:tomcat',
        },
        {
          skillName: 'Terraform',
          fontAwesomeClassName: 'devicon:terraform',
        },
        {
          skillName: 'Circleci',
          fontAwesomeClassName: 'logos:circleci',
        },
        {
          skillName: 'Jenkins',
          fontAwesomeClassName: 'logos:jenkins',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassName: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassName: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          fontAwesomeClassName: 'logos:ganache-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Arizona State University',
    subHeader: 'Master of Science in Computer Science and Engineering',
    duration: 'August 2022 - May 2024',
    companyLogo: '/img/icons/common/asu-logo.png',
    desc: 'Participated in the research of XXX and published 3 papers.',
    grade: 'Grade 4.00 GPA',
    descBullets: [
      'Completed coursework in Cloud Computing, Software Security, Algorithms, Deep Learning',
      'Working at The Blockchain Research Lab under Dr. Dragan Boscovic',
    ],
  },
  {
    schoolName: 'Vellore Institute of Technology',
    subHeader:
      'Bachelor of Technology in Electrical and Electronics Engineering',
    companyLogo: '/img/icons/common/vit-logo.png',
    duration: 'July 2015 - May 2019',
    desc: '',
    grade: 'Grade 3.6 GPA',
    descBullets: [
      'Completed coursework Object Oriented Programming and Problem Solving using Programming Languages',
      'Memeber of the Music Club at the University and core member of the Juvenile Care NGO',
    ],
  },
];

export const research: ExperienceType[] = [
  {
    role: 'Graduate Services Assistant',
    company: 'Blockchain Research Lab',
    companyLogo: '/img/icons/common/asu-logo.webp',
    date: 'Nov 2022 - Present',
    desc: 'Working on a research projects to find solutions on enabling data exchange for model training while ensuring privacy of user Data and Algorithm.',
    descBullets: [
      'Built a decentralized data exchange marketplace application to purchase, sell, and compute Data and Algorithm NFT',
      'Developed a React / Node.JS application, utilizing GraphQL API and secured funding from firms.',
      'Working on building application with functionalities to collect user images, train models and reward user for every imageset used.',
      'Performing research and exploring ways to revoke data access rights and use Federated Maching Learning. '
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Engineering Intern',
    company: 'Rocket Mortgage',
    companyLogo: '/img/icons/common/rocket-mortgage-1.png',
    date: 'May 2022 – Present',
    desc: 'I work as full stack web developer intern in the Rocket Logic team. I am developing and architecting a Prod-Push-Planner tool to automate and streamline the process of Release Notes generation.',
    descBullets: [
      'Integrated GitHub and MS Teams to streamline communication and storage of release notes during the release process.',
      'Designed and implemented the system architecture of the application, focusing on the backend development using the Nest JS framework.',
      'Developed APIs for application search and fetching rollback links in case of technical incidents.',
      'Utilized Angular to create a responsive Single-Page Application for the front-end.',
      'Implemented CI/CD pipelines using CircleCI for efficient software delivery.',
      'Deployed the front-end application using Amazon CloudFront for improved performance and scalability.',
      'Leveraged Docker and AWS EKS to deploy and scale the backend service effectively.',
    ],
  },
  {
    role: 'Associate Developer',
    company: 'SAP Labs',
    companyLogo: '/img/icons/common/SAP_logo.png',
    date: 'Jan 2022 – Mar 2022',
    desc: 'I worked as an Associate Software Developer in the CXS Team for developing Cloud Applications to manage Service Deliveries of SAP. The application was part of the Cloud Application Lifecycle Management (CALM) enterprise suite. My team worked on the Service Delivery Center and the Service Execution Engine Application. I worked on backend technologies and front-end technologies, as well as on the unit testing tasks.',
    descBullets: [
      'Developed resilient cloud-native solutions for SAP Intelligent Service Delivery Hub using Java, NodeJS, and SAP UI5.',
      'Worked extensively with Git, Spring Boot, RESTful APIs, and OData services to build optimized microservices.',
      'Re-architected a module to enable operations on multiple customer tenants, improving execution time by 90%.',
      'Developed APIs and Libraries used to create hierarchical services and maintain versions, used by 95% application features.',
      'Spearheaded unit testing tasks, increased code coverage to 95%, and achieved daily delivery in the cloud.',
      'Coordinated with Developers and Architects to migrate the monolithic application to a microservices-based architecture.',
      'Redesigned Rule Execution module and schema design to increase usability and functionality by 60%.',
      'Mentored team members and conducted knowledge-transfer sessions for JUnit, QUnit, and NodeJS.',
    ],
  },
  {
    role: 'Project Engineer',
    company: 'Samsung Research Institute Bangalore',
    companyLogo: '/img/icons/common/logo-sr.png',
    date: 'Sept 2021 - Oct 2021',
    desc: 'Worked as a web developer in the Network Automation Team for building LTE Systems Manager Application used by Telecom operators to manage the LTE Network. I was the module owner for Performance Module of the application which gave insights on the performance KPIs of eNodeBs (Network Element).',
    descBullets: [
      'Developed Network Management System application, using Java, JavaScript, MySQL for managing LTE network',
      'Collaborated with cross-functional teams to gather requirements and reduced defect fixing turn-around time by 93%',
      'Led the JUnit and Selenium testing activities and achieved 75% code coverage for each file',
      'Enhanced the LTE Performance module used by leading 20 Telecom operators worldwide, slashing bug counts by 60%',
    ],
  }
];

export const projects: ProjectType[] = [
  {
    name: 'AWS IaaS Scalable Image Recognition Service',
    desc: 'A cloud-based application that provides image recognition as a service to its users. The application accepts images from the user, and uses cloud-based SAAS to perform image recognition and return the most relevant label for the image. Built a scalable Java Springboot image recognition application using SQS, EC2, S3, and Cloudwatch. Exposed REST services and implemented dynamic scaling policies to ensure efficient resource utilization.',
    github: 'https://github.com/pratyushpandey3897/AWS-IaaS-ScalableImageRecognitionService'
  },
  {
    name: 'AWS Face Recognition Smart Classroom (Serverless Application)',
    desc: 'A smart classroom application for educators. This app collects videos from a classroom, performs face recognition on the collected videos, searches the database for the recognized students, and returns the relevant academic information for each student to the user. Developed an elastic application using AWS Lambda for function based serverless computing. Utilized face recognition library for detecting faces in video clips stored in S3 and retrieved data from DynamoDB.',
    github: 'https://github.com/dhanrajbhosale/PaaS-AWS-smart-classroom',
  },
  {
    name: 'System Auditing Tool (Software Security):',
    desc: 'Developed security dependency analysis tool to analyze system events and dependencies using Sysdig logs. Performed backtracking to enable forensic analysis for an event and reduce log counts to emphasize on dependencies.',
    github: 'https://github.com/pratyushpandey3897/system-auditing-tool',
  },
  {
    name: 'Instance Level Image Recognition (Deep Learning)',
    desc: 'Developed a universal image recognition deep learning embedding model to represent images at the instance level. Attained 70% accuracy utilizing the TensorFlow Keras framework and OpenAI CLIP model as backbone.',
    github: 'https://github.com/pratyushpandey3897/Universal-Image-Embedding',
  },
];

export const feedbacks: FeedbackType[] = [
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Pratyush Pandey',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Pratyush Pandey',
  image: 'https://avatars.githubusercontent.com/u/68020102?v=4',
  url: 'https://developer-portfolio-Pratyush.vercel.app',
  keywords: [
    'Pratyush',
    'Pratyush Pandey',
    '@ppandey',
    '1pratyushpandey3897',
    'Portfolio',
    'Pratyush Portfolio ',
    'Pratyush Pandey Portfolio',
    'Pratyush Pandey Developer Portfolio',
    'Pratyush software Developer',
    'Pratyush ASU software Developer',
    'Pratyush ASU computer',
  ],
};
