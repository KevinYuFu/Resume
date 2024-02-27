import '../css/right-body.css';

function RightBody() {

  const languages = [ 'Python', 'PHP', 'Java', 'c++', 'c#', 'JavaScript', 'SQL', 'Bash' ]
  const tools = [ 'Git', 'docker', 'AWS', 'Unity' ]
  const hobbies = [ 'Badminton', 'Skateboarding', 'Investing', 'Automotive Enthusiast' ]

  const education = (
    <div>
      <h3>Education</h3>
      <h4>Univerity of Waterloo</h4>
      <p>Bachelor of Computer Science</p>
      <p>Music Minor</p>
      <p>Graduated April 2019</p>
    </div>
  )

  const extra = (
    <div>
      <h3>Extra Curriculars</h3>
      <h4>Musical Director</h4>
      <p>Led weekly rehearsals and workshops</p>
      <p>Manage audio equipment and sound engineered concernts with over 700 patrons</p>
      <p>Planned and Executed executive meetings and club events</p>
    </div>
  )

  return (
    <div class="right-container">

      <h2>Skills:</h2>
      <div>
        <h4>Languages:</h4>
        {languages.map( x => (
          <p>{x}</p>
        ))}

        <h3>Tools:</h3>
        {tools.map( x => (
          <p>{x}</p>
        ))}
      </div>

      <div class="minor-top-padding">
        {education}
      </div>

      <div class="minor-top-padding">
        {extra}
      </div>

      <div class="minor-top-padding">
        <h4>Hobbies</h4>
        {hobbies.map( x => (
          <p>{x}</p>
        ))}
      </div>
    
    </div>
  );
}

export default RightBody;
