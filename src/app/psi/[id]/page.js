import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';

async function fetchPsychologistsById(id) {
  const filePath = path.join(
    process.cwd(),
    'src/app/assets',
    'psicologos.json'
  );
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  return data.find(x => x.id === id)
}
export default async function Page({ params }) {
  const data = await fetchPsychologistsById(params.id);
  return (
    <div className="flex flex-col items-center md:px-24 pb-20 px-2 bg-red-50 min-h-screen space-y-5 w-full ">
      <div className="px-5 py-16">
        <Link href={'/'}>
          <button className=" flex gap-2  bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-7 rounded-full transform transition-transform hover:scale-105">
            <svg className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" aria-label='Retornar' role='button'>
              <path strokelinecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <span className=' font-light'>Retornar à lista</span>
          </button>
        </Link>
      </div>
      <main className='space-y-8'>
        <div class="flex flex-col rounded-2xl max-w-lg shadow-lg bg-white p-6 space-y-4">
          <div class="flex items-center space-x-5 ">
            <Image src={data.avatarUrl} width={200} height={200} className="w-16 h-16 rounded-full" alt='Foto do Psicologo' />
            <div>
              <div class='font-bold text-sky-950 w-10 h-5 text-left whitespace-nowrap'>{data.firstName} {data.lastName}</div>
              <p className="text-gray-500 text-sm">{data.specialization}</p>
              <p className="text-gray-500 text-sm" >CRP:{data.crp}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 mb-5">
            <div className="text-center flex-[1_1_50%]">
              <p className="text-gray-600 text-start text-sm">Primeira Sessao</p>
              <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 w-full">R${(data.sessionPrice ? parseFloat(data.sessionPrice).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0,00')}</span>
            </div>
            <div className="text-center flex-[1_1_50%]">
              <p className="text-gray-600 text-start text-sm ">Plano mensal</p>
              <span className="inline-block bg-green-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-950 w-full">R${(data.montlyPrice ? parseFloat(data.sessionPrice).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0,00')}</span>
            </div>
          </div>
        </div>
        <div class=" flex rounded-2xl max-w-lg shadow-lg bg-white">
          <div class="px-10 py-5 ">
            <div class="font-semibold text-xl text-gray-700 mb-5 mt-1">Descrição pessoal</div>
            <p class="text-left text-sm text-gray-700 mb-5">
              {data.bio}
            </p>
          </div>
        </div>
        <article class=" flex rounded-2xl max-w-lg shadow-lg bg-white">
          <div class="px-10 py-5 ">
            <div class=" font-semibold text-xl text-gray-700">Anamnese
              <div className='flex flex-wrap items-center mt-5'>
                {data.anamnesis?.map((item, index) => (
                  <span class='flex items-center bg-red-200  rounded-lg px-3 py-1 text-sm font-medium text-red-700 mr-2 mb-2 gap-1 transform transition-transform hover:scale-105'>{item.name}
                    <svg xmlns="http://www.w3.org/200/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#B55153" class="size-5" aria-label='anamneses' role='icones anamneses'>
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
        <footer class="flex rounded-2xl max-w-lg shadow-lg bg-white">
          <div class="flex flex-col px-10 py-5">
            <span className='space-y-2'>
              <div class="font-semibold text-xl mb-5 mt-1 text-gray-700">
                <p className='flex items-center'>
                  <span>Formação Profissional</span>
                  <a href="https://www.linkedin.com/company/psidofuturo/" target="_blank" rel="noopener noreferrer" class="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                </p>
              </div>
              {data.professionalCarreerTrail?.map((item) => (
                <div key={item.id} className='flex items-center gap-4'>
                  <svg className='bg-red-200 w-6 rounded-2xl size-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                  <p className='text-left text-sm text-gray-700 space-y-1'>{item.name}</p>
                </div>
              ))}
            </span>
          </div>
        </footer>
      </main>
    </div>

  );
}
