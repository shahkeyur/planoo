import Image from "next/image";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div
        className="relative"
        style={{
          background: "url('/login-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex items-center flex-col w-full mx-auto justify-center max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
