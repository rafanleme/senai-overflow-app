import React from "react";
import { Text, View, StatusBar } from "react-native";
import CardQuestion from "../../components/CardQuestion";
import colors from "../../styles/colors";
import { Container, TextToolBar, ToolBar } from "./styles";

function Home() {

  StatusBar.setBackgroundColor(colors.primary);

  return (
    <Container>
      <ToolBar>
        <TextToolBar>SENAI OVERFLOW</TextToolBar>
      </ToolBar>
      <CardQuestion />
    </Container>
  );
}

export default Home;
