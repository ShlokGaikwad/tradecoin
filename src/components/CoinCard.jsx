import React from "react";
import { Link } from "react-router-dom";
import { VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

const CoinCard = ({ id, name, img, symbol, price,currenctSymbol='₹'}) => {
  return (
    <Link to={`/coin/${id}`} target={"_blank"} cursor={"pointer"}>
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          src={img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt={"TradeCoin"}
        />
        <Heading size={"md"} noOfLines={1}>
          {symbol}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price?`${currenctSymbol}${price}`:"NA"}</Text>
      </VStack>
    </Link>
  );
};

export default CoinCard;
