export const userData = [
  {
    name: "James",
    city: "New York",
    description: "Front-end developer",
    skills: [
      "UI / UX",
      "Front End Development",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node"
    ],
    online: false,
    profile: "images/1.jpg"
  },

  {
    name: "Robert",
    city: "California",
    description: "Full Stack web developer",
    skills: [
      "Vlogging",
      "Web Development",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular"
    ],
    online: false,
    profile: "images/2.jpg"
  },

  {
    name: "Nancy",
    city: "San Francisco",
    description: "Senior Software Developer",
    skills: [
      "C",
      "C++",
      "Java Programming",
      "Python",
      "C#.Net",
      "MySQL",
      "MongoDB"
    ],
    online: true,
    profile: "images/3.jpg"
  },

  {
    name: "David",
    city: "London",
    description: "Backend Developer",
    skills: [
      "Java",
      "Spring Boot",
      "Python",
      "SQL",
      "Node.js",
      "MongoDB"
    ],
    online: true,
    profile: "images/4.jpg"
  },

  {
    name: "Sophia",
    city: "Toronto",
    description: "UI/UX Designer",
    skills: [
      "UI / UX",
      "Figma",
      "Adobe XD",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    online: false,
    profile: "images/5.jpg"
  }
];  







function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>

      <img src={props.profile} className="img" alt="User" />

      <h3>{props.name}</h3>
      <h3>{props.city}</h3>

      <p>{props.description}</p>

      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outliner">Following</button>
      </div>

      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const UserCard = () => {
  return (
    <>
    {userData.map((user, index) => (
      <User key={index} {...user}/>
    ))}
    </>
  );
};