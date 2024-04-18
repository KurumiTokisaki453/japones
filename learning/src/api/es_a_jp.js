import axios from "axios";

// const URLS = "http://127.0.0.1:8000"
const URLS = "http://192.168.1.10:8000";
const PROJECTO = "japones";
const STARTAPP = "es_a_jp";

const VERSION01 = "v1-traduccion"; // urlpatterns de 'urls.py' de {STARTAPP}, link backend
const VERSION02 = "v2-katakana";

const createAxiosInstance = (version) => {
  return axios.create({
    baseURL: `${URLS}/${PROJECTO}/${version}/${STARTAPP}/`,
  });
};

// Crear instancias de Axios para cada versión
const hiraganaapi = createAxiosInstance(VERSION01);
const katakanaapi = createAxiosInstance(VERSION02);

//   const URLS = "http://192.168.1.10:8000"
const getAllData = (instanciaAxios)           => instanciaAxios.get("/");
const createData = (instanciaAxios, data)     => instanciaAxios.post("/", data);
const getOneData = (instanciaAxios, id)       => instanciaAxios.get("/"+id+"/");
const updateData = (instanciaAxios, id, data) => instanciaAxios.put("/"+id+"/", data);


export const getAllHiragana = ()         => getAllData(hiraganaapi);
export const createHiragana = (data)     => createData(hiraganaapi, data);
export const getHiragana    = (id)       => getOneData(hiraganaapi, id);
export const updateHiragana = (id, data) => updateData(hiraganaapi, id, data);

export const getAllKatakana = ()         => getAllData(katakanaapi);
export const createKatakana = (data)     => createData(katakanaapi, data);
export const getKatakana    = (id)       => getOneData(katakanaapi, id);
export const updateKatakana = (id, data) => updateData(katakanaapi, id, data);