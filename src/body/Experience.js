import '../css/experience.css';

function Experience() {
  const exp = [
    { company: 'Parallel Studios', position: 'Software Engineer', time: 'Apr 2024 – Jun 2025', points:
      [
        'Software Engineer for an AI-driven simulation game. (TypeScript, PostgreSQL, HTMX, Tailwind)',
        'Reduced agent hallucinations by designing a modular LLM pipeline.',
      ]
    },
    { company: 'Amazon', position: 'Backend Engineer', time: 'Sep 2022 – Mar 2024', points:
      [
        'Software Engineer on advertising web service team with focus on migrating the web service architecture to AWS. (Java, TypeScript, AWS)',
      ]
    },
    { company: 'Electronic Arts', position: 'Full Stack Engineer', time: 'Feb 2020 – Aug 2022', points:
      [
        'Server Engineer for mobile game prototyping team, building a microservice from the ground up. (PHP, Laravel, AWS: DynamoDB, ECS, Lambda)',
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
    /*
    { company: 'Uber Maps', position: 'Backend Engineer', time: 'Jan 2018 – Apr 2018', points:
      [
        'Software Engineer on maps team, investigating graph partitioning algorithms, optimizing query speed by 18% and reducing storage by 10%. (Java, Python)'
      ]
    },
    { company: 'UWACC', position: 'Musical Director', time: 'Sep 2016 – Apr 2019', points:
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
