import React from 'react';
import certificadoresponsivedesign from '../images/certificadoresponsivedesign.png';
import certificadojs from '../images/certificadojs.png';

const Certificates = ({lang}) => {
  return (
    <div className="flex flex-col items-center w-full h-screen mt-3">
  <div>
    <img src={certificadoresponsivedesign} alt="certificado responsive design" />
    <footer className="flex justify-center"><a href='https://freecodecamp.org/certification/fccbd374d6d-2733-48fc-9f7b-411d513467d7/responsive-web-design

'>{lang == 'en' ? 'Verify' : 'Verificar'}</a></footer>
  </div>
  <div>
    <img src={certificadojs} alt="certificado js" />
    <footer className="flex justify-center"><a href='https://freecodecamp.org/certification/fccbd374d6d-2733-48fc-9f7b-411d513467d7/responsive-web-design

'>{lang == 'en' ? 'Verify' : 'Verificar'}</a></footer>
  </div>
</div>
  )
}

export default Certificates