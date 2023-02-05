import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Contact from "./layout/Contact";

import "./assets/style/style.scss";
import Pj1 from "./project/Pj1";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Main />}/>
          <Route path=":pj1"  element={<Pj1 />}/>

        </Route>
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
