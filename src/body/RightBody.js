import '../css/right-body.css';

function RightBody() {

  const languages = [ 'Python', 'PHP', 'Java', 'c++', 'c#', 'JavaScript', 'SQL', 'Bash' ]
  const tools = [ 'Git', 'docker', 'AWS', 'Unity' ]
  const hobbies = [ 'Badminton', 'Producing - DJ', 'Skateboard - Snowboard', 'Investing', 'drifting' ]

  const education = (
    <div>
      <h3>Education:</h3>
        <p>B.S. Computer Science</p>
        <p>Univerity of Waterloo</p>
        <p>Graduated April 2019</p>
    </div>
  )

  const extra = (
    <div>
      <h3>Extra Curriculars</h3>
      <h4>Musical Director</h4>
        <p class="minor-top-padding">Led weekly rehearsals and workshops</p>
        <p class="minor-top-padding">Manage audio equipment and sound engineered concernts with over 700 patrons</p>
        <p class="minor-top-padding">Planned and Executed executive meetings and club events</p>
    </div>
  )

  return (
    <div class="right-container">

      <h2>Skills:</h2>
      <div class="section-top-padding">
        <h4>Languages:</h4>
        {languages.map( x => (
          <p>{x}</p>
        ))}

        <h3>Tools:</h3>
        {tools.map( x => (
          <p>{x}</p>
        ))}
      </div>

      <div class="section-top-padding">
        {education}
      </div>

      <div class="section-top-padding">
        {extra}
      </div>

      <div class="section-top-padding">
        <h4>Hobbies</h4>
        {hobbies.map( x => (
          <p class="minor-top-padding">{x}</p>
        ))}
      </div>
    
    </div>
  );
}

export default RightBody;
