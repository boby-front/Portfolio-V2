import Acceuil from "./components/Acceuil";
import Competences from "./containers/Competences";
import Header from "./containers/Header";
import Projects from "./containers/Projects";

function App() {
  return (
    <>
      <Header />
      <Acceuil />
      <Competences />
      <Projects />
    </>
  );
}

export default App;
