import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../Context/userProvider";
import { useState } from "react";

export default function SignInForm() {
  const { setLogged } = useUser();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleForm(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.email === "test@sds.com" && formData.password === "123456") {
      setLogged(true);
      navigate("/SDS/Sensor");
    } else if (
      formData.email === "test2@sds.com" &&
      formData.password === "123456"
    ) {
      setLogged(true);
      navigate("/SDS/Sensor");
    } else if (
      formData.email === "test3@sds.com" &&
      formData.password === "123456"
    ) {
      setLogged(true);
      navigate("/SDS/Sensor");
    } else {
      setLogged(false);
    }
  }

  return (
    <form
      className="min-w-96 max-w-96 rounded-xl bg-white px-6 py-8"
      onSubmit={handleSubmit}
    >
      <label className="mt-5 block">
        Email
        <input
          onChange={handleForm}
          value={formData.email}
          type="text"
          name="email"
          className="mt-1 block w-full rounded-md border-none bg-blue-violet-50 px-3 py-[6px] outline-none focus:ring-1 focus:ring-blue-violet-500"
        />
      </label>
      <label className="mt-5 block">
        Password
        <input
          onChange={handleForm}
          value={formData.password}
          type="password"
          name="password"
          className="mt-1 block w-full rounded-md border-none bg-blue-violet-50 px-3 py-[6px] outline-none focus:ring-1 focus:ring-blue-violet-500"
        />
      </label>
      <button
        type="submit"
        className="mb-10 mt-6 w-full rounded-2xl border-[1px] border-blue-violet-500 bg-blue-violet-500 p-3 text-center uppercase text-white outline-none duration-300 hover:bg-white hover:text-blue-violet-500"
      >
        Sign In
      </button>

      <div className="relative">
        <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-gray-800">
          or
        </span>
        <div className="absolute top-1/2 h-[0.5px] w-full -translate-y-1/2 bg-gray-300"></div>
      </div>

      <NavLink
        to="/SDS/account/register"
        className="mt-5 block text-center text-gray-900 antialiased duration-300 hover:animate-pulse hover:text-blue-violet-600"
      >
        Sign Up
      </NavLink>

      <Link
        to="##"
        className="mt-6 block text-gray-900 antialiased duration-300 hover:animate-pulse hover:text-blue-violet-600"
      >
        Forgot Password ?
      </Link>
    </form>
  );
}
