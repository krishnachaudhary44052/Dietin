import './App.css'
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/saladabout';
import Contact from './pages/Contact';
import TherapeuticPlan from './pages/TherapeuticPlan';
import TherapeuticPlan1 from './pages/TherapeuticPlan1';
import TherapeuticPlan2 from './pages/TherapeuticPlan2';
import TherapeuticPlan3 from './pages/TherapeuticPlan3';
import TherapeuticPlan4 from './pages/TherapeuticPlan4';
import TherapeuticPlan5 from './pages/TherapeuticPlan5';
import MealPlans from './pages/MealPlan2';
import Home1 from './pages/Home1';
import DietinPlan from './pages/DietinPlan';
import ImagePdfPage from './pages/ImagePdfPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import DietInSolution from './pages/DietInSolution';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/TherapeuticPlan' element={<TherapeuticPlan/>}/>
      <Route path='/TherapeuticPlan1' element={<TherapeuticPlan1/>}/>
      <Route path='/TherapeuticPlan2' element={<TherapeuticPlan2/>}/>
      <Route path='/TherapeuticPlan3' element={<TherapeuticPlan3/>}/>
      <Route path='/TherapeuticPlan4' element={<TherapeuticPlan4/>}/>
      <Route path='/TherapeuticPlan5' element={<TherapeuticPlan5/>}/>
      <Route path='/Home1' element={<Home1/>}/>
      <Route path='/dietinPlan' element={<DietinPlan/>}/>
      <Route path='/MealPlans' element={<MealPlans/>}/>
      <Route path='/imagePdf' element={<ImagePdfPage/>}/>
      <Route path='/dietInSolution' element={<DietInSolution/>}/>
    </Routes>
  )
}

export default App
