
import './Widget.css';

function Widget(props) {

  return (
    <div className="widget-container justify-center w-full">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg p-4 ">
        <div className=" py-2">
          <div className="flex justify-between space-x-2">
            <img className="h-16 rounded-full" src={props.perfil} alt="foto de perfil do psicologo" />
            <div className="">
              <div className="font-extrabold text-1xl text-sky-950 text-left whitespace-nowrap">Angela Cruz de Souza Melquiades</div>
              <p className="text-gray-500 text-left mt-1 ">Especializacao em psicopatologia CRP:06/170123</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-gray-600 text-base text-left">Primeira Sessao</p>
            <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-36">R$190,00</span>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-base text-left">Plano Mensal</p>
            <span className="inline-block bg-green-100 rounded-md px-3 py-1 text-sm font-semibold text-green-950 mr-2 mb-2 w-36">R$800,00</span>
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-left" >
            Olá, sou a Ângela, psicóloga com foco na abordagem comportamental. Meu objetivo é auxiliar você a se reconectar consigo mesmo, com zelo e...
          </p>
        </div>
        <div>
          <button className='widget-button' >Ver perfil completo</button>
        </div>
      </div>
    </div>
  );
}

export default Widget;
