import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    <form className="max-w-96 rounded-xl bg-white px-6 py-14 pb-8">
      <div className="flex items-center gap-4">
        <label className="basis-1/2">
          First Name
          <input
            placeholder="Mohamed"
            type="text"
            name="firstName"
            className="mt-1 block w-full rounded-md border-none bg-blue-violet-50 px-3 py-[6px] outline-none focus:ring-1 focus:ring-blue-violet-500"
          />
        </label>
        <label className="basis-1/2">
          Last Name
          <input
            placeholder="Hamdy"
            type="text"
            name="lastName"
            className="mt-1 block w-full rounded-md border-none bg-blue-violet-50 px-3 py-[6px] outline-none focus:ring-1 focus:ring-blue-violet-500"
          />
        </label>
      </div>
      <label className="mt-5 block">
        Email
        <input
          placeholder="mohamed_hamdy@dev.com"
          type="text"
          name="email"
          className="mt-1 block w-full rounded-md border-none bg-blue-violet-50 px-3 py-[6px] outline-none focus:ring-1 focus:ring-blue-violet-500"
        />
      </label>
      <label className="mt-5 block">
        Password
        <input
          type="password"
          name="password"
          className="mt-1 block w-full rounded-md border-none bg-blue-violet-50 px-3 py-[6px] outline-none focus:ring-1 focus:ring-blue-violet-500"
        />
      </label>

      <button className="mt-6 w-full rounded-2xl border-[1px] border-blue-violet-500 bg-blue-violet-500 p-3 text-center uppercase text-white outline-none duration-300 hover:bg-white hover:text-blue-violet-500">
        Sign Up
      </button>
      <p className="my-5 text-center">
        Already have an account?{" "}
        <Link
          to="/account/signin"
          className="text-gray-900 antialiased duration-300 hover:animate-pulse hover:text-blue-violet-600"
        >
          Sign In
        </Link>
      </p>

      <div className="relative">
        <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-gray-800">
          or
        </span>
        <div className="absolute top-1/2 h-[0.5px] w-full -translate-y-1/2 bg-gray-300"></div>
      </div>

      <button className="mt-12 flex h-12 w-full items-center justify-center gap-2 rounded-lg border-[1px] border-blue-gray-200 capitalize">
        <img
          src={`https://www.material-tailwind.com/logos/logo-google.png`}
          alt="google"
          className="h-6 w-6"
        />{" "}
        sign in with google
      </button>

      <p className="mx-auto my-4 max-w-[19rem] text-center !font-medium text-gray-600">
        Upon signing up, you consent to abide by our{" "}
        <Link
          to="##"
          className="text-gray-900 duration-300 hover:text-blue-violet-600"
        >
          Terms of Service
        </Link>{" "}
        &{" "}
        <Link
          to="##"
          className="text-gray-900 duration-300 hover:text-blue-violet-600"
        >
          Privacy Policy.
        </Link>
      </p>
    </form>
  );
}
