import frontend from './img/frontend.png'
import react from './img/react .png'
import javascript from './img/javascript .png'
import htmlcss from './img/html-css.png'


const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'Python',
    'HTML',
    'CSS',
    'Bootstrap',
    'JavaScript',
    'React',
    'Redux',
    'SASS',
    'Material UI',
    'Git',
    
   
  ]

const zertifikats=[
    {
        id:'1',
        img:frontend,
        tittle:'Frontend Developer',
        descriptions:'This certificate is given to students who successfully graduated from the Clarusway Frontend developer course after 4 months of intensive work. During the Module, our student completed 3 courses and Capstone Project Period.',
        link:`https://d34lllqo5jm5il.cloudfront.net/en/verify/46793452345638`,

    },
    {
        id:'1',
        img:react,
        tittle:'React',
        descriptions:'This is one of the course certificates given to students who successfully graduated from Clarusway Frontend Module-1 Bootcamp after 4 months of intensive work. This course is a beginner to advanced React course. In this course, alumni participated in more than 60 hours of live online React classes and many after-class activities.',
        link:'https://d34lllqo5jm5il.cloudfront.net/en/verify/80731828679183',

    },
    {
        id:'1',
        img:javascript,
        tittle:'JavaScript',
        descriptions:'This course is a beginner to advanced Javascript course. In this course, alumni participated in more than 60 hours of live online classes and many after-class activities. They have completed 5 Javascript Projects and many hands-on exercises.',
        link:'https://d34lllqo5jm5il.cloudfront.net/en/verify/78014556841268',


    },
    {
        id:'1',
        img:htmlcss,
        tittle:'HTML-CSS',
        descriptions:'Use HTML&CSS, Bootstrap, SASS, and other styling UI libraries to style their websites and applications',
        link:'https://d34lllqo5jm5il.cloudfront.net/en/verify/19518919772090',

    },
]


  const project = [
    { 
        id: '1',
        name:'veatherApp',
        descriptions:'In diesem Projekt wurde eine Wetter-App mit Javascript, CSS, HTML erstellt. Informationen wurden mithilfe der Fetch-Methode von der API abgerufen. Anschließend wurden die mit Innerhtml erfassten Informationen auf dem Bildschirm ausgedruckt.',
        image:'',
        stack:['Html','Css', 'Javascript'],
        sourceCode: 'https://github.com/farukkursun/weatherApp',
        livePreview: 'https://farukkursun.github.io/weatherApp/',

    },
    { 
        id: '2',
        name:'languagesCard',
        descriptions:'In diesem Projekt wurde eine Karte mit Javascript, CSS, HTML und React erstellt, die Informationen aus der Datei data.js entnommen und im Browser ausgedruckt.',
        image:'',
        stack:['Html','Css', 'Javascript','react'],
        sourceCode: 'https://github.com/farukkursun/languageCard',
        livePreview: 'https://faruklanguagescard.netlify.app//',

    },
    { 
        id: '3',
        name:'movieApp',
        descriptions:'In diesem Projekt wurde eine Movie App mit Javascript, CSS, HTML und React erstellt. Registrierung und Login Prozesse wurden mit Firebase durchgeführt. Informationen wurden mit Axios erfasst. Context und Router werden verwendet.',
        image:'',
        stack:['Html','Css', 'Javascript', 'react','firebase'],
        sourceCode: 'https://github.com/farukkursun/movie-app',
        livePreview: 'https://movie-app-ten-ruddy.vercel.app/',

    },
    { 
        id: '4',
        name:'veatherApp',
        descriptions:'In diesem Projekt wurde eine Wetter-App mit Javascript, CSS, HTML erstellt. Informationen wurden mithilfe der Fetch-Methode von der API abgerufen. Anschließend wurden die mit Innerhtml erfassten Informationen auf dem Bildschirm ausgedruckt.',
        image:'',
        stack:['Html','Css', 'Javascript'],
        sourceCode: 'https://github.com/farukkursun/weatherApp',
        livePreview: 'https://farukkursun.github.io/weatherApp/',

    }
  ]

  export {skills, project, zertifikats }