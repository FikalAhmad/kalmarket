import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bgLogin from "../images/Sprinkle.jpg";
import Button from "../component/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      navigate("/testing");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex font-jakartaregular">
      <div className="w-[1024px] m-10">
        <div className="w-full">
          <section className="text-2xl font-jakartabold">
            <Link to="/">KAL MARKET</Link>
          </section>
          <div className="mt-24">
            <div className="flex flex-col items-center">
              <p className="text-5xl font-jakartabold">Welcome back</p>
              <p className="text-gray-400">Log in to your account</p>
            </div>
            <div className="flex justify-center mt-14 ">
              <form onSubmit={LoginUser} className="flex flex-col w-[550px]">
                <label className="flex justify-between items-center mb-5">
                  Email:
                  <input
                    type="email"
                    className="w-96 p-3 bg-blue-100 rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label className="flex justify-between items-center mb-5">
                  Password:
                  <input
                    type="password"
                    className="w-96 p-3 bg-blue-100 rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <Button value="Login" fill block />
              </form>
            </div>
            <p className="flex justify-center mt-5">
              Belum punya akun? <Link to="/daftar">Daftar Disini</Link>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-96">
          <img className="w-full" src={bgLogin} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
