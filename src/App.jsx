import Acceuil from "./components/Acceuil";
import CustomCursor from "./components/CustomCursor";
import Competences from "./containers/Competences";

import Header from "./containers/Header";
import Projects from "./containers/Projects";

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <Acceuil />
      <Competences />
      <Projects />
    </>
  );
}

export default App;
