import Acceuil from "./components/Acceuil";
import Apropos from "./containers/Apropos";
import Competences from "./containers/Competences";
import Contacts from "./containers/Contacts";
import Header from "./containers/Header";
import Projects from "./containers/Projects";

function App() {
  return (
    <>
      <Header />
      <Acceuil />
      <Competences />
      <Projects />
      <Apropos />
      <Contacts />
    </>
  );
}

export default App;
