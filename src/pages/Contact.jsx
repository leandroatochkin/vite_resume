import React from 'react';
import SmsTwoToneIcon from '@mui/icons-material/SmsTwoTone';
import MarkEmailUnreadTwoToneIcon from '@mui/icons-material/MarkEmailUnreadTwoTone';
import CodeOffTwoToneIcon from '@mui/icons-material/CodeOffTwoTone';
import { textoContactEn, textoContactEs } from '../assets/textos';
import Vite from '../images/vite-svgrepo-com.png';
import ReactLogo from '../images/react-svgrepo-com.png';
import TailwindLogo from '../images/tailwindcss-icon-svgrepo-com.png';


const Contact = ({lang, mode}) => {
  return (
    <div className='h-screen'>
    <div className='flex justify-center p-10'>
      <h1 className={`font-semibold text-3xl ${mode === 'dark' ? 'text-slate-100' : ''}`}><SmsTwoToneIcon/> +542235937660</h1>
    </div>
    <div className='flex justify-center p-10'>
      <a href="mailto:recipient@example.com?subject=Job%20Offer&body=Id%like%20to%20contact%20you%20about%20a%20job." className={`font-semibold text-3xl ${mode === 'dark' ? 'text-slate-100' : ''}`}><MarkEmailUnreadTwoToneIcon/> leandro.atochkin<br/><span className='flex justify-center'>@outlook.es</span></a>
    </div>
    <div className='flex justify-center p-10'>
      <a href="https://github.com/leandroatochkin" target="_blank" className={`font-semibold text-3xl ${mode === 'dark' ? 'text-slate-100' : ''}`}><CodeOffTwoToneIcon/> leandroatochkin</a>
    </div>
    <div className='flex justify-end mr-2'>
  <footer>
    <div className="fixed bottom-1 left-2 right-0 flex items-center"> 
      <span>{lang === 'en' ? textoContactEn[1] : textoContactEs[1]}</span> 
      <img src={Vite} alt='vite logo' className='h-5 w-5 ml-2'/> 
      <img src={ReactLogo} alt='react logo' className='h-5 w-5 ml-2'/> 
      <img src={TailwindLogo} alt='tailwind logo' className='h-5 w-5 ml-2'/> 
    </div>
  </footer>
</div>
    </div>
  )
}

export default Contact