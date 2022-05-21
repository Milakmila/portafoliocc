
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Navigate, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Skills from './pages/Skills';
import Tools from './pages/Tools';
import Studies from './pages/Studies';
import Studie from './pages/Studie';
import Portfolio from './pages/Portfolio';
import Error404 from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes> 

      <Route path='/' element={<Home />}></Route>
      <Route path='/aboutme' element={<Aboutme />}></Route>
      <Route path='/skills' element={<Skills />}></Route>
      <Route path='/studies' element={<Studies />}></Route>
      <Route path='/tools' element={<Tools />}></Route>
      <Route path='/portfolio' element={<Portfolio />}></Route>
      <Route path='*' element={<Error404 />}></Route>
      <Route path='/home' element={<Navigate replace to={"/"} />}></Route>
      <Route path='/studies/:id' element={<Studie />}></Route>
      
    </Routes>
  </BrowserRouter>
);

