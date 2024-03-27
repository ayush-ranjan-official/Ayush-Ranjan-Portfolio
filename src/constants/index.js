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
  ethdegree,
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
];

export const projects = [
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
  {
    imgURL: ICO,
    name: "Initial Coin Offering",
    comment: "Launched a dApp website with 10,000 unit tokens for Crypto Dev NFT holders or get ten tokens for free, but they would have to pay the gas fees",
    livelink:
      "https://initial-coin-offering-flame-ten.vercel.app/",
    githublink: "https://github.com/ayush-ranjan-official/Initial-Coin-Offering",
  },
  {
    imgURL: ToDo,
    name: "ToDo List React App",
    comment:
      "Developed a website where we can add/delete tasks, which will be stored even after closing the tab. Some exciting features include editing tasks",
    livelink: "https://todo-react-1ayi9hygm-ayush-ranjan-official.vercel.app/",
    githublink: "https://github.com/ayush-ranjan-official/todo-react-app",
  },
];

export const education = [
  {
    name: "Indian Institute of Technology (ISM), Dhanbad",
    course: "Bachelor of Technology (BTech)",
    duration: "2021 - 2025",
  },
];

export const experience = [
  {
    logo: furverse,
    Position: "Blockchain Developer",
    CompanyName: "Furverse",
    Website: "https://furverse.io/",
    Certificate: "https://drive.google.com/file/d/1haBdlQMaKlqSB4Cox0qdcHX_RpMhDWKv/view?usp=sharing",
    comment:
      "Implemented all Web3 and AI functionalities using Ethereum blockchain (EVM-based chains). Responsible for building both the frontend and backend systems using React, MongoDB, Firebase, and Node.js. Additionally, I create content related to technology, blockchain, and Web3 for their social platforms.",
    time: "July 2023 - Present",
  },
  {
    logo: iby,
    Position: "Software Developer Engineer Intern",
    CompanyName: "I'mBesideYou (Tokyo,Japan)",
    Website: "https://www.imbesideyou.com/",
    Certificate: "",
    comment:
      "I’ll be joining their team remotely as a Summer Intern",
    time: "May 2024 - July 2024",
  },
  {
    logo: ncert,
    Position: "Web Developer",
    CompanyName: "NCERT Kaksha",
    Website: "https://ncertkaksha.com/",
    Certificate: "",
    comment:
      "I Automated features like user-specific rotated background watermarks, which are hard to detect by remover tools and an extra layer of protection with a user-specific password.",
    time: "Freelancing",
  },
];


