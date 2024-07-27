import hackathonLogo from './Assets/hackathonLogo.png';
import wolfram from './Assets/sponsorsLogos/wolfram.png';
// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */
import boy from './Assets/boy.png';
import celo from './Assets/sponsorsLogos/celo.png';
import devfolio from './Assets/sponsorsLogos/devfolio.png';
import filecoin from './Assets/sponsorsLogos/filecoin.png';
import idyll from './Assets/sponsorsLogos/idyll.png';
import noescape from './Assets/sponsorsLogos/noescape.png';
import polygon from './Assets/sponsorsLogos/polygon.png';
import replit from './Assets/sponsorsLogos/replit.png';
import solana from './Assets/sponsorsLogos/solana.png';
import sybgen from './Assets/sponsorsLogos/sybgen.png';
import taskade from './Assets/sponsorsLogos/taskade.png';
import lyin from './Assets/teami/lyin.jpg';
import './style.css';


/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';

const TOP_SECTION = {
  About: ' Ctrl + Alt + Code is a dynamic 24-hour hackathon designed for coding enthusiasts to develop real-world applications. This event promotes teamwork, inspires students to explore careers in technology, and sparks innovative solutions to address the challenges faced by humanity. Unlock your potential and demonstrate your skills in this exciting hackathon.',
  TITLE: 'Ctrl + Alt + Code',
  Typed_effect: ['Code.', 'Compile.', 'Collaborate.'],
  SHORT_DESCRIPTION: '30th and 31st August, 2024',
  desc: 'PES University(RR-Campus), Bangalore',
  IMG_SRC: boy,

  DISCORD_LINK: '',
  JUDGES_FORM_LINK:
    'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/appex.pesu/',
  discord: '',
  linkedin: 'https://www.linkedin.com/company/appex-pesu/',
  twitter: '',

  email: 'mailto:appexpesu5@gmail.com',
  mail: 'appexpesu5@gmail.com'
};

const MIDDLE_SECTION = {
  TITLE: 'What is Ctrl+Alt+Code.',
  LONG_DESCRIPTION:
    'Ctrl + Alt + Code is a 24-hour hackathon that offers coding enthusiasts the chance to create real-world applications. This hackathon promotes collaboration, encourages students to pursue careers in technology, and stimulates creativity to tackle various challenges faced by humanity. Unleash your potential and show us what you’ve got.',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 12,
  year: 2021
};

const schedule = [
  {
    day: '8-11-2021',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '5-12-2021',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '3-12-2021',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-12-2021',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-1-2022',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {},

    {
//       icon: (
//         // <div className="flip-card">
          
//   {/* <div className="flip-card-inner">
//     <div className="flip-card-front">
//     <img src={first} style={{height: "150px", width : "150px"}}/> */}

//     <i
//           className="first fas fa-4x fa-trophy"
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}
//         ></i>
//     // </div>
//     // <div className="flip-card-back">
//     //   <h1>Best Hack Built Overall</h1>
//     //   <p>Grand Prize of ₹40,000/-</p>
      
//     // </div>
// //   </div>
// // </div>
icon: (
  <i
    className=" second fas fa-4x fa-medal"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  ></i>
),
        
      
      type: (
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',fontWeight: 'bold'
        }}
   > Best Hack built overall
      </div>
      ),
      content: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold'
          }}
        >  Grand Prize of ₹40,000/-
        </div>
      )
    },
    {}
  ]
  // [
  //   {
  //     icon: <i className=" second fas fa-4x fa-medal" style={{display: "flex", justifyContent : "center", alignItems: "center"}}></i>,
  //     type: <div style={{display: "flex", justifyContent : "center", alignItems: "center"}}>Second Best Hack built overall</div>,
  //     content:  <div style={{display: "flex", justifyContent : "center", alignItems: "center",fontWeight: "bold"}}>Grand Prize of ₹20,000/-</div>

  //   },{},
  //   {
  //     icon: <i className=" third fas fa-4x fa-skiing-nordic" style={{display: "flex", justifyContent : "center", alignItems: "center"}}></i>,
  //     type:  <div style={{display: "flex", justifyContent : "center", alignItems: "center"}}>Third Best Hack Built overall</div> ,
  //     content:  <div style={{display: "flex", justifyContent : "center", alignItems: "center",fontWeight: "bold"}}>Grand Prize of ₹10,000/-</div>

  //   }
  // ],
];
const Prizee = [
  [
    {
      icon: (
        <i
          className=" second fas fa-4x fa-medal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        ></i>
      ),
      type: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Second Best Hack built overall
        </div>
      ),
      content: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold'
          }}
        >
          Grand Prize of ₹20,000/-
        </div>
      )
    },
    {
      icon: (
        <i
          className=" second fas fa-4x fa-medal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        ></i>
      ),
      type: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Third Best Hack Built overall
        </div>
      ),
      content: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold'
          }}
        >
          Grand Prize of ₹10,000/-
        </div>
      )
    }
  ]
];
const Prizeee = [
  [
    //Array 2
    {
      icon: (
        <i
          className="fab fourth fa-3x fa-wpbeginner"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        ></i>
      ),
      type: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Best hack built in domain of Blockchain
        </div>
      ),
      content: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold'
          }}
        >
          Cash Prize of ₹10,000/-
        </div>
      )
    },
    {
      icon: (
        <i
          className="first fas fa-4x fa-trophy"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        ></i>
      ),
      type: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Best hack built in domain of web/app dev
        </div>
      ),
      content: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold'
          }}
        >
          Cash Prize of ₹10,000/-
        </div>
      )
    },
    {
      icon: (
        <i
          className=" fifth fa-3x fas fa-book-open"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        ></i>
      ),
      type: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Best hack built in domain of AI/ML
        </div>
      ),
      content: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold'
          }}
        >
          Cash Prize of ₹10,000/-
        </div>
      )
    }
  ]
];

