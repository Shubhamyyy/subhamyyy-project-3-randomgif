import logo from './logo.svg';
import './App.css';
import './index.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="w-full min-h-screen p-8 flex flex-col background relative overflow-x-hidden items-center">
      <h6 className="bg-white rounded-xl w-11/12 text-center mt-[40px] px-10 py-2
        text-3xl font-bold">RANDOM GIFS</h6>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}

export default App;
