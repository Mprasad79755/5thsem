
import './App.css';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Layout from "./layout"
import Home from "./cmpt/home"
import About from "./cmpt/about"
import Activity from "./cmpt/activity"
import Branch from "./cmpt/branch"
import Complaint from "./cmpt/complaint"
import Contact from "./cmpt/contact"


function App() {
  return (
    <>
<BrowserRouter>
<Layout />
<Routes>
  <Route  path="/" element={<Home/>} />
<Route path="about" element={<About />} />
<Route path="activities" element={<Activity/>} />
<Route path="branches"  element={<Branch/>}/>
<Route path="complaint" element={<Complaint/>} />
<Route path="contact" element={<Contact/>} />


</Routes>
</BrowserRouter>


</>
  );
}

export default App;
