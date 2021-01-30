import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";


const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" exact component={Home} /> */}
      <Route path="/" exact component={Login} />
      {/* <Route path="/cadastro" component={Cadastro} /> */}
      {/* <Route path="/seus-dados" component={DadosUser} /> */}
      {/* <Route path="/nova-senha" component={NovaSenhaDoUsuario} />
      <Route path="/esqueci-senha" component={EsqSenha} /> */}
      {/* <Route path="/perfil" component={Perfil} /> */}
      {/* <Route path="/editar-perfil" component={EditarPerfil} /> */}
      {/* <Route path="/error" component={Erro} />
      <Route path="/logout" component={Logout} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
