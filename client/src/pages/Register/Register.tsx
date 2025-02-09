import { Input } from "../../components";
import { InputTypes } from "../../models";
import boxImg from "../../assets/Hands - Box.png";
import "./Register.css";
import { useState, FormEvent } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await axios.post("/register", { username, password });
  };

  return (
    <section>
      <h1>ChatterBox</h1>
      <img src={boxImg} alt="A Moving Box" />
      <form onSubmit={register}>
        <Input
          label="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <Input
          label="password"
          value={password}
          type={InputTypes.PASSWORD}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button>Register</button>
      </form>
    </section>
  );
}

export default Register;