const TrackPrizes = [
  [
    //Array 2
    {
      icon: (
        <div  style={{borderRadius:"15px",margin:"20px"}}>
          <img src={polygon} alt="Avatar" style={{ width: "90%", marginRight: "10px", borderRadius: "5px" }} />
          <hr style={{height:"2px",backgroundColor:"black" , color :"black"}}/>
 
     <div style={{fontSize : "25px", margin:"20px",fontWeight: 'bold'}}> ₹10,000 for the best hack built on Ethereum Or</div> 
     <div style={{fontSize : "25px", margin:"20px",fontWeight: 'bold'}}> ₹15,000 for the best hack built on Ethereum + Polygon</div>
     <div style={{fontSize : "20px", margin:"20px", paddingBottom:"20px",fontWeight: 'bold'}}> Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners! Learn more about the Polygon Track Prize <a href="https://www.notion.so/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c"> here</a> </div>
      
  
</div>
      
      ),
      type: (
        <div
          
        >
         
        </div>
       
      ),
      content: (
        <></>
      )
    },
    {
      icon: (
         <div style={{ borderRadius:"15px",margin:"20px"}}>
          <img src={filecoin} alt="Avatar" style={{ width: "100%", borderRadius: "5px" }} />
           <hr style={{height:"2px",backgroundColor:"black" , color :"black"}}/>
 
     <div style={{fontSize : "25px", margin:"20px",fontWeight: 'bold'}}>₹20,000 for best use of IPFS and/or Filecoin built at Devfolio-powered community Hackathons. </div> 
    
     <div style={{fontSize : "20px", margin:"20px", paddingBottom:"20px",fontWeight: 'bold'}}>
Microgrants up to 5000 USD, open grants up to 50,000 USD Learn more here <a href="https://github.com/filecoin-project/devgrants/blob/master/README.md"> here</a> </div>
      
  
</div>
      ),
      type: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          
        </div>
      ),
      content: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold'
          }}
        >
        
        </div>
      )
    },
    {
      icon: (
         <div  style={{ borderRadius:"15px", margin:"20px"}}>
          <img src={solana} alt="Avatar" style={{ width: "100%", borderRadius: "5px" }} />
           <hr style={{height:"2px",backgroundColor:"black" , color :"black"}}/>
 
     <div style={{fontSize : "20px", margin:"20px",fontWeight: 'bold'}}> Young gun - $USDC 100 for the best project beginners just starting out on Solana and/or</div> 
          <div style={{ fontSize: "20px", margin: "20px", fontWeight: 'bold' }}>Rising teknoking - $USDC 250 for the best project that goes into depth, demonstrating higher-order code and/or</div>
          <div style={{fontSize : "20px", margin:"20px",fontWeight: 'bold'}}>Master glasseater - $USDC 500 for the best advanced project that is almost ready for full-time development.</div>
     <div style={{fontSize : "15px", margin:"20px", paddingBottom:"20px",fontWeight: 'bold'}}> Eligibility to apply for equity free grants ranging upto $USDC 5000 if you wish to continue building post the hackathon</div>
      
  
</div>
//         // 
//  
// 
      ),
      type: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          
        </div>
      ),
      content: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold'
          }}
        >
         
        </div>
      )
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: 'https://github.com/Limbo-Hacks/Hackathon-website-template',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Erika',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Ryah Garcia',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const Silver = [
   //Array 1
  [{src: solana}, {src: replit}, {src:filecoin} ] 
  
  //Array 4
];
const Gold = [
  [{src: devfolio}, {src: polygon}]
  //Array 4
];
const Bronze = [
[{src : taskade} , {src : wolfram},{ src : sybgen}, {src : noescape},{src : idyll}]
]
const Title =  [
  [{src: celo}]
  //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is Ctrl+Alt+Code?',
        content:
          'Ctrl+Alt+Code is a 24 hour hackathon based on the latest technical fields that will bring together several teams to generate high-value actionable business ideas and product concepts. This hackathon covers the domains of web development, app development , blockchain , artificial intelligence and machine learning.'
      },
      {
        label: 'Who can participate?',
        content:
          'Ctrl+Alt+Code is open to all undergraduate students. Acceptance of applications is based on their interest in the available domains'
      },
      {
        label: 'When will the applications close?',
        content:
          'TBD.'
      },
      {
        label: 'Is it free of cost?',
        content:
          'Participation in Ctrl+Alt+Code will be 400/- per team.'
      }
    ],
    [
      {
        label: 'How do you evaluate the applications?',
        content:
          'We can get to know more about you from your past projects, open source contributions, GitHub profile.'
      },
      {
        label: 'What could be the size of each team?',
        content:
          'A particular team can contain members from 3-4.'
      },
      {
        label: 'Do you provide travel reimbursement to hackers?',
        content:
          'The hackathon cannot cover the travel and other expenses for the attendees.'
      },
      {
        label: 'Did we miss something?',
        content:
          'Write us at appexpesu5@gmail.com or DM us us your question on Instagram @appex.pesu, Our team will reach out to you as soon as possible.'
      }
    ]
  ]
];

export {
  Bronze, FOOTER, Gold, JudgesInfo, MIDDLE_SECTION, Prizee,
  Prizeee, Prizeinfo, SOCIALS, Silver, TOP_SECTION, TeamInfo, Title, TrackPrizes, calenderStartingDate, frequentlyAskedQuestions,
  schedule
};
