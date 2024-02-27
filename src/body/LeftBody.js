import '../css/left-body.css';
import '../css/split.css';

function LeftBody() {
  const exp = [
    { company: 'Amazon', position: 'Backend Engineer', time: 'Sept 2022 – Present', points: 
      [
        'Migrated advertising webpage architecture to AWS',
        'Managed weekly deployments',
        'Handled oncall tickets'
      ] 
    },
    { company: 'Electronic Arts', position: 'Full Stack Engineer', time: 'Feb 2020 – Aug 2022', points: 
      [
        'Prototyped 4 games in 4 weeks for concept testing. (Unity, C\#)',
        'Built and maintained microservice architecture to support all prototype games. (PHP, Laravel, AWS: DynamoDB, ECS, Lambda)',
        'Developed interface features and fixed bugs for an interactive novel game. (Unity, C\#)'
      ] 
    },
    { company: 'Oracle Eloqua', position: 'Backend Engineer', time: 'Jul 2019 – Jan 2020', points: 
      [
        'Investigated and resolved client escalations. (C\#, SQL)',
        'Completed massive automation catch up across 4 teams. (C\#, NUnit)',
        'Developed 34 email templates to look consistent across 68 email clients. (HTML, CSS, Velocity)'
      ] 
    },
    { company: 'Uber Maps', position: 'Backend Engineer', time: 'Jan 2018 – April 2018', points: 
      [
        'Reduced route queries by 50\% and improved navigation guidance by adding waypoint requests to navigation engine. (Java)',
        'Improved route query speed by 18\% and reduced storage by 10\% by researching graph partitioning algorithms.(Java, Python)',
        'Reduced execution time of an offline graph processing pipeline by 3 hours through implementation of parallelism and concurrently optimized designs.'
      ] 
    },
  ]

  const expElement = exp.map(x =>
    <div>
      <h2>
        <span>{x.company}</span>
        <span> |</span>
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
    <div class="left-container">
      <div class="work-experience">
        <h1>Experience</h1>
        {expElement}
      </div>
    </div>

  );
}

export default LeftBody;
