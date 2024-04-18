
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HiraganaPage } from './pages/Hiragana_jsx';
import { KatakanaPage } from './pages/Katakana';
import { FormHiragana} from './pages/FHiragana';
import { Navigation } from "./components/Navigation";
import { FormKatakana } from './pages/FKatakana';

// import { Toaster } from "react-hot-toast";
import './App.css'

function App() {


  return (
    <BrowserRouter>
    <div className="container mx-auto">
      <Navigation/>
      <div className="mt-6">
        <Routes>
          <Route path="/" element={<Navigate to="/katakana" />} />
          <Route path="/hiragana" element={ <HiraganaPage />} />
          <Route path="/katakana" element={ <KatakanaPage />} />
          <Route path="/add" element={ <Navigate to="/formka"/>} />  
          <Route path="/formhi/" element={ <FormHiragana />} /> 
          <Route path="/formhi/:id" element={ <FormHiragana/> } />
          <Route path="/formka/" element={ <FormKatakana />} /> 
          <Route path="/formka/:id" element={ <FormKatakana/> } /> 
        </Routes>
      </div>
      {/* <Toaster/> */}
    </div>
    </BrowserRouter>
  )
}

export default App
