import React, { useState } from "react";
import styles from "./sign.module.css";
import { Button, Stack, TextField } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { setUser } from "./userSlice";
import axios from "axios";

export const SignInForm = () => {
  const dispatch = useAppDispatch();
  const push = useNavigate();
  const [formData, setFormData] = useState({ login: "", password: "" });



  const change = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onFormSubmit = async (e: any) => {
    e.preventDefault();
    await axios
      .post(
        `http://10.111.15.123:5085/api/Auth?login=${formData.login}&password=${formData.password}`,
        formData
      )
      .then((data) => {
        dispatch(
          setUser({
            data: data.config.data,
          })
        );

        push("/home");
      })
      .catch(() => alert("Неверный логин или пароль"));
  };

  return (
    <div className={styles.centerBox}>
      <Stack
        component="form"
        sx={{
          width: "35ch",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
        onSubmit={onFormSubmit}
      >
        <TextField
          label="Логин"
          onChange={change}
          value={formData.login}
          name="login"
          size="small"
        />
        <TextField
          label="Пароль"
          type="password"
          value={formData.password}
          onChange={change}
          name="password"
          size="small"
        />
        <Button variant="contained" type="submit">
          Вход
        </Button>
      </Stack>
    </div>
  );
};
