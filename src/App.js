import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Breakfast from './Components/Fooditems/Breakfast/Breakfast';
import Lunch from './Components/Fooditems/Lunch/Lunch';
import Dinner from './Components/Fooditems/Dinner/Dinner';
import BreakfastDetail from './Components/Fooditems/Breakfast/BreakfastDetail/BreakfastDetail';
import Products from './Components/Products/Products';
import Featured from './Components/Featured/Featured';
import New from './Components/New/New';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}>
          <Route path='featured' element={<Featured></Featured>}></Route>
          <Route path='new' element={<New></New>}></Route>
        </Route>
        <Route path='/breakfast/:breakfastId' element={<BreakfastDetail></BreakfastDetail>}></Route>
        {/* <Route path='/lunch/lunchId' element={<Lunch></Lunch>}></Route>
        <Route path='/dinner/lunchId' element={<Dinner></Dinner>}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
