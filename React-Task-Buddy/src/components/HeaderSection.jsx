import writing from "../assets/writing.gif";
import moon from "../assets/moon.png";
export default function Header() {
  return (
    <header className="flex justify-between items-center h-[65px] px-10 py-3 border-b E5E8EB border-b-[#E5E8EB]">
      <div className="flex gap-3 justify-center items-center">
        <img src={writing} alt="a hand writing" className="w-7 h-7" />
        <h3 className="font-inter text-[#0D141C] font-bold">
          React Task Buddy
        </h3>
      </div>
      <div className="bg-[#E8EDF5] px-2.5 rounded-xl h-10 w-10 flex items-center justify-center gap-2">
        <img src={moon} alt="moon icon" className="w-5 h-5" />
      </div>
    </header>
  );
}
