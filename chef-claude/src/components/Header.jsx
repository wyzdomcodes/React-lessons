import chef from "../assets/cooking.png";
export default function Header() {
  return (
    <header className="bg-white flex justify-center items-center gap-2 py-6 border-b border-b-gray-300 shadow-md">
      <img src={chef} alt="A chef" className="h-10" />
      <h1 className="text-black font-inter text-2xl font-semibold">
        Chef Claude
      </h1>
    </header>
  );
}
