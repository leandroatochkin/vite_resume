import React from 'react';
import { textoHomeEn, textoHomeEs } from '../assets/textos';
import Gallery from '../Components/Gallery';

const Home = ({ lang, mode }) => {
  return (
    <div className="container mx-auto px-4">
      <div className='p-5'><Gallery /></div>
      <section className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 ${mode==='dark' ? 'text-slate-100' : ''}`}>
        <div className="shadow-lg">
          <h1 className="blue-gradient_text font-semibold">Leandro Nicolás Atochkin</h1>
          <h2>{lang === 'en' ? textoHomeEn[1] : textoHomeEs[1]}</h2>
          <h3>{lang === 'en' ? textoHomeEn[2] : textoHomeEs[2]}</h3>
          <h3>{lang === 'en' ? textoHomeEn[3] : textoHomeEs[3]}</h3>
          <h3>{lang === 'en' ? textoHomeEn[4] : textoHomeEs[4]}</h3>
          <h3 className="blue-gradient_text">{lang === 'en' ? textoHomeEn[5] : textoHomeEs[5]}</h3>
          <h3>{lang === 'en' ? textoHomeEn[6] : textoHomeEs[6]}</h3>
        </div>
        <div className="shadow-lg">
          <h1 className="blue-gradient_text font-semibold">{lang === 'en' ? textoHomeEn[7] : textoHomeEs[7]}</h1>
          <h3>{lang === 'en' ? textoHomeEn[8] : textoHomeEs[8]}</h3>
          <h3>{lang === 'en' ? textoHomeEn[9] : textoHomeEs[9]}</h3>
        </div>
        <div className="shadow-lg">
          <h1 className="blue-gradient_text font-semibold">{lang === 'en' ? textoHomeEn[10] : textoHomeEs[10]}</h1>
          <h3>{lang === 'en' ? textoHomeEn[11] : textoHomeEs[11]}</h3>
          <h3>{lang === 'en' ? textoHomeEn[12] : textoHomeEs[12]}</h3>
        </div>
        <div className="shadow-lg">
          <h1 className="blue-gradient_text font-semibold">{lang === 'en' ? textoHomeEn[13] : textoHomeEs[13]}</h1>
          <h3>{lang === 'en' ? textoHomeEn[14] : textoHomeEs[14]}</h3>
        </div>
      </section>
    </div>
  );
};

export default Home;
