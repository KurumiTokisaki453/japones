import axios from "axios";

const PROJECTO = "japones";
const VERSION = "v1-traduccion";
const STARTAPP = "es_a_jp";

const hiraganaapi = axios.create({
  baseURL: `http://127.0.0.1:8000/${PROJECTO}/${VERSION}/${STARTAPP}/`,
});

export const getAllHiragana = () => hiraganaapi.get("/");
export const createHiragana = (hiragana) => hiraganaapi.post("/", hiragana);
export const getHiragana = (id) => hiraganaapi.get("/"+id+"/"); // Obtener hiragana x id
