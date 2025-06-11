import {
  uniswapv1,
  ICO,
  ToDo,
  DAOnft,
  bitcoin,
  ethdegree,
  dsa,
  aidegree,
  bitcoineverybody,
  furverse,
  iby,
  ncert,
  marlin,
  DevsGiant,
  PrivateGnome,
  StarknetAVS,
  StarkPAI,
  CryptoUPI,
  ZKScience,
  InAppAI,
  ethindia,
  blockchainADVL1,
  blockchainADVl2,
  buidlcamp,
  basecamp,
} from "../assets";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
];

export const imgUrls = [
  ethindia,
  ethdegree,
  blockchainADVL1,
  blockchainADVl2,
  buidlcamp,
  basecamp,
  bitcoin,
  dsa,
  aidegree,
  bitcoineverybody,
];

export const skills = [
  {
    name: "Ethereum",
    value: "90%",
  },
  {
    name: "Solidity",
    value: "80%",
  },
  {
    name: "DeFi",
    value: "90%",
  },
  {
    name: "GIT and Github",
    value: "70%",
  },
  {
    name: "React JS",
    value: "70%",
  },
  {
    name: " C++",
    value: "70%",
  },
  {
    name: "Next.js",
    value: "70%",
  },
  {
    name: "JavaScript",
    value: "80%",
  },
  {
    name: "Typescript",
    value: "70%",
  },
  {
    name: "HTML",
    value: "60%",
  },
  {
    name: "CSS",
    value: "50%",
  },
  {
    name: "Zero-Knowledge",
    value: "60%",
  },
  {
    name: "Account-Abstraction",
    value: "70%",
  },
  {
    name: "Python",
    value: "60%",
  },
  {
    name: "Rust",
    value: "50%",
  },
  {
    name: "Cairo",
    value: "50%",
  },
  {
    name: "Trusted Execution Environments (TEEs)",
    value: "80%",
  },
];

export const projects = [
  {
    imgURL: StarknetAVS,
    name: "StarknetAVS: ETH India'24 Winner 🏆",
    comment:
      "Fetches transactions on Starknet blockchain and flags it if doesn’t follow compliance rules using trained AI models. Built with EigenLayer’s AVS for verifying all AI results, and operators can earn from re-staking.",
    livelink: "https://devfolio.co/projects/starknetavs-3a69",
    githublink: "https://github.com/starknet-avs",
  },
  {
    imgURL: PrivateGnome,
    name: "Private Gnome: ETH Belgrade'25 Winner 🏆",
    comment:
      "Predicts health risks from DNA, powered by a custom-trained ML model running securely in IExec’s TEE",
    livelink: "https://www.youtube.com/watch?v=_U0h6k6OtPM",
    githublink: "https://github.com/ayush-ranjan-official/Private-Gnome",
  },
  {
    imgURL: StarkPAI,
    name: "StarkPAI: Starknet Hacker House Winner 🏆",
    comment:
      "A wallet on Starknet Blockchain built from scratch for better and smarter user experience. Free AI-powered Web3 actions based on user prompts, designed to be user-friendly for those new to blockchain.",
    livelink: "https://drive.google.com/file/d/1VMrHZQpDiFdAk7NKOt50AY8qA6OoCQtM/view?usp=sharing",
    githublink: "https://github.com/ayush-ranjan-official/StarkPAI-AI-wallet-on-Starknet-.git",
  },
  {
    imgURL: CryptoUPI,
    name: "Crypto UPI: Starknet Winter Hackathon Winner 🏆",
    comment:
      "It solves a crucial problem for foreign travelers in India who want to use the UPI payment system but don't have INR. A decentralized intent solver marketplace, where local solvers can fulfill payment intents and receive crypto tokens.",
    livelink: "https://www.youtube.com/embed/PgYD6I2ED2Q",
    githublink: "https://github.com/ayush-ranjan-official/Stark-Crypto-UPI/tree/main",
  },
  {
    imgURL: InAppAI,
    name: "In-Device Oﬄine Generative AI",
    comment:
      "Motivation: To build MVP of an AI chatbot for confidential use cases, like military, medical industries, tech firms etc. Implemented Lamini-Flan, Flan-Alpaca, Apple-OpenELM, Bart models to work fully offline In-browser / Android App. Added multilingual support with multi-model architecture and an optional translation API design for faster inference.   ",
    livelink: "https://drive.google.com/file/d/1pLUXrxFqX_hUx0nrVhocsjsM-g4jh-bI/view?usp=sharing",
    githublink: "https://github.com/ayush-ranjan-official/In-Device-Offline-Generative-AI",
  },
  {
    imgURL: ZKScience,
    name: "ZK Science",
    comment:
      "Prove legitimacy of your scientific survey/research volunteers without revealing their personal data.",
    livelink: "https://youtu.be/EMYQxjA4Npc?si=XdbQoCHtezyBjGDA",
    githublink: "https://github.com/ayush-ranjan-official/ZK-Science",
  },
  {
    imgURL: DAOnft,
    name: "DAO NFT Marketplace",
    comment:
      "Built a non-fungible token (NFT)-powered fully on-chain Decentralized autonomous organization(DAO) to invest in NFT collections as a group",
    livelink: "https://dao-nft-market.vercel.app/",
    githublink: "https://github.com/ayush-ranjan-official/DAO-NFT-Market",
  },
  {
    imgURL: uniswapv1,
    name: "Uniswap V1 Clone",
    comment: " Built my own decentralized exchange like Uniswap v1 that allows swapping of ETHEREUM and TOKEN. Users also get LP tokens which they can burn to receive back ETH and TOKEN.",
    livelink: "https://decentralized-exchange-like-uniswap.vercel.app/",
    githublink: "https://github.com/ayush-ranjan-official/Decentralized-Exchange-like-Uniswap",
  },
  // {
  //   imgURL: ICO,
  //   name: "Initial Coin Offering",
  //   comment: "Launched a dApp website with 10,000 unit tokens for Crypto Dev NFT holders or get ten tokens for free, but they would have to pay the gas fees",
  //   livelink:
  //     "https://initial-coin-offering-flame-ten.vercel.app/",
  //   githublink: "https://github.com/ayush-ranjan-official/Initial-Coin-Offering",
  // },
  // {
  //   imgURL: ToDo,
  //   name: "ToDo List React App",
  //   comment:
  //     "Developed a website where we can add/delete tasks, which will be stored even after closing the tab. Some exciting features include editing tasks",
  //   livelink: "https://todo-react-1ayi9hygm-ayush-ranjan-official.vercel.app/",
  //   githublink: "https://github.com/ayush-ranjan-official/todo-react-app",
  // },
];

