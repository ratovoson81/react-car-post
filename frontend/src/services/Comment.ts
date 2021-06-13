import { ChangeEvent, SyntheticEvent, useState } from "react";
import { comment } from "../api";
import { CommentType } from "../api/types";
import { useAppDispatch, useAppSelector } from "../hooks";
import { commentCar } from "../store/Car";

export const useComment = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<CommentType>({
    content: "",
    user: user.userId,
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
      user: user.userId,
    });
  };

  const submit = async (event: SyntheticEvent, id: string) => {
    event.preventDefault();
    const value = await comment(form, id);
    dispatch(commentCar(value));
    console.log(value);
  };

  return {
    form,
    handleChange,
    submit,
  };
};
