import Image from 'next/image'
import {AnswerBox} from './answer-box'

function Home() {
  return (
    <div className="flex-none w-18">
      <h2 className="hover:bg-blue-400 group rounded-md bg-blue-500 text-white text-sm font-medium px-2 py-2 ml-2 shadow-sm">Home</h2>
    </div>
  );
}

function Profile() {
  return (
    <div className="flex-initial w-18">
    <a href="/profile" className="hover:bg-blue-400 group rounded-md bg-blue-500 text-white text-sm font-medium px-2 py-2 mr-2 shadow-sm">
      Profile
    </a>
    </div>
  );
}

function Statistics({stats}) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex-initial w-32">
        <h2 className="font-semibold text-slate-900">Radicals {stats.radicals[0]/stats.radicals[1]*100}%</h2>
      </div>
      <div className="flex-initial w-32">
        <h2 className="font-semibold text-slate-900">Kanji {stats.kanji[0]/stats.kanji[1]*100}%</h2>
      </div>
      <div className="flex-initial w-32">
        <h2 className="font-semibold text-slate-900">Words {stats.vocab[0]/stats.vocab[1]*100}%</h2>
      </div>
    </div>
  );
}

function MyHeader({stats}) {
  return (
    <div className="flex flex-row items-center justify-between h-10">
      <Home/>
      <Statistics stats={stats}/>
      <Profile/>
   </div>
  );
}
function MainHanja() {
  return (
    <div className="flex flex-column items-center justify-center text-8xl shadow rounded">
        元気
    </div>
  );
}



function ButtonSelection() {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex-initial w-32">
        <button className="hover:bg-slate-400 group rounded-md bg-slate-500 text-white text-sm font-medium px-2 py-2 shadow-sm">
          Check
        </button>
      </div>
      <div className="flex-initial w-32">
        <button className="hover:bg-slate-400 group rounded-md bg-slate-500 text-white text-sm font-medium px-2 py-2 shadow-sm">
          More Info
        </button>
      </div>
    </div>
  );
}

export default function HomePage() {
  const stats = {
    radicals: [20,100],
    kanji: [500,2000],
    vocab: [1000,8000]
  };

  return (
    <section>
      <header>
        <MyHeader stats={stats} />
      </header>
      <MainHanja />
      <AnswerBox />
      <ButtonSelection /> 
    </section>
  );
}