export const education = [
  {
    name: "Indian Institute of Technology (ISM), Dhanbad",
    course: "Bachelor of Technology (BTech)",
    duration: "Dec 2021 - May 2025",
  },
];

export const experience = [
  {
    logo: marlin,
    Position: "Software Engineer (& Developer Relations)",
    CompanyName: "Marlin Protocol (Remote,Singapore)",
    Website: "https://www.marlin.org/",
    Certificate: "",
    comment:
      "Verifiable computing protocol featuring TEE & ZK-based coprocessors to delegate workloads over decentralized cloud.",
    time: "March 2025 - Present",
  },
  {
    logo: iby,
    Position: "Software Developer Engineer Intern",
    CompanyName: "I'mBesideYou (Tokyo,Japan)",
    Website: "https://www.imbesideyou.com/",
    Certificate: "https://drive.google.com/file/d/1DUgxHIEyFlxp3oMGBTB4oOQ0Ov9Bw14E/view?usp=sharing",
    comment:
      "Optimized their product using CapacitorJS, fixing bugs and reducing API calls to increase response speed by 30%. Developed Capacitor plugin to shift the load from WebView to native environment, increasing system speed by 40%. Implemented CPU-optimized Microsoft's phi 3 model using ONNX Runtime for local AI inference.",
    time: "May 2024 - July 2024",
  },
  {
    logo: furverse,
    Position: "Blockchain Developer",
    CompanyName: "Furverse",
    Website: "https://furverse.io/",
    Certificate: "https://drive.google.com/file/d/1haBdlQMaKlqSB4Cox0qdcHX_RpMhDWKv/view?usp=sharing",
    comment:
      "Implemented all Web3 and AI functionalities using Ethereum blockchain (EVM-based chains). Responsible for building both the frontend and backend systems using React, MongoDB, Firebase, and Node.js. Additionally, I create content related to technology, blockchain, and Web3 for their social platforms.",
    time: "July 2023 - April 2024",
  },
  {
    logo: DevsGiant,
    Position: "Blockchain Developer",
    CompanyName: "DevsGiant",
    Website: "https://devsgiant.com/",
    Certificate: "",
    comment:
      "Designed and built ETH smart contracts and integrated them with the Next.js frontend for a Web3 gaming product.",
    time: "Freelancing",
  },
  {
    logo: ncert,
    Position: "Web Developer",
    CompanyName: "NCERT Kaksha",
    Website: "https://ncertkaksha.com/",
    Certificate: "",
    comment:
      "Automated features like user-specific rotated background watermarks, which are hard to detect by remover tools and an extra layer of protection with a user-specific password.",
    time: "Freelancing",
  },
];


