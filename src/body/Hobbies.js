function Skills() {
  const hobbies = [ 'Badminton', 'Producing/DJ', 'Skateboard/Snowboard', 'Investing', 'Drifting' ]

  return (
    <div class="hobbies">
      <div>
        <h4>Hobbies</h4>
        {hobbies.map( x => (
          <p class="minor-top-padding">{x}</p>
        ))}
      </div>
    </div>
  );
}

export default Skills;
