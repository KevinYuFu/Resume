import '../css/skills.css';

function Skills() {

  const languages = [ 'Python', 'PHP', 'Java', 'c++', 'c#', 'JavaScript', 'React', 'SQL', 'Bash' ]
  const tools = [ 'Git', 'AWS', 'Unity' ]

  return (
    <div class="skills">
      <h1>Skills</h1>
      <div>
        <ul>
        {languages.map( x => (
          <li><i>{x}</i></li>
        ))}
        </ul>

        <ul>
        {tools.map( x => (
          <li><i>{x}</i></li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
