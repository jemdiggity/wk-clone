import Image from 'next/image'

function Home() {
  return (
    <div class="flex-none w-14">
      <h2 class="font-semibold text-slate-900">Home</h2>
    </div>
  );
}

function Profile() {
  return (
    <div class="flex-initial w-18">
    <a href="/profile" class="hover:bg-blue-400 group flex items-center justify-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
      Profile
    </a>
    </div>
  );
}

function Statistics() {
  return (
    <div class="flex-initial w-32">
      <h2 class="font-semibold text-slate-900">1234</h2>
    </div>
  );
}

function MyHeader() {
  return (
    <div class="flex flex-row items-center justify-between h-10">
      <Home/>
      <Statistics/>
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

function ButtonSelection() {
  return (
    <div className='buttons'>
      <span>
        <button>
          "Check"
        </button>
      </span>
      <span>
        <button>
          "More Info"
        </button>
      </span>
    </div>
  );
}

function InputBox() {
  return (
    <div>
    <input class="flex-column justify-center w-72 bg-white shadow rounded" defaultValue={"answer"}/>
    </div>
  );
}

export default function HomePage() {
  return (
    <section>
      <header>
        <MyHeader />
      </header>
      <MainHanja />
      <InputBox />
      <ButtonSelection /> 
    </section>
  );
}
