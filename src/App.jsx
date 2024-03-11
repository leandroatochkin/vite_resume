import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AnimatedText from "./Components/AnimatedText";
import Navbar from "./Components/Navbar";
import Projects from "./pages/Projects";
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Certificates from  "./pages/Certificates";
import  TungstenTwoTone  from "@mui/icons-material/TungstenTwoTone";
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';


const App = () => {
  const [lang, setLang] = useState('en');
  const [mode, setMode] = useState('light');
  
  const handleLangClick = () => {
        setLang(lang === 'en' ? 'es' : 'en')
  }

  const handleModeClick = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
}

  return (
    <main className={`${mode === 'light' ? 'bg-slate-100' : 'bg-gray-900'}`} lang={lang}>
      <div className="flex justify-between items-center p-3">
        <div className="flex justify-start">
          <AnimatedText lang={lang}/>
        </div>
      <div className="flex justify-end space-x-4">
          <button onClick={handleLangClick} className={`rounded-full font-semibold p-1 ${lang==='es' ? 'bg-black-500 text-red-500' : 'bg-slate-500'}`}>
            <LanguageTwoToneIcon/>
            {lang === 'es' ? 'ES' : 'EN'}
          </button>
          <button onClick={handleModeClick} className={`rounded-full font-semibold p-1 ${mode==='dark' ? 'bg-black-500 text-yellow-500' : 'bg-slate-500'}`}>
            <TungstenTwoTone/>
          </button>
      </div>
    </div>
      
      
        <Router>
          <Navbar lang={lang} mode={mode}/>
          <Routes>
            <Route path='/' element={<Home lang={lang} mode={mode} />} />
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/certificates' element={<Certificates lang={lang} mode={mode}/>} />
            <Route path='/contact' element={<Contact lang={lang} mode={mode}/>}/>
          </Routes>
        </Router>
    </main>
  )
}

export default App
