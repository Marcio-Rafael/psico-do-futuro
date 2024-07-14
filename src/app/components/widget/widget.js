
import './Widget.css';
import Image from 'next/image';
function Widget(props) {

  return (
    <div className="widget-container justify-center w-full">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg p-4 ">
        <div className=" py-2">
          <div className="flex justify-between space-x-2" alt="foto de perfil do psicologo">
            <Image src={props.perfil} className="w-16 h-16 rounded-full" alt='Logotipo' />
            <div>
              <div className="font-extrabold text-sky-950 w-72 h-5 text-left whitespace-nowrap">Angela Cruz de Souza Melquiades</div>
              <p className="text-gray-500 w-72 h-8 text-left mt-1 ">Especializacao em psicopatologia CRP:06/170123</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 mb-5">
          <div className="text-center flex-[1_1_50%]">
            <p className="text-gray-600 text-start text-sm">Primeira Sessao</p>
            <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 w-full">R$190,00</span>
          </div>
          <div className="text-center flex-[1_1_50%]">
            <p className="text-gray-600 text-start text-sm ">Plano mensal</p>
            <span className="inline-block bg-green-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-950 w-full">R$800,00</span>
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-left text-sm" >
            Olá, sou a Ângela, psicóloga com foco na abordagem comportamental. Meu objetivo é auxiliar você a se reconectar consigo mesmo, com zelo e...
          </p>
        </div>
        <div>
          <button className='widget-button text-sm' >Ver perfil completo</button>
        </div>
      </div>
    </div>
  );
}

export default Widget;
