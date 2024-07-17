
import 'C:\Source\psico-do-futuro\src\app\components\widget\widget.css';
import Image from 'next/image';
import Link from 'next/link';

function Widget({ data, index }) {

  const uniqueParam = Date.now().toString() + data.id + index.toString()

  return (
    <div className="widget-container justify-center w-full">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg p-4 transform transition-transform hover:scale-105 flex flex-col h-full">
        <header>
          <div className=" py-2">
            <div className="flex justify-between space-x-2">
              <Image src={data.avatarUrl + '?' + uniqueParam} width={200} height={200} className="w-16 h-16 rounded-full" alt='Foto do Psicologo' />
              <div>
                <div className="font-extrabold text-sky-950 w-72 h-5 text-left whitespace-nowrap">{data.firstName + ' ' + data.lastName}</div>
                <p className="text-gray-500 w-full text-left mt-1 ">{data.specialization ?? "--"} </p>
                <p className="text-gray-500 w-full text-left ">CRP:{data.crp}</p>
              </div>
            </div>
          </div>
        </header>
        <section className='flex-grow'>
          <div className="flex items-center gap-5 mb-5">
              <div className="text-center flex-[1_1_50%]">
                <p className="text-gray-600 text-start text-sm">Primeira Sessao</p>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 w-full">R${data.sessionPrice ? data.sessionPrice : '0'},00</span>
              </div>
              <div className="text-center flex-[1_1_50%]">
                <p className="text-gray-600 text-start text-sm ">Plano mensal</p>
                <span className="inline-block bg-green-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-950 w-full">R${data.montlyPrice ? data.sessionPrice : '0'},00</span>
              </div>
            </div>
            <p className="text-gray-500 text-left text-sm " aria-label={`Biografia: ${data.bio}`}>
              {data.bio}
            </p>
        </section>
        <nav>
          <Link href={'/psi/' + data.id}>
            <button className='widget-button text-sm text-blue-700 hover:underline' aria-label={`Ver perfil completo de ${data.firstName} ${data.lastName}`}>Ver perfil completo</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Widget;
