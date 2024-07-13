import Widget from './components/widget/widget';
import './globals.css';
import Logo from "./assets/images/logotipo.psico.png";
import Psicologo from "./assets/images/perfil-psico.jpg";



export default function Home() {
  return (
    <div className='App px-2 md:px-24 pb-20 bg-red-50 min-h-screen flex flex-col space-y-5'>
      <div className='mt-20'>
        <img className='h-10' src={Logo} alt='Logotipo' />
      </div>
      <div>
        <div className='text-left mb-24'>
          <h1 className='text-red-400 text-2xl md:text-6xl font-bold mb-6'>Encontre a profissional<br /> certa e transforme sua vida.</h1>
          <p className='paragrafo-home text-2xl text-cyan-950'>Encontramos alguns psis que se encaixam em seu perfil,veja mais <br />detalhes de cada profissional e agende sua primeira consulta.</p>
        </div>
        <div className='flex flex-wrap gap-7 justify-center lg:justify-start'>
          <Widget perfil={Psicologo}>
          </Widget>
          <Widget perfil={Psicologo}>
          </Widget>
          <Widget perfil={Psicologo}>
          </Widget>
        </div>
      </div>
    </div>
  );
}

