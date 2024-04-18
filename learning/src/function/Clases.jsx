let Cuadro = "";
const NORMALBOX = "flex-col divide-y border ";
const EDITBOX01 = " col-start-3";
const EDITBOX02 = " col-end-6";
const EDITBOX03 = " col-start-1";
export function Col_Span(item){
  Cuadro = NORMALBOX;
  if(item.id == 37) {
    return Cuadro +=EDITBOX01;
  } else if(item.id == 38) {
    return Cuadro +=EDITBOX02;
  } else if(item.id == 44) {
    return Cuadro +=EDITBOX03;
  } else if(item.id == 45) {
    return Cuadro +=EDITBOX02;
  } else if(item.id == 47) {
    return Cuadro +=EDITBOX03;
  } else {
    return Cuadro = NORMALBOX;
  }
}