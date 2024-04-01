import '../css/experience.css';

function Experience() {
  const exp = [
    { company: 'Amazon', position: 'Backend Engineer', time: 'Sept 2022 – Present', points:
      [
        //'Migrated web service architecture to company standard on AWS. (Java, AWS)',
        //'Managed weekly deployments across 6 teams and kept documentation updated as the project moved to ci/cd. (Java, AWS)',
        //'Investigated alerts and automated access management to maintain oncall ticket queue below threshold. (Java, Typescript, AWS)'
        'Software Engineer on Advertising Webservice team with focus on migrating the web service archetecture to AWS. (Java, Typescript, AWS)',
        //pipeline, latency, core webservice, AWS Migration, Deligations
      ]
    },
    { company: 'Electronic Arts', position: 'Full Stack Engineer', time: 'Feb 2020 – Aug 2022', points:
      [
        //'Prototyped 4 games in 4 weeks, leading and planning a team of artists and QA engineers. (Unity, C\#)',
        //'Designed a flexible progression system and built microservices to use across a series of live and prototype games. (PHP, Laravel, AWS: DynamoDB, ECS, Lambda)',
        //'Rapidly learned Unity with no prior game development experience, building interface features for an interactive novel game. (Unity, C\#)'
        'Server engineer for mobile game prototyping team buliding a microservice from ground up. (PHP, Laravel, AWS: DynamoDB, ECS, Lambda)',
        //'Lead rapid prototyping hackathon in a team of artists and QA Engineer, bulding 4 games in 4 weeks.'
        'Led a rapid prototyping initiative developing 4 games in 4 weeks. Authored game design docs, strategized daily targets, delegated tasks to artists and coordinated with engineeers through UML Design.',
        // Project managed, Game Designed, Engineered

        //'Rapidly learned Unity with no prior game development experience, building interface features for an interactive novel game. (Unity, C\#)'


        //Mobile game prototyping
        //live game feature  building
        //server side work
        //leading moments

      ]
    },
    { company: 'Oracle', position: 'Backend Engineer', time: 'Jul 2019 – Jan 2020', points:
      [
        //'Reduced sprint cycle from 5 to 4 weeks across 4 separate teams by implementing over 120 missing tests. (C\#, NUnit)',
        //'Developed 34 email templates with uniform consistency across 68 email clients. (HTML, CSS, Velocity)',
        //'Investigated and fixed Database inconsistencies, resolving client escalations. (C\#, SQL)'
        'Software Engineer on B2B advertising infrastructure team working on database investigation and optimizations. (SQL, C#)',
        'Spearheaded automation testing initiative completing over 120 missing tests reducing time allocated to manual testing during sprints. (C#, Velocity)'
      ]
    },
    { company: 'Uber Maps', position: 'Backend Engineer', time: 'Jan 2018 – April 2018', points:
      [
        'Software Engineer on maps team investigating graph partitioning algorithms, optimizing query speed by 18% and reducing storage by 10%. (Java, Python)'
        //'Reduced route queries by 50\% and improved navigation guidance by adding waypoint requests to navigation engine. (Java)',
        //'Improved route query speed by 18\% and reduced storage by 10\% by researching graph partitioning algorithms.(Java, Python)',
        //'Reduced execution time of an offline graph processing pipeline by 3 hours through implementation of parallelism and concurrently optimized designs.'
      ]
    },
    { company: 'eSolutions Group', position: 'Frontend & DevOps Engineer', time: 'Sep 2016 – Dec 2016', points:
      [
        'Developer on webpage contruction team, completing client webpage requests. (C#, .Net, SQL)',
        'Investigated and implemented automated processes to streamline webpage creation, reducing webpage creation time from 5 to 4 days per client. (PowerShell, SQL)'
      ]
    },
    /*
    { company: 'KPMG', position: 'Sr. Software Developer', time: 'Jan 2016 – Apr 2016', points:
      [
        'Designed a tax return data processing application, saving 3 to 5 days of manual effort for each of thousands of clients. (VBA)',
        'Rebuilt platform to host complex dynamic questionnaire websites which filed tax returns for over 5,000 individuals. (C\#, .Net)'
      ]
    },
    */
    { company: 'UWACC', position: 'Musical Director', time: 'Jan 2017 - April 2019', points:
      [
        //'Conductor of a 30+ member a cappella group, using orchestrial conducting experience to lead group to surpass auditioned groups of other universities.',
        'Musical Director one of the largest a cappella group in canada.',
        'Sound Engineered concerts across 6 different groups with over 1000 patrons.',
        'Led meetings with high impact.'
        //'Led weekly rehearsals and workshops.',
        //'Manage audio equipment and sound engineered concerts with over 700 patrons.',
        //'Planned and executed executive meetings and club events.'
      ]
    },
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
