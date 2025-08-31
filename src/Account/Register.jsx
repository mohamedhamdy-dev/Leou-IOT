import RegisterForm from "./RegisterForm";
function Register() {
  return (
    <div className="flex flex-col-reverse gap-8 lg:flex-row lg:gap-0">
      <div className="basis-1/2 bg-white">
        <img src="/account/iot.png" alt="iot logo" />
      </div>
      <div className="flex basis-1/2 items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
