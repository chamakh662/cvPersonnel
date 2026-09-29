// Section "Compétences"
function Skills() {
  // Liste des compétences : ajoutez ou supprimez ici
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "Ionic",
    "Vue.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Git & GitHub",
    "C & c++ & c#",
  ];

  return (
    <section className="bloc">
      <h2>Compétences</h2>

      <ul className="liste">
        {/* map() crée un <li> pour chaque compétence */}
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
