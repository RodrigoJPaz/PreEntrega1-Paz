import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
const ItemListContainer = () => {
  const { category } = useParams();

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  const catFilter = Data.filter((elemento) => elemento.category === category);
  return (
    <div>
      <Center bg="#D6EAF8" h="70px" color="white">
        <Heading as="h2" size="2xl" className="titulo">
          Ofertas del Mes!
        </Heading>
      </Center>
      {category ? <ItemList elementos={catFilter} /> : <ItemList elementos={Data} />}
    </div>
  );
};

export default ItemListContainer;
