import '../css/education.css';

function Education() {
  const skillList = [ 'University of Waterloo', 'B.S. Computer Science', 'Music Minor', 'Graduated April 2019' ]

  return (
    <div class="education">
      <h1>Education</h1>
      <ul>
      {skillList.map( x => (
        <li><i>{x}</i></li>
      ))}
      </ul>
    </div>
  );
}

export default Education;
