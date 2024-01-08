
import novo from "../assets/images/novo.png"
import gangLia from "../assets/images/gangLia.png"
import  learning  from "../assets/icons/learning.png";
import  web  from "../assets/icons/web.png";
import  password  from "../assets/icons/password.png";
import  mobile  from "../assets/icons/mobile.png";
import  game  from "../assets/icons/game.png";
import  code  from "../assets/icons/code.png";
import  innovative  from "../assets/icons/innovative.png";
import  check  from "../assets/icons/check.png";
import bug from "../assets/icons/bug.png";
import bugblue from "../assets/icons/bugblue.png";

import 
    {contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    nextjs,
    nodejs,
    react,
    sass,
    tailwindcss,
    typescript,
    } from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Python intern",
        company_name: "NovoNordics",
        icon: novo,
        iconBg: "#accbe1",
        date: "Aug 2023 - Oct 2023",
        points: [
            "Developing and maintaining file opreation using python and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Case study on the project and presenting the project to the organization.",
        ],
    },
    {
        title: "Fullstack devloper intern",
        company_name: "Ganglia",
        icon: gangLia,
        iconBg: "#FEFD98",
        date: "Jan 2024 - present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Staying updated on the latest industry trends and advancements in web development.",
            "Offering assistance to team members, sharing knowledge, and providing technical support to ensure a collaborative and productive working environment.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: web,
        theme: 'btn-back-red',
        name: 'EveBlush',
        description: 'Developed a web application, a Portfolio showcasing my projects and work.',
        link: 'https://github.com/Saty-am02/EvEBlush',
    },
    {
        iconUrl: learning,
        theme: 'btn-back-green',
        name: 'Cambly',
        description: 'Created a learning platform for languages lovers, allowing them to learn language and connect with other native speaker.',
        link: 'https://github.com/Saty-am02/cambly',
    },
    {
        iconUrl: code,
        theme: 'btn-back-blue',
        name: 'HtmlBuilderfy',
        description:' website, generates code in user input and it is designed to be fast, and user-friendly.',
        link: 'https://github.com/Saty-am02/HtmlBuilderfy',
    },
    {
        iconUrl: check,
        theme: 'btn-back-pink',
        name: 'Todo App',
        description: 'A Vue.js Todo List project is a common and beginner-friendly application that involves creating a simple task management system.',
        link: 'https://github.com/Saty-am02/TodoList',
    },
    {
        iconUrl:game,
        theme: 'btn-back-black',
        name: 'Tic Tac Toe',
        description: 'A simple Tic-Tac-Toe game implemented using Vue.js for the frontend and Tailwind CSS for styling.',
        link: 'https://github.com/Saty-am02/tictactoe-vue',
    },
    {
        iconUrl: password,
        theme: 'btn-back-blue',
        name: 'GenratePassword',
        description:'A simple password generator app built using React. The app allows users to add, edit, and clear password.',
        link: 'https://github.com/Saty-am02/GenratePassword',
    },
    {
        iconUrl: mobile,
        theme: 'btn-back-red',
        name: 'AttendenceSystem',
        description:'The Attendance App Android Project is a mobile application designed to simplify and streamline the attendance tracking process. This app aims to provide an efficient and user-friendly solution for recording and managing attendance in various settings, such as classrooms, meetings, or events.',
        link: 'https://github.com/Saty-am02/AttendenceSystem',
    },
    {
        iconUrl: innovative,
        theme: 'btn-back-green',
        name: 'InnovativeShowcase',
        description:'This repository contains the code for my Innovative pages, showcasing my innovative pages and it is designed to be fast, and user-friendly.',
        link: 'https://github.com/Saty-am02/InnovativeShowcase',
    }
   
];
export const bugs = [
        {a:bug},
        {b:bugblue}
    ];