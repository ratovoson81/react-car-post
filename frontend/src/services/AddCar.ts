import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { createCar } from "../api";
import { CarType } from "../api/types";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addCar } from "../store/Car";
import { useToasts } from "react-toast-notifications";
import socketClient from "socket.io-client";
import { URL_API } from "../constants/config";

export const useAddCar = () => {
  const { addToast } = useToasts();

  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const userId = user?.userId ? user.userId : null;
  const [form, setForm] = useState<CarType>({
    title: "",
    description: "",
    file: null,
    user: userId,
  });

  const socket = socketClient(URL_API);

  useEffect(() => {
    socket.on("ok", (data) => {
      dispatch(addCar(data.data));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const submit = async (event: SyntheticEvent, closeModal: Function) => {
    event.preventDefault();

    const value = await createCar(form);
    //dispatch(addCar(value));

    socket.emit("add", { data: value });
    addToast("voiture publié", {
      appearance: "success",
      autoDismiss: true,
    });
    closeModal();
  };

  return {
    form,
    handleChange,
    handleChangeFile,
    submit,
  };
};
