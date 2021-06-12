import { ChangeEvent, SyntheticEvent, useState } from "react";
import { register } from "../api";
import { UserType } from "../api/types";

export const useRegister = () => {
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
    const value = await register(form);
    console.log(value);
  };

  return {
    form,
    handleChange,
    submit,
  };
};
