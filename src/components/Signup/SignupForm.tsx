"use client";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { Button, Input, Link } from "@nextui-org/react";
import classNames from "classnames";
import { signIn } from "next-auth/react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Alert from "../Alert";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/helpers/firebase";
import { firebaseErrorCodes } from "@/helpers/firebase-error-codes";
import { FirebaseError } from "firebase/app";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();
  const [flashMessage, setFlashMessage] = useState<{
    type: string;
    message: string;
  } | null>(null);

  const [loading, setLoading] = useState<"signup" | "google" | null>(null);

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading("signup");
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(user.user, {
        url: `${window.location.origin}/verify-email`,
      });

      setFlashMessage({
        type: "success",
        message: `Thank you for signing up. An email verification email sent to ${email}! Please verify your email.`,
      });
    } catch (error: any) {
      if (firebaseErrorCodes[error.code]) {
        setFlashMessage({
          type: "error",
          message: firebaseErrorCodes[error.code],
        });
      } else
        setFlashMessage({
          type: "error",
          message:
            error.message ||
            "Something went wrong! If this issue, persists, please contact us.",
        });
    } finally {
      setLoading(null);
    }
  };

  const handleSignupWithGoogle = async () => {
    setLoading("google");
    try {
      await signIn("google");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-4xl font-medium text-center">Sign up</h1>
      <h1 className="text-md font-medium text-center mt-3">
        Create an account to continue
      </h1>
      <form onSubmit={handleSignup}>
        <div
          className={classNames("flex flex-col gap-5 mt-4", {
            "mb-8": open,
          })}
        >
          <Alert type={flashMessage?.type as any} open={Boolean(flashMessage)}>
            {flashMessage?.message}
          </Alert>
          <Button
            isLoading={loading === "google"}
            onClick={handleSignupWithGoogle}
            size="lg"
            variant="bordered"
          >
            <Image src="/google.svg" width={28} height={28} alt="Google Logo" />
            Signup with Google
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
            autoComplete="new-password"
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
          <div className="px-4">
            By continuing, you agree to our{" "}
            <Link href="/terms">Terms of Service</Link> and{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </div>
          <Button
            isLoading={loading === "signup"}
            type="submit"
            color="primary"
            size="lg"
          >
            Signup
          </Button>
          <div className="flex justify-center">
            <p>
              Already have an account?{" "}
              <Link scroll={false} as={NextLink} href="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
