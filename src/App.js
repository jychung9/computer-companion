import { NavBar, Home, Footer } from './Main Structure.js';
import About from './About.js';
import YourBuild from './YourBuild.js';
import Deals from './Deals';
import Detail from './Detail';
import SubmitDeal from './SubmitDeal';
import DataComparison from './ComparisonChart';
import D404 from './D404';
import { Routes, Route, Outlet} from 'react-router-dom';

export default function App() {

  return (
    <div> 
      <Routes>
        <Route path='/' element={<AppLayout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='deals' element={<Deals />} /> 
          <Route path='submitDeals' element={<SubmitDeal />} />
          <Route path='yourBuild' element={<YourBuild />} />
          <Route path='comparison' element={<DataComparison />} />
        </Route>
        <Route path='yourBuild/:product' element= {<Detail />} />
        <Route path='*' element={<D404 />} />    
      </Routes>        
    </div>
  );
}

function AppLayout() {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}