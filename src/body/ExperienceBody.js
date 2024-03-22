import '../css/experience-body.css';

function LeftBody() {
  const exp = [
    { company: 'Amazon', position: 'Backend Engineer', time: 'Sept 2022 – Present', points: 
      [
        'Migrated web service architecture to company standard on AWS. (Java, AWS)',
        'Managed weekly deployments across 6 teams and kept documentation updated as the project moved to ci/cd. (Java, AWS)',
        'Investigated alerts and automated access management to maintain oncall ticket queue below threshold. (Java, Typescript, AWS)'
      ] 
    },
    { company: 'Electronic Arts', position: 'Full Stack Engineer', time: 'Feb 2020 – Aug 2022', points: 
      [
        'Prototyped 4 games in 4 weeks, leading and planning a team of artists and QA engineers. (Unity, C\#)',
        'Designed a flexible progression system and built microservices to use across a series of live and prototype games. (PHP, Laravel, AWS: DynamoDB, ECS, Lambda)',
        'Rapidly learned Unity with no prior game development experience, building interface features for an interactive novel game. (Unity, C\#)'
      ] 
    },
    { company: 'Oracle', position: 'Backend Engineer', time: 'Jul 2019 – Jan 2020', points: 
      [
        'Reduced sprint cycle from 5 to 4 weeks across 4 separate teams by implementing over 120 missing tests. (C\#, NUnit)',
        'Developed 34 email templates with uniform consistency across 68 email clients. (HTML, CSS, Velocity)',
        'Investigated and fixed Database inconsistencies, resolving client escalations. (C\#, SQL)'
      ] 
    },
    { company: 'Uber Maps', position: 'Backend Engineer', time: 'Jan 2018 – April 2018', points: 
      [
        'Reduced route queries by 50\% and improved navigation guidance by adding waypoint requests to navigation engine. (Java)',
        'Improved route query speed by 18\% and reduced storage by 10\% by researching graph partitioning algorithms.(Java, Python)',
        'Reduced execution time of an offline graph processing pipeline by 3 hours through implementation of parallelism and concurrently optimized designs.'
      ] 
    },
    { company: 'eSolutions Group', position: 'Frontend & DevOps Engineer', time: 'Sep 2016 – Dec 2016', points: 
      [
        'Reduced website setup time from a day to under 10 minutes by automating database operations. (PowerShell, SQL)',
        'Developed and deployed 8 websites for large cities and corporations. (.Net, SQL)'
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
    <div class="left-container">
      <div class="work-experience">
        <h1>Experience</h1>
        {expElement}
      </div>
    </div>

  );
}

export default LeftBody;