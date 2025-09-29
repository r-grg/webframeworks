
import './App.css'

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header title="Labo 2" subtitle="Basic components" />
      <List items={["item 1", "item 2", "item 3"]} />
      <Footer copy="Andie Similon" year={2021} />
    </div>
  );
}

export default App;
