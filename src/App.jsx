import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from './Pages/Home';
import NewBlog from './Pages/NewBlog';
import EditBlog from './Pages/EditBlog';
import FullBlog from './Pages/FullBlog';

const App = () => {
  return (<div>
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/new' element={<NewBlog/>} />
          <Route path='/edit/:id' element={<EditBlog/>} />
          <Route path='/fullblog/:id' element={<FullBlog/>} />
        </Routes>
  </div>)
};

export default App;
