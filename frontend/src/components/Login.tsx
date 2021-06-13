import { useHistory, useLocation } from "react-router-dom";
import { Location } from "history";
import { authType } from "../CostumType";
import { useAuth } from "../context/Auth";
import { SyntheticEvent } from "react";
import { useProvideAuth } from "../services/Auth";

interface LocationState {
  from: Location;
}

export default function Login() {
  let history = useHistory();
  let location = useLocation<LocationState>();
  let auth = useAuth() as authType;
  const { form, handleChange, connect } = useProvideAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = (e: SyntheticEvent) => {
    e.preventDefault();
    connect();

    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={login} className="flex flex-col w-72">
        <input
          className="text-center"
          placeholder="Nom"
          type="text"
          name="name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          className="text-center"
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
