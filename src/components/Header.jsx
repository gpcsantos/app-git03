import produtos from "../pages/Produtos";
export default function Header() {
  return (
    <header className="w-full flex justify-around bg-slate-400 p-4 text-white fixed-top top-0 left-0">
      <div>LOGO</div>
      <a href="/produtos" className="text-white hover:text-gray-300">
        Produtos
      </a>
      <div>Login</div>
    </header>
  );
}
