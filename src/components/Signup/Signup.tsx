import SignupForm from "./SignupForm";

function Signup() {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="flex items-center flex-col w-full mx-auto justify-center max-w-md">
        <SignupForm />
      </div>
      <div
        className="relative"
        style={{
          background: "url('/signup-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Signup;
