import React, { useState } from "react";
import styles from './sign.module.css';
import { Button, Stack, TextField } from "@mui/material";


export const SignInForm = () => {
  const [formData, setFormData] = useState({ login: "", password: "" });

  const change = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("data", formData);
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