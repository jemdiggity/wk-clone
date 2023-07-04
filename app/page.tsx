import Image from 'next/image'

function Home() {
  return (
    <div class="flex-none w-18">
      <h2 class="hover:bg-blue-400 group rounded-md bg-blue-500 text-white text-sm font-medium px-2 py-2 ml-2 shadow-sm">Home</h2>
    </div>
  );
}

function Profile() {
  return (
    <div class="flex-initial w-18">
    <a href="/profile" class="hover:bg-blue-400 group rounded-md bg-blue-500 text-white text-sm font-medium px-2 py-2 mr-2 shadow-sm">
      Profile
    </a>
    </div>
  );
}

function Statistics({stats}) {
  return (
    <div class="flex flex-row items-center justify-between">
      <div class="flex-initial w-32">
        <h2 class="font-semibold text-slate-900">Radicals {stats.radicals[0]/stats.radicals[1]*100}%</h2>
      </div>
      <div class="flex-initial w-32">
        <h2 class="font-semibold text-slate-900">Kanji {stats.kanji[0]/stats.kanji[1]*100}%</h2>
      </div>
      <div class="flex-initial w-32">
        <h2 class="font-semibold text-slate-900">Words {stats.vocab[0]/stats.vocab[1]*100}%</h2>
      </div>
    </div>
  );
}

function MyHeader({stats}) {
  return (
    <div class="flex flex-row items-center justify-between h-10">
      <Home/>
      <Statistics stats={stats}/>
      <Profile/>
   </div>
  );
}
function MainHanja() {
  return (
    <div class="flex flex-column items-center justify-center text-8xl shadow rounded">
        元気
    </div>
  );
}

function InputBox() {
  return (
    <div class="flex flex-column justify-center">
      <input class="bg-white shadow rounded px-2 py-2 mx-2 my-2" defaultValue={"answer"}/>
    </div>
  );
}

function ButtonSelection() {
  return (
    <div class="flex flex-row justify-center">
      <div class="flex-initial w-32">
        <button class="hover:bg-slate-400 group rounded-md bg-slate-500 text-white text-sm font-medium px-2 py-2 shadow-sm">
          Check
        </button>
      </div>
      <div class="flex-initial w-32">
        <button class="hover:bg-slate-400 group rounded-md bg-slate-500 text-white text-sm font-medium px-2 py-2 shadow-sm">
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
      <InputBox />
      <ButtonSelection /> 
    </section>
  );
}
