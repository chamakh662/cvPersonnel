// Section "Projets"
function Projects() {
  // Liste des projets : ajoutez un objet { ... } pour un nouveau projet
  const projects = [
    {
      nom: "BioScan",
      description:
        "Plateforme web d'analyse et de traçabilité des produits alimentaires, basée sur l'intelligence artificielle.",
      technos: "React.js, Node.js, MongoDB, IA",
    },
    {
      nom: "Application web",
      description:
        "Projet universitaire réalisé dans le cadre de ma formation en développement web.",
      technos: "HTML, CSS, JavaScript, ionic, vue.js",
    },
  ];

  return (
    <section className="bloc">
      <h2>Projets</h2>

      {projects.map((projet) => (
        <div className="item" key={projet.nom}>
          <h3>{projet.nom}</h3>
          <p>{projet.description}</p>
          <p className="technos">{projet.technos}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
