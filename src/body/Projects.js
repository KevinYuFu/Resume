import '../css/experience.css';

function Projects() {
  const exp = [
    { name: 'Rivals Gaming Rave', time: 'Dec 2025 - March 2026', points:
      [
        "Founder of Rivals, a gaming rave which combining esports competitions with high energy music to build a new party experience for gamers.",
        /*"Managed a team of 26, coordinating event planners, graphics designers, volunteers, and a media team.",*/
        /*"Attended by 230+ guests, receiving overwhelmingly positive feedback and strong demand for future events.",*/
      ]
    },
    { name: 'JSTDRMN Academy Manager', time: 'Oct 2025 - Present', points:
      [
        "Lead the academy division of an artist incubator, designing and delivering result driven music production courses that help students build release ready tracks and performance skills.",
        "Handle marketting and social media.",
        "Manage staff, interns, and project logistics from planning through completion.",
      ]
    },
    { name: 'Ultimate Tab Manager', time: 'April 2026 - Present', points:
      [
        "Design and developed an advanced tab manager for tab hoarders.",
        /*"Vim and Video game inspired UX for snappy response and simple searching.",*/
        /*"Developed along with claude code.",*/
      ]
    },
  ]

  const elements = exp.map(x =>
    <div>
      <h2>
        <span>{x.name}</span>
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
      <h1>Projects</h1>
      {elements}
    </div>
  );
}

export default Projects;
