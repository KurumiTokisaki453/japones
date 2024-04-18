import { Link, useLocation } from "react-router-dom"
import Logo  from "../assets/translate_jp.svg"

export function Navigation() {

  const location = useLocation();
  const rutaActual = location.pathname;

  let LinkTo01 = rutaActual.charAt(1).toUpperCase()+rutaActual.substring(2);
  let LinkTo02 = "form"+rutaActual.slice(1, -6);



  return (
    <header className="fixed top-0 left-0 right-0 z-10 px-4 py-2 bg-purple-400 flex justify-between">
      <button className="flex">
        <Link to="hiragana">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </Link>
      </button>
      <div className="navigate space-x-4 bg-purple-400 flex">
        <button className="px-3 py-2 rounded-lg bg-cyan-500">
          <Link
          to="/#"
          // to="/kanji"
          className="bg-cyan-500" >Kanji</Link>
        </button>
        <button className="px-3 py-2 rounded-lg bg-cyan-500">
          <Link to="/hiragana" className="bg-cyan-500" >Hiragana</Link>
        </button>
        <button className="px-3 py-2 rounded-lg bg-cyan-500">
          <Link to="/katakana" className="bg-cyan-500" >Katakana</Link>
        </button>
        <button className="px-3 py-2 rounded-lg bg-cyan-500">
          <Link to={LinkTo02} className="bg-cyan-500" >Ingresar {LinkTo01}</Link>
        </button>
      </div>
    </header>
  )
}