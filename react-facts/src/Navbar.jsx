import logo from "./assets/react.svg"
function Navbar() {
    return (
        <nav className="flex gap-4 items-center bg-slate-900 p-8 shadow-md border-b border-b-gray-600 opacity-100">
            <img src={logo} alt="react logo" />
            <span className="font-inter text-2xl text-[#61DAFB]">React Facts</span>
        </nav>
    )
}
export default Navbar;