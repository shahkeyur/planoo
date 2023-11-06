"use client";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import classNames from "classnames";
import { signIn } from "next-auth/react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Alert from "../Alert";
import { sendEmailVerification } from "firebase/auth";

function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();
  const [flashMessage, setFlashMessage] = useState<{
    type: string;
    message: string;
  } | null>(null);

  const [loading, setLoading] = useState<"login" | "google" | null>(null);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    setLoading("login");
    e.preventDefault();
    signIn("credentials", {
      redirect: false,
      email,
      password,
    })
      .then((res) => {
        if (res?.error) {
          if (res.error === "email-not-verified") {
            setFlashMessage({
              type: "error",
              message: "Please verify email to continue!",
            });
          } else {
            setFlashMessage({
              type: "error",
              message: "Incorrect email or password!",
            });
          }
        } else {
          setFlashMessage({
            type: "success",
            message: "Logged in successfully!",
          });
          router.push(res?.url || "/");
        }
      })
      .catch((error) => {
        setFlashMessage({
          type: "error",
          message: "Something went wrong! Please try again later.",
        });
      })
      .finally(() => setLoading(null));
  };

  const handleLoginWithGoogle = async () => {
    setLoading("google");
    try {
      await signIn("google");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-4xl font-medium text-center">Welcome Back!</h1>
      <h1 className="text-md font-medium text-center mt-3">
        Please enter your credentials!
      </h1>
      <form onSubmit={handleLogin}>
        <div className={"flex flex-col gap-5 mt-4"}>
          <Alert type={flashMessage?.type as any} open={Boolean(flashMessage)}>
            <div
              dangerouslySetInnerHTML={{
                __html: flashMessage?.message || "",
              }}
            />
          </Alert>
          <Button
            isLoading={loading === "google"}
            onClick={handleLoginWithGoogle}
            size="lg"
            variant="bordered"
          >
            <Image src="/google.svg" width={28} height={28} alt="Google Logo" />
            Login with Google
          </Button>
          <hr />
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            label="Email"
            required
          />
          <Input
            label="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            endContent={
              <Button
                variant="light"
                isIconOnly
                className="focus:outline-none m-auto"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeIcon className="h-6" />
                ) : (
                  <EyeSlashIcon className="h-6" />
                )}
              </Button>
            }
            type={isVisible ? "text" : "password"}
          />
          {/* Remember me and forgot password */}
          <div className="flex justify-between">
            <div>
              <Checkbox type="checkbox">Remember me</Checkbox>
            </div>
            <Link href="#">Forgot password?</Link>
          </div>
          <Button
            isLoading={loading === "login"}
            type="submit"
            color="primary"
            size="lg"
          >
            Login
          </Button>
          <div className="flex justify-center">
            <p>
              Don&apos;t have an account?{" "}
              <Link scroll={false} as={NextLink} href="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
