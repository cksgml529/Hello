import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Contact from "./layout/Contact";

import "./assets/style/style.scss";
import Pj1 from "./project/Pj1";
import Pj2 from "./project/Pj2";
import Pj3 from "./project/Pj3";
import Pj4 from "./project/Pj4";
import Pj5 from "./project/Pj5";
import ProjectList from "./project/ProjectList";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Main />}/>
          <Route path=":pj1"  element={<ProjectList />}/>
          <Route path=":pj2"  element={<ProjectList />}/>
         {/*  <Route path=":pj3"  element={<Pj3/>}/>
          <Route path=":pj4"  element={<Pj4/>}/>
          <Route path=":pj5"  element={<Pj5/>}/> */}

        </Route>
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
