import { BrowserRouter as Router, Switch } from "react-router-dom";
import Acceuil from "../components/Accueil";
import Login from "../components/Login";
import Register from "../components/Register";
import { AppRoute, PrivateRoute } from "../router/PrivateRoute";
import ProvideAuth from "../router/ProvideAuth";
import LoginPage from "../layout/LoginPage";
import PrivatePage from "../layout/PrivatePage";
import Home from "../components/Home";
import ListCar from "../components/car/ListCar";

export default function App() {
  return (
    <ProvideAuth>
      <div className="flex flex-row">
        <div className=" w-3/5 ">
          <ListCar />
        </div>
        <div className="w-2/5 ">
          <Router>
            <Switch>
              <AppRoute exact path="/" layout={LoginPage} component={Login} />
              <AppRoute
                path="/register"
                layout={LoginPage}
                component={Register}
              />
              <PrivateRoute
                path="/accueil"
                layout={PrivatePage}
                component={Acceuil}
              />
              <PrivateRoute
                path="/home"
                layout={PrivatePage}
                component={Home}
              />
            </Switch>
          </Router>
        </div>
      </div>
    </ProvideAuth>
  );
}
