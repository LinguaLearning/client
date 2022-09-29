import React from "react";
import {
  Box,
  Grid,
  GridElemenet,
  Text,
  Image,
  Description,
} from "./ResourcesStyled";
import { useColors } from "../../../context/StylingContext/ColorContext";

const Resources = () => {
  const globalColors = useColors();

  return (
    <Box>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad itaque
        odit consequatur optio sed illum accusamus eum reprehenderit obcaecati,
        consequuntur perspiciatis soluta ab odio!
      </Description>
      <Grid>
        <GridElemenet
          backg={globalColors.secondary}
          style={{ gridColumn: "span 2" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="image"
          />
          <Text>Music</Text>
        </GridElemenet>
        <GridElemenet style={{ gridColumn: "span 2" }}>
          <Image
            src="https://images.unsplash.com/photo-1456953180671-730de08edaa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            alt="image"
          />
          <Text>E-Books</Text>
        </GridElemenet>
        <GridElemenet style={{ gridColumn: "span 2" }}>
          <Image
            src="https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            alt="image"
          />
          <Text>Movies</Text>
        </GridElemenet>
        <GridElemenet style={{ gridColumn: "span 3" }}>
          <Image
            src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="image"
          />
          <Text>Podcasts</Text>
        </GridElemenet>
        <GridElemenet style={{ gridColumn: "span 3" }}>
          <Image
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="image"
          />
          <Text>Other</Text>
        </GridElemenet>
      </Grid>
    </Box>
  );
};

export default Resources;
