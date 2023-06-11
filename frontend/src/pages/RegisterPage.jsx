import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../component/Button";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();

  const postUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        password,
        confPassword,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="font-jakartaregular">
        <div className="m-10">
          <section className="text-2xl font-jakartabold">
            <Link to="/">KAL MARKET</Link>
          </section>
          <div className="flex flex-col m-auto border-2 rounded-3xl w-[640px] mt-5 p-10">
            <div className="flex flex-col items-center ">
              <section className="text-3xl font-jakartabold">
                Welcome to Kal Market
              </section>
              <p className="text-gray-400">Register your account here</p>
            </div>
            <div className="flex justify-center mt-10">
              <form onSubmit={postUser} className="flex flex-col w-[550px]">
                <label className="flex justify-between items-center mb-5">
                  Nama Lengkap:
                  <input
                    type="text"
                    className="w-96 p-3 bg-blue-100 rounded-lg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </label>
                <label className="flex justify-between items-center mb-5">
                  Email:
                  <input
                    type="email"
                    className="w-96 p-3 bg-blue-100 rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </label>
                <label className="flex justify-between items-center mb-5">
                  Password:
                  <input
                    type="password"
                    className="w-96 p-3 bg-blue-100 rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </label>
                <label className="flex justify-between items-center mb-5">
                  Konfirmasi Password:
                  <input
                    type="password"
                    className="w-96 p-3 bg-blue-100 rounded-lg"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                  ></input>
                </label>
                <Button value="Daftar Sekarang" fill block />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
