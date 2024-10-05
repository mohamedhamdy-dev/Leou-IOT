import { Link, NavLink } from "react-router-dom";

export default function SignInForm() {
  return (
    <form className="min-w-96 max-w-96 rounded-xl bg-white px-6 py-8">
      <label className="mt-5 block">
        Email
        <input
          type="text"
          name="email"
          className="bg-blue-violet-50 focus:ring-blue-violet-500 mt-1 block w-full rounded-md border-none px-3 py-[6px] outline-none focus:ring-1"
        />
      </label>
      <label className="mt-5 block">
        Password
        <input
          type="password"
          name="password"
          className="bg-blue-violet-50 focus:ring-blue-violet-500 mt-1 block w-full rounded-md border-none px-3 py-[6px] outline-none focus:ring-1"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-violet-500 hover:text-blue-violet-500 border-blue-violet-500 mb-10 mt-6 w-full rounded-2xl border-[1px] p-3 text-center uppercase text-white outline-none duration-300 hover:bg-white"
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
        to="/account/register"
        className="hover:text-blue-violet-600 mt-5 block text-center text-gray-900 antialiased duration-300 hover:animate-pulse"
      >
        Sign Up
      </NavLink>

      <Link
        to="##"
        className="hover:text-blue-violet-600 mt-6 block text-gray-900 antialiased duration-300 hover:animate-pulse"
      >
        Forgot Password ?
      </Link>
    </form>
  );
}
