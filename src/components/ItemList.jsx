import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ elementos }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {elementos?.map((elemento) => (
          <Item
            key={elemento.id}
            id={elemento.id}
            name={elemento.name}
            description={elemento.description}
            price={elemento.price}
            stock={elemento.stock}
            category={elemento.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
