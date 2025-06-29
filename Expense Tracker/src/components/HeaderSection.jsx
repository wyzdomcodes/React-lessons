import logo from "../assets/accounting.gif";
export default function Header() {
  return (
    <header className="px-10 py-3 flex justify-start items-center gap-4">
      <img src={logo} alt="a gif animation" className="w-7 h-7" />
      <h3 className="text-xl font-bold">Expense Tracker</h3>
    </header>
  );
}
