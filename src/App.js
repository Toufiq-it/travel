import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import NotFound from './pages/Shared/NotFound/NotFound';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Blogs from './pages/Home/Blogs/Blogs';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={
          <RequireAuth>
            <ServiceDetails></ServiceDetails>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
