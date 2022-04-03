import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">

         <Navbar />
         <Routes>
         <Route path="/" element={<Home></Home>} />
         <Route path="/reviews" element={<Review></Review>} />
         <Route path="/*" element={<NotFound></NotFound>} ></Route>

         </Routes>
    </div>
    
  );
}

export default App;
