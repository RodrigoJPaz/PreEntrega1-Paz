import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import elementoImage from "../assets/imagen_no_disponible.png";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ elementos }) => {
  const { id } = useParams();

  const elementoFilter = elementos.filter((elemento) => elemento.id == id);
  return (
    <>
      {elementoFilter.map((elemento) => (
        <div key={elemento.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={elementoImage} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{elemento.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Descripción: {elemento.description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoria: {elemento.category}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Precio: $ {elemento.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount stock={elemento.stock} />
                <Center className="btn-center">
                  <Button variant="solid" colorScheme="blue">
                    Comprar
                  </Button>
                </Center>
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
