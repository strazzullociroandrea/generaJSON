const nomi = ["Ferrari", "Russo", "Greco", "Esposito", "..."];
const numeri = [7,6,5,8, "..."];

/**
 * Funzione per generare un json partendo da due array
 * @param {*} arrayUno chiavi
 * @param {*} arrayDue valori
 */
const generaJSON = (arrayUno, arrayDue) =>{
    if(arrayUno.length != arrayDue.length)
        arrayUno.length > arrayDue.length ? arrayUno.length = arrayDue.length : arrayDue.length = arrayUno.length;

    const json = {};
    for(let i=0;i<arrayUno.length;i++)
        json[arrayUno[i]] = arrayDue[i];
    return json;
}

console.log(generaJSON(nomi, numeri));