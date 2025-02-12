import React, { useState } from "react";
import loginImage from "../assets/login.png";
import FormInput from "../components/forms/FormInput";
import BlueButton from "../components/Buttons/BlueButton";
import axios from "axios";
import { toast } from "react-toastify";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function inputHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const loginHandler = async () => {
    try {
      const results = await axios.post(
        "http://localhost:3000/api/login",
        data
      );
      console.log("Login Succes", results.data);
    } catch (error) {
      console.error("Error logging in:",error);
      toast.error(error.response.data.message)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <img src={loginImage} alt="" className="w-36 mb-9" />

      <FormInput
        placeholder="Username"
        name="username"
        value={data.username}
        onChange={inputHandler}
        className="mb-4"
      />

      <FormInput
        placeholder="Password"
        name="password"
        value={data.password}
        onChange={inputHandler}
        type={showPassword ? "text" : "password"}
        showPasswordToggle
        togglePassword={() => setShowPassword(!showPassword)}
      />
      <div className="mb-16"></div>
      <BlueButton text="Login" onClick={loginHandler} />

      <p className="mt-2 font-mulish font-semibold text-sm">
        Don't have an account?
      </p>
      <a
        href="./register"
        className="font-mulish font-semibold text-sm underline"
      >
        Register
      </a>
    </div>
  );
}

export default Login;
