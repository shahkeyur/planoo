const firebaseErrorCodes: {
  [key: string]: string;
} = {
  "auth/email-already-in-use":
    "Email already in use. Please try again with a different email.",
  "auth/invalid-email": "Invalid email. Please enter a valid email.",
  "auth/weak-password":
    "Password is too weak. Please enter at least 6 characters and strong password.",
};

export { firebaseErrorCodes };
