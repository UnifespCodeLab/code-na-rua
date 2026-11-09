import { ViewTransition } from "react";
import { SplashScreen } from "@/app/splash/splash-screen";
import SplashRedirect from "@/components/SplashRedirect";

export default function Home() {
  return (
    <>
      <ViewTransition
        name="app-screen"
        share="splash-login"
        default="none"
      >
        <SplashScreen />
      </ViewTransition>
      <SplashRedirect />
    </>
  );
}
