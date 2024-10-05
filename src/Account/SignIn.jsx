import iot1 from "../assets/account/iot1.png";
import SignInForm from "./SignInForm";

function SignIn() {
  return (
    <div className="flex flex-col-reverse gap-8 lg:flex-row lg:gap-0">
      <div className="basis-1/2 bg-white">
        <img src={iot1} alt="iot logo" />
      </div>
      <div className="flex basis-1/2 items-center justify-center">
        <SignInForm />
      </div>
    </div>
  );
}

export default SignIn;
