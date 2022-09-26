import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home"
import SingleDog from "./components/SingleDog"


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/:name" element={<SingleDog/>}></Route>
      </Routes>
    </BrowserRouter>

      
    </>
  );
}

export default App;
