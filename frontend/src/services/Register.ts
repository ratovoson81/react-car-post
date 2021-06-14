import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../api";
import { UserType } from "../api/types";

export const useRegister = () => {
  let history = useHistory();

  const [form, setForm] = useState<UserType>({
    name: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await register(form);
    history.push("/");
  };

  return {
    form,
    handleChange,
    submit,
  };
};
