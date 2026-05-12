import '../css/experience.css';

function Experience() {
  const exp = [
    { company: 'Parallel Studios', position: 'Engineer', time: 'April 2024 – June 2025', points:
      [
        'Software Engineer for an AI driven simulation game. (Typescript, postgresql, HTMX, Tailwind)',
        'Increased control and reliability of character behavior by separating AI engines to handle dedicated tasks.',
      ]
    },
    { company: 'Amazon', position: 'Backend Engineer', time: 'Sept 2022 – March 2024', points:
      [
        'Software Engineer on advertising web service team with focus on migrating the web service architecture to AWS. (Java, Typescript, AWS)',
      ]
    },
    { company: 'Electronic Arts', position: 'Full Stack Engineer', time: 'Feb 2020 – Aug 2022', points:
      [
        'Server Engineer for mobile game prototyping team, building a microservice from ground up.   (PHP, Laravel, AWS: DynamoDB, ECS, Lambda)',
        'Led a rapid prototyping initiative developing 4 games in 4 weeks. Authored game design docs, strategized daily targets, delegated tasks to artists and coordinated with engineers through UML diagrams.',
      ]
    },
    /*
    { company: 'Oracle', position: 'Backend Engineer', time: 'Jul 2019 – Jan 2020', points:
      [
        'Software Engineer on B2B advertising infrastructure team, working on database investigation and optimizations. (SQL, C#)',
        'Spearheaded automation testing initiative, completing over 120 missing tests and decreasing manual testing time by a week. (C#, Velocity)'
      ]
    },
    */
    { company: 'Rivals', position: 'CEO', time: 'Dec 2025 - Present', points:
      [
        //"Founded and launched an event company, successfully producing and executing its first large-scale event.",
        "Founder of Rivals, a gaming rave which combining esports competitions with high energy music to build a new party experience for gamers.",
        "Managed a team of 26, coordinating event planners, graphics designers, volunteers, and a media team.",
        "Attended by 230+ guests, receiving overwhelmingly positive feedback and strong demand for future events.",
      ]
    },
    { company: 'JSTDRMN', position: 'Academy Lead', time: 'Oct 2025 - Present', points:
      [
        "Lead the academy division of an artist incubator, designing and delivering result driven music production courses that help students build release ready tracks and performance skills."
        //"The Academy Lead at an Artist Incubator Company.",
        //"Designed and taught impactful and highly interactive courses, resulting in students playing at shows or releasing a track.",
      ]
    },
    /*
    { company: 'Uber Maps', position: 'Backend Engineer', time: 'Jan 2018 – April 2018', points:
      [
        'Software Engineer on maps team, investigating graph partitioning algorithms, optimizing query speed by 18% and reducing storage by 10%. (Java, Python)'
      ]
    },
    { company: 'UWACC', position: 'Musical Director', time: 'Jan 2017 - April 2019', points:
      [
        'Musical Director for one of the largest a cappella groups in Canada, with over 50 members of varied musical backgrounds.',
        'Sound Engineered concerts across 6 different groups with over 1000 patrons.',
        'Led executive meetings for termly planning, event planning, and constitutional changes.'
      ]
    },
    */
  ]

  const expElement = exp.map(x =>
    <div>
      <h2>
        <span>{x.company}</span>
        <span> | </span>
        <span class="job-description">{x.position}</span>
        <p class="time-span">{x.time}</p>
      </h2>
      <ul>
        {
          x.points.map( p => (
            <li>{p}</li>
          ))
        }
      </ul>
    </div>
  );

  return (
    <div class="experience">
      <h1>Experience</h1>
      {expElement}
    </div>
  );
}

export default Experience;
