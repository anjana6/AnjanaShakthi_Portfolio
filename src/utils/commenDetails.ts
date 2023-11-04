export const educationDetails = [
    {duration: '2018 - 2022',degree:'B.Sc (Hons.) Software Engineering', place: 'University of Kelaniya', result: 'Web Application developemt & Mobile Application development'},
    {duration: '2012 - 2016',degree:'GCE Advanced Level', place: "ST.Thomas' Boys' College Matara", result: 'Maths-A Chemisty-B physics-B'},
    {duration: '2006 - 2011',degree:'GCE Ordinary Level', place: "ST.Thomas' Boys' College Matara", result: 'A-4 B-2 C-3'}
]



export const experienceDetails = [
    {
        company: 'Inova IT systems',
        place: 'Colombo, Sri Lanka',
        job: [
            {duration: 'August 2022 – Present', position:'Software Engineer', jobType: 'Full-time'}
        ]
    },
    {
        company: 'Mobile App Mart',
        place: 'London,UK',
        job: [
            {duration: 'Aug. 2021 – July 2022', position:'Software Engineer', jobType: 'Full-time'}
        ]
    },
    {
        company: 'Redblocks Technologies (Private) Limited',
        place: 'Colombo, Sri Lanka',
        job: [
            {duration: 'May 2021 – July 2021', position:'Associate Software Engineer', jobType: 'Full-time'},
            {duration: 'Oct. 2020 – April 2021', position:'Intern Software Engineer', jobType: 'Full-time'},
        ]
    }
]


export const skillDetails = [
    { 
        skill1 :'Javascript', 
        skill1Url: 'https://res.cloudinary.com/ashakthi/image/upload/v1635785755/samples/protfolio/javascript_wyku8h.png',
        skill2:'Typescript', 
        skill2Url: 'https://res.cloudinary.com/ashakthi/image/upload/v1635785711/samples/protfolio/typescript_yon21g.png'
    }, 
    {
        skill1: 'ReactJs', skill1Url: 'https://res.cloudinary.com/ashakthi/image/upload/v1635785726/samples/protfolio/react_rcfnhv.png' ,
        skill2: 'NextJs' ,skill2Url: 'https://res.cloudinary.com/ashakthi/image/upload/v1635787283/samples/protfolio/next1_p6e4ys.png'
    },
    {

        skill1: 'NodeJs(Expressjs)', skill1Url: 'https://res.cloudinary.com/ashakthi/image/upload/v1635787066/samples/protfolio/node_lkrbjw.png',
        skill2: 'NestJs' ,skill2Url: 'https://res.cloudinary.com/ashakthi/image/upload/v1635785719/samples/protfolio/nestjs_u1wiom.png'
    },
    {
        skill1: 'tailwindcss', skill1Url: 'https://res.cloudinary.com/ashakthi/image/upload/v1635787069/samples/protfolio/taildwind_nr3eaq.png',
        skill2: 'serverless', skill2Url: 'https://res.cloudinary.com/ashakthi/image/upload/v1635787071/samples/protfolio/serverless_imnmht.png'
    },
    {
        skill1: 'MongoDB',skill1Url: 'https://res.cloudinary.com/ashakthi/image/upload/v1635785736/samples/protfolio/mongodb_oxjjbn.jpg', 
        skill2: 'MySQL', skill2Url: 'https://res.cloudinary.com/ashakthi/image/upload/v1635785745/samples/protfolio/mysql_ib9wje.png'
    },
    {
        skill1: 'Sass',skill1Url: 'https://res.cloudinary.com/ashakthi/image/upload/v1699060713/portfolio/geiahmtqn1t0njqtc01u.png'
    }
]


export const projectDetails = [
    {
        imageUrl: 'https://res.cloudinary.com/ashakthi/image/upload/v1699059490/portfolio/rf9rp76kprixaf3awywu.png',
        name: "SH Movie Site",
        description: 'This is movie website that generally meant to meet visitors’ expectations. This allow user to watch the movie trailer and download the movie. React, Node and Sass are used to develop this application and TMDB movie database used to  fetch the movie details.',
        technologies: ['React','Sass','TMDB'],
        viewUrl: 'https://sh-movie-anjana6.vercel.app/',
        gitHubUrl: 'https://github.com/anjana6/SH_Movie'
    },
    {
        imageUrl: 'https://res.cloudinary.com/ashakthi/image/upload/v1635839953/samples/protfolio/portfolio_ouxqjw.png',
        name: "Portfolio WebApp",
        description: "This is My Personal website. NextJs is the framework used in this application. This application hasn't a back-end and SendGrid is the email service that is used in this application. Ant Design and tailwindcss are used to design UI.",
        technologies: ['NextJs','Ant Design','Tailwindcss'],
        viewUrl: 'https://anjana-shakthi-portfolio.vercel.app/',
        gitHubUrl: 'https://github.com/anjana6/portfolio-V2'
    },
    // {
    //     imageUrl: 'https://res.cloudinary.com/ashakthi/image/upload/v1635839991/samples/protfolio/QuantAmount_nas6on.png',
    //     name: "Quantamount",
    //     description: 'This application is created by the readblocks company to automate the BOQ process. React and Nodejs are the technologies and MySQL with sequelize ORM is the database system  used in this application.I mainly worked on the backend side of this application',
    //     technologies: ['React', 'NodeJs(Expressjs)', 'Ant Design'],
    //     viewUrl: 'https://app.quantamount.com/',
    //     gitHubUrl: null
    // },
    {
        imageUrl: 'https://res.cloudinary.com/ashakthi/image/upload/v1635840015/samples/protfolio/chatApp_texbrx.png',
        name: "Web Chat-APP",
        description: 'This is a small chat application. React, Redux and Nodejs are the technologies that I am using in this application. Socket.io is the special library used in this application. That is used to manage the real-time thing. I used the MongoDB database system to store user details and user messages.',
        technologies: ['ReactJs','NodeJs(expressjs)','Redux','Socket.io','Bootstrap'],
        viewUrl: null,
        gitHubUrl: 'https://github.com/anjana6/Web-ChatApp'
    },
    {
        imageUrl: 'https://res.cloudinary.com/ashakthi/image/upload/v1635840013/samples/protfolio/librarySystem_o2qt0p.png',
        name: "Library Management System",
        description: 'This application is a small Library Management system. It includes only basic functionality. React, Redux and Nodejs are the technologies that I am using in this application. Also, used MongoDB as a database management system in this application.',
        technologies: ['ReactJs','NodeJs(expressjs)','Redux','Bootstrap'],
        viewUrl: null,
        gitHubUrl: 'https://github.com/anjana6/Library-Management-System'
    },
    
]