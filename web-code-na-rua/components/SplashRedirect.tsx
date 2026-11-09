"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkApiHealth } from "@/libs/api-health";

export default function SplashRedirect() {
  const router = useRouter();

  useEffect(() => {
    let isActive = true;

    router.prefetch("/login");

    async function initializeApp() {
      const isApiHealthy = await checkApiHealth();

      if (isActive && isApiHealthy) {
        router.replace("/login");
      }
    }

    void initializeApp();

    return () => {
      isActive = false;
    };
  }, [router]);

  return (
    <p className="sr-only" role="status" aria-live="polite">
      Verificando conexão com o MotoLab
    </p>
  );
}
