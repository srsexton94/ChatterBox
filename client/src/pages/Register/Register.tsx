import { Input } from "../../components";
import { InputTypes } from "../../models";
import boxImg from "../../assets/Hands - Box.png";
import "./Register.css";

function Register() {
  return (
    <section>
      <h1>ChatterBox</h1>
      <img src={boxImg} alt="A Moving Box" />
      <Input label="username" />
      <Input label="password" type={InputTypes.PASSWORD} />
      <button>Register</button>
    </section>
  );
}

export default Register;
