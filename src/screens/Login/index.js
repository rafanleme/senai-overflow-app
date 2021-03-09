import React from "react";
import { StatusBar, TextInput, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import colors from "../../styles/colors";
import { Container, ToolBar, TextToolBar } from "../../styles/stylesGlobal";
import { Content, Label, TextInputLogin } from "./styles";

function Login() {
  StatusBar.setBackgroundColor(colors.primary);

  return (
    <Container>
      <ToolBar>
        <TextToolBar>Faça o Login</TextToolBar>
      </ToolBar>
      <Content>
        <Label>E-Mail</Label>
        <TextInputLogin
          autoCompleteType="email"
          placeholderTextColor={colors.lightTransparent}
          placeholder="Digite o seu e-mail"
        />

        <Label>Senha</Label>
        <TextInputLogin
          autoCompleteType="password"
          placeholder="Digite a sua senha"
          placeholderTextColor={colors.lightTransparent}
          secureTextEntry={true}
        />
        <Button text="Entrar" style={{ width: "96%" }} />
      </Content>
    </Container>
  );
}

export default Login;
