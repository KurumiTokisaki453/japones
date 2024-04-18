// FormHiragana.jsx
import { useEffect } from 'react';
import {createHiragana, getHiragana, updateHiragana } from "../api/es_a_jp"
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

export const FormHiragana = () => {
  const {
    register,
    handleSubmit,
    formState : {errors},
    setValue
  } = useForm();
  const navegar = useNavigate()
  const paramet = useParams()

  const onSubmit = handleSubmit(async data => {
    if (paramet.id) {
      await updateHiragana(paramet.id, data);
      // toast.success("Hiragana Actualizada", {
      //   position: "bottom-right",
      //   style: {
      //     background: "#101010",
      //     color: "#fff", }
      // },)
    } else {
      await createHiragana(data);
      // toast.success( " Hiragana creado", {
      //   position: "bottom-right",
      //   style: {
      //     background: "#101010",
      //     color: "#fff", }
      // },)
    }
    navegar("/add");
  })

  useEffect(() => {
    async function loadGetHira() {
      if (paramet.id){
        const {data : {letra,pronunciacion, traduccion, trazos,orden},} = await getHiragana(paramet.id);
        setValue('letra', letra)
        setValue('pronunciacion', pronunciacion)
        setValue('traduccion', traduccion)
        setValue('trazos', trazos)
        setValue('orden',orden);
        // const answer = await getTask(paramet.id);
        // setValue('title', answer.data.title)
        // setValue('descripcion', answer.data.descripcion)
      }
    }
    loadGetHira();
  }, [])
  let caracteres = "Hiragana";
  let place_holder= "Carácter "+caracteres;

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-purple-400 rounded-md shadow-md">
      <h2 className="bg-transparent text-2xl font-bold mb-4">Agregar Nueva Letra</h2>
      <form onSubmit={onSubmit} className='bg-purple-400'>
        <div className="mb-4 bg-purple-400">
          <label className="bg-purple-400 lock text-sm font-medium text-gray-600">Letra/Palabra:</label>
          <input
            type="text"
            placeholder={place_holder}
            {...register("letra", { require: true })}
            className="mt-1 p-2 w-full border rounded-md bg-purple-300 text-black"
            required
          />{errors.letra && <span>Carácter es requerido.</span>}
        </div>
        <div className="mb-4 bg-purple-400">
          <label className="bg-purple-400 block text-sm font-medium text-gray-600">Pronunciación:</label>
          <input
            type="text"
            placeholder="Pronunciación"
            {...register("pronunciacion", { require: true })}
            className="mt-1 p-2 w-full border rounded-md bg-purple-300 text-black"
            required
          />{errors.pronunciacion && <span>Pronunciación es requerido.</span>}
        </div>
        <div className="mb-4 bg-purple-400">
          <label className="block text-sm bg-purple-400 font-medium text-gray-600">Traducción:</label>
          <input
            type="text"
            placeholder="Traducción"
            {...register("traduccion", { require: true })}
            className="mt-1 p-2 w-full border rounded-md bg-purple-300 text-black"
            required
          />{errors.traduccion && <span>Traducción es requerido.</span>}
        </div>
        <div className="mb-4 bg-purple-400">
          <label className="block bg-purple-400 text-sm font-medium text-gray-600">Número de Trazos:</label>
          <input
            type="text"
            placeholder="N° de trazos"
            {...register("trazos", { require: true })}
            className="mt-1 p-2 w-full border rounded-md text-black bg-purple-300/75"
            required
          />{errors.trazos && <span>N° Trazos es requerido.</span>}
        </div>
        <div className="mb-4 bg-purple-400">
          <label className="block bg-purple-400 text-sm font-medium text-gray-600">Número de Orden:</label>
          <input
            type="text"
            placeholder="N° de orden"
            {...register("orden", { require: true })}
            className="mt-1 p-2 w-full border rounded-md text-black bg-purple-300/75"
            required
          />{errors.orden && <span>N° Orden es requerido.</span>}
        </div>
        <div className="mt-4 bg-purple-400" >
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Guardar</button>
        </div>
      </form>
    </div>
  );
};
