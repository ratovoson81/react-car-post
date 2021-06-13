import { ChangeEvent, useEffect, useState } from "react";
import { isLogged, login } from "../api";
import { UserType } from "../api/types";
import { TOKEN } from "../constants/config";
import { useAppDispatch } from "../hooks";
import { getUser } from "../store/User";

const fakeAuth = {
  isAuthenticated: false,
  signin(cb: () => void) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: () => void) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export function useProvideAuth() {
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<String | null>(null);
  const [form, setForm] = useState<UserType>({
    name: "",
    password: "",
  });

  useEffect(() => {
    async function fetch() {
      const response = await isLogged(localStorage.getItem(TOKEN));
      dispatch(getUser(response));
      setUser(response);
    }
    fetch();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const signin = (cb: () => void) => {
    return fakeAuth.signin(async () => {
      setUser("user");
      cb();
    });
  };

  const connect = async () => {
    const value = await login(form);
    localStorage.setItem(TOKEN, value.token);
  };

  const signout = (cb: () => void) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    form,
    user,
    signin,
    signout,
    handleChange,
    connect,
  };
}
