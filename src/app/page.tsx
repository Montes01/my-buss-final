"use client"
import { useEffect } from "react";

export default function Home() {
  const redirectToHome = () => {
    window.location.href = '/home';
  };
  useEffect(() => {
    redirectToHome();
  }, []);

  return (
    <>
    </>
  );
}
