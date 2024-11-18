export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "DeHues BPMN 웹앱",
      des: "비즈니스 프로세스 모델을 더 간편하게 표기 하기 위해 만든 BPMN(비즈니스 프로세스 모델링) 웹앱입니다.",
      img: "./bpmn.png",
      iconLists: ["./re.svg", "./nodejs-w.svg", "./sql-azure.svg", "./docker.svg", "./github-w.svg"],
      link: "https://github.com/numi8462/DeHeus_BPMN",
    },
    {
      id: 2,
      title: "일정정리앱",
      des: "간단하게 하루 일정표를 정리 할 수 있는 웹앱입니다. 유저 정보 저장, 날씨 또한 확인 할 수 있습니다",
      img: "./taskmanager.png",
      iconLists: ["./re.svg", "./mongodb.svg", "./nodejs-w.svg", "./github-w.svg"],
      link: "https://github.com/numi8462/TaskManager",
    },
    {
      id: 3,
      title: "Portfolio",
      des: "NEXT.JS, TypeScript, TailwindCSS를 활용하여 만든 포트폴리오입니다. ",
      img: "./portfolio.png",
      iconLists: ["./next.svg", "./tail.svg", "./ts.svg", "./github-w.svg"],
      link: "https://github.com/numi8462/Portfolio",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "./cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "./app.svg",
      nameImg: "/appName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "./exp1.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "./github-w.svg",
      link: "https://github.com/numi8462",
    },
    
  ];