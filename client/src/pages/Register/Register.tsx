import { Input } from "../../components";
import { InputTypes } from "../../models";
import boxImg from "../../assets/Hands - Box.png";
import "./Register.css";
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section>
      <h1>ChatterBox</h1>
      <img src={boxImg} alt="A Moving Box" />
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
    </section>
  );
}

export default Register;
