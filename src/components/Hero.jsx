import photo from "../assets/ahlem.jpg";

// En-tête du CV : photo + nom + titre
function Hero() {
  return (
    <header className="hero">
      <img className="photo" src={photo} alt="Ahlem Chamakh" />

      <div>
        <h1>Ahlem Chamakh</h1>
        <p className="titre">Développeuse web</p>
      </div>
    </header>
  );
}

export default Hero;
