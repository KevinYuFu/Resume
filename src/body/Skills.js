import '../css/skills.css';

function Skills() {

  const rows = [
    { label: 'Languages',     items: [ 'Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'C#', 'PHP', 'SQL', 'Bash' ] },
    { label: 'Frameworks',    items: [ 'React', 'Node.js', 'FastAPI', 'Laravel' ] },
    { label: 'Cloud & Tools', items: [ 'AWS', 'PostgreSQL', 'Git', 'Claude Code' ] },
  ]

  return (
    <div class="skills">
      <h1>Skills</h1>
      <div class="skill-rows">
        {rows.map(r => (
          <p class="skill-row" key={r.label}>
            <span class="skill-label">{r.label}:</span>
            <span class="skill-items">{r.items.join(', ')}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Skills;
