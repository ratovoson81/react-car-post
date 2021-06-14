import { ChangeEvent, SyntheticEvent, useState } from "react";
import { createCar } from "../api";
import { CarType } from "../api/types";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addCar } from "../store/Car";

export const useAddCar = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const userId = user?.userId ? user.userId : null;
  const [form, setForm] = useState<CarType>({
    title: "",
    description: "",
    file: null,
    user: userId,
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
    dispatch(addCar(value));
  };

  return {
    form,
    handleChange,
    handleChangeFile,
    submit,
  };
};
