
import { getAllKatakana } from '../api/es_a_jp'
import { useEffect, useState } from 'react'
// import { Col_Span } from '../function/Clases';

export function KatakanaPage() {

  const [katakanaList, setKatakanaList] = useState([]);

  useEffect(() => {
    async function loadHiragana() {
      try {
        const respuesta = await getAllKatakana();
        const lista = respuesta.data;
        setKatakanaList(lista);
      } catch (error) {
        console.error('Error al cargar hiragana:', error);
      }
    }
    loadHiragana();
  }, [])

  let Cuadro = "";
  const NORMALBOX = "flex-col divide-y border ";
  const EDITBOX01 = " col-start-3";
  const EDITBOX02 = " col-end-6";
  const EDITBOX03 = " col-start-1";
  function Col_Span(item){
    Cuadro = NORMALBOX;
    if(item.orden == 37) {
      return Cuadro +=EDITBOX01;
    } else if(item.orden == 38) {
      return Cuadro +=EDITBOX02;
    } else if(item.orden == 44) {
      return Cuadro +=EDITBOX03;
    } else if(item.orden == 45) {
      return Cuadro +=EDITBOX02;
    } else if(item.orden == 47) {
      return Cuadro +=EDITBOX03;
    } else {
      return Cuadro = NORMALBOX;
    }
  }

  return (
  <>
  <p className='py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:!text-4xl'>Katakana - Japonés (46)</p>
    <div  className='grid grid-cols-7 '>
      <div className='grid grid-cols-5 col-start-2 col-span-5 '>
      {katakanaList.map((item) => (
        Col_Span(item),
        <div key={item.orden} className={Cuadro}>
          
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold
              bg-red-500 japones font-medium">
            {item.letra}
            </div>
            <div className='justify-evenly flex bg-blue-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:!text-4xl'>
              <p className="bg-transparent text-orange-500">
                {item.pronunciacion}</p>
              <p className="bg-transparent text-black">
                {item.traduccion}</p>
              <p className='bg-transparent text-indigo-500'>
                {item.trazos}</p>
            </div>
        </div>
       ))}
       </div>
    </div>
  </>
  )
}