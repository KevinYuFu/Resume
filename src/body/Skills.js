import '../css/skills.css';

function Skills() {

  const languages = [ 'Python', 'PHP', 'Java', 'c++', 'c#', 'JavaScript', 'React', 'SQL', 'Bash' ]
  const tools = [ 'Git', 'AWS', 'Unity' ]

  return (
    <div class="skills">
      <h1>Skills</h1>
      <div>
        <ul>
        {languages.map( (x, i) => (
          <li><i>
            {x}{i !== languages.length - 1 && ' | '}
          </i></li>
        ))}
        </ul>

        <ul>
        {tools.map( (x, i) => (
          <li><i>
            {x}{i !== tools.length - 1 && ' | '}
          </i></li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
