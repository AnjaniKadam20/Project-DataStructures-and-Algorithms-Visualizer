import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './homecomponents/Home';
import Contact from './Contact';
import About from '../src/homecomponents/About';
import Sort from './sortComponents/Sort'
import Prime from './primeComponents/seive'
import RecursiveSort from "./recursiveSortComponents/Recursivesort";
import Nqueen from './queenComponents/queen'
import Stack from './Stackcomponents/stack';
import Queue from './Queuecomponents/queue';
import LinkedList from './LinkedListcomponents/LinkedList';
import Search from'./Searchcomponents/search';

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path='sort' element={<Sort/>}/>
          <Route path='prime' element={<Prime/>}/>
          <Route path='/recursivesort' element={<RecursiveSort/>}/>
          <Route path='/nqueen' element={<Nqueen/>}/>
          <Route path='/Stack' element={<Stack/>}/>
          <Route path='/Queue' element={<Queue/>}/>
          <Route path='/LinkedList' element={<LinkedList/>}/>
          <Route path='/Search' element={<Search/>}/>
          
      </Routes>
   </BrowserRouter>
  );
}

export default App;