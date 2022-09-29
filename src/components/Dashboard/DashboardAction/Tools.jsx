import React from "react";
import {
  ToolsList,
  ListItem,
  Image,
  ItemTitle,
  Status,
  Content,
  ItemDescription,
} from "./ToolsStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useColors } from "../../../context/StylingContext/ColorContext";

const Tools = () => {
  const globalColors = useColors();

  return (
    <ToolsList>
      {[0, 1, 2, 3, 4, 5, 6].map((el) => (
        <ListItem key={el}>
          <Image src="https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
          <Content>
            <ItemTitle>Flash Cards</ItemTitle>
            <ItemDescription color={globalColors.secondary}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ItemDescription>
          </Content>
          <Status>
            <FontAwesomeIcon
              style={{ fontSize: "35px", color: globalColors.secondary }}
              icon={faCircleExclamation}
            ></FontAwesomeIcon>
          </Status>
        </ListItem>
      ))}
    </ToolsList>
  );
};

export default Tools;
