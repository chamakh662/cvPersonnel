import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <main className="cv">
      {/* En haut : photo + nom */}
      <Hero />

      <div className="cv-body">
        {/* Colonne de gauche : infos courtes */}
        <aside className="cv-side">
          <Contact />
          <Skills />
        </aside>

        {/* Colonne de droite : infos détaillées */}
        <div className="cv-main">
          <About />
          <Education />
          <Projects />

          <button className="print" onClick={() => window.print()}>
            Enregistrer en PDF
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
