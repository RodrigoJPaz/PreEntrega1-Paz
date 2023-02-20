import { Heading, Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
          <Image className="img-index"
            src="https://i.pinimg.com/564x/0d/2a/fc/0d2afc6c5fe05f9d40728850fd6eca38.jpg"
            alt="imagen"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;
