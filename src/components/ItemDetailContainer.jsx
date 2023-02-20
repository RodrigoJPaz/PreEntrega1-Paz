import ItemDetail from "./ItemDetail";
import { useState } from "react";
import Data from "../data.json";
import { useParams } from "react-router";
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [elementos, setElementos] = useState([]);
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        const elementoFilter = Data.filter((elemento) => elemento.id == id);
        resolve(elementoFilter);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      setElementos(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();
  return <ItemDetail elementos={Data} />;
};

export default ItemDetailContainer;
