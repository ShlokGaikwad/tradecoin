import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{ translateX: "30px" }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={
            "https://www.freepnglogos.com/uploads/bitcoin-png/bitcoinpaygate-bitcoin-payment-gateway-payment-processor-7.png"
          }
          filter={"grayscale(1)"}
        />
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-10"}
      >
        Trade Coin
      </Text>
    </Box>
  );
};

export default Home;
