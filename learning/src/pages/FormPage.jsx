
import { createHiragana, getAllHiragana, } from '../api/es_a_jp'
import { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'

export function FormPage() {
  // const navegar = useNavigate()
  // const paramet = useParams()
  // const onSubmit = handleSubmit(async data => {
  //   if (paramet.id) {
  //     await updateTask(paramet.id, data);
  //     // toast.success("Tarea Actualizada", {
  //     //   position: "bottom-right",
  //     //   style: {
  //     //     background: "#101010",
  //     //     color: "#fff", }
  //     // },)
  //   } else {
  //     await createHiragana(data);
  //     // toast.success("Tarea Creada", {
  //     //   position: "bottom-right",
  //     //   style: {
  //     //     background: "#101010",
  //     //     color: "#fff", }
  //     // },)
  //   }
  // })
  // const [hiraganaList, setHiraganaList] = useState([]);

  // useEffect(() => {
  //   async function loadHiragana() {
  //     try {
  //       const respuesta = await getAllHiragana();
  //       const lista = respuesta.data;
  //       setHiraganaList(lista);
  //     } catch (error) {
  //       console.error('Error al cargar hiragana:', error);
  //     }
  //   }
  //   loadHiragana();
  // }, [])

  return (
    <div 
    className='grid grid-cols-7 '
    >
      <p>¡Hola desde tu formulario!</p>

      {/* {hiraganaList.map((item) => ( */}
      <div className='col-start-1' >s</div>
      <div className='grid grid-cols-5 col-span-5 bg-blue-500'>

        <div
          // key={item.id} 
          className=" flex-col divide-y border border-blue-300">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold bg-red-500">
            {/* {item.letra} */}
            あ
            </div>
            <div className='justify-evenly flex bg-blue-400 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:!text-4xl'>
              <p className="bg-blue-500 text-emerald-300">
                {/* {item.pronunciacion} */}
              A</p>
              <p className="text-cyan-200">
                {/* {item.traduccion} */}
              a</p>
              <p className='bg-blue-500 text-purple-200'>
                {/* {item.trazos} */}
              a</p>
            </div>
        </div>
        {/* ------------------------------ */}
        <div className="rounded-md">
          <h3 className="text-xl font-bold mb-2">
            あ</h3>
          <p className="text-gray-600">
            i</p>
          <p className="text-sm mt-2">
            i</p>
          <p className='text-gray-500' >
            i</p>
        </div>
        <div className="border">
          <h3 className="text-xl font-bold mb-2">
            あ</h3>
          <p className="text-gray-600">
            i</p>
          <p className="text-sm mt-2">
            i</p>
          <p className='text-gray-500' >
            i</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">
            あ</h3>
          <p className="text-gray-600">
            i</p>
          <p className="text-sm mt-2">
            i</p>
          <p className='text-gray-500' >
            i</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">
            あ</h3>
          <p className="text-gray-600">
            i</p>
          <p className="text-sm mt-2">
            i</p>
          <p className='text-gray-500' >
            i</p>
        </div>
       {/* ))} */}
       </div>
    </div>
  )
}