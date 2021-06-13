import { ChangeEvent, SyntheticEvent, useState } from "react";
import { createCar } from "../api";
import { CarType } from "../api/types";

export const useAddCar = () => {
  const [form, setForm] = useState<CarType>({
    title: "",
    description: "",
    file: null,
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleChangeFile = (event: any) => {
    setForm({
      ...form,
      file: event.target.files[0],
    });
  };

  const submit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const value = await createCar(form);
    console.log(value);
  };

  return {
    form,
    handleChange,
    handleChangeFile,
    submit,
  };
};
