"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  UserIcon,
} from "@/components/icons/navigation-icons";

export default function CadastroForm() {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="mt-5 grid w-full min-w-0 max-w-full gap-4" onSubmit={handleSubmit}>
      <div className="min-w-0 max-w-full">
        <label
          className="mb-1.5 block text-sm font-semibold text-zinc-800"
          htmlFor="identifier"
        >
          E-mail ou CPF
        </label>
        <div className="flex min-h-14 w-full min-w-0 max-w-full items-center overflow-hidden rounded-2xl border-2 border-zinc-200 bg-white px-3 shadow-sm transition min-[390px]:px-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/15">
          <UserIcon className="size-6 shrink-0 text-zinc-900" />
          <span className="mx-2 h-8 w-px shrink-0 bg-zinc-300 min-[390px]:mx-3" aria-hidden="true" />
          <input
            className="min-w-0 flex-1 bg-transparent py-3 text-base text-zinc-950 outline-none placeholder:text-slate-500"
            id="identifier"
            name="identifier"
            type="text"
            inputMode="email"
            autoComplete="username"
            placeholder="Digite seu e-mail ou CPF"
            required
          />
        </div>
      </div>

      <div className="min-w-0 max-w-full">
        <label
          className="mb-1.5 block text-sm font-semibold text-zinc-800"
          htmlFor="password"
        >
          Senha
        </label>
        <div className="flex min-h-14 w-full min-w-0 max-w-full items-center overflow-hidden rounded-2xl border-2 border-zinc-200 bg-white px-3 shadow-sm transition min-[390px]:px-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/15">
          <LockIcon className="size-6 shrink-0 text-zinc-900" />
          <span className="mx-2 h-8 w-px shrink-0 bg-zinc-300 min-[390px]:mx-3" aria-hidden="true" />
          <input
            className="min-w-0 flex-1 bg-transparent py-3 text-base text-zinc-950 outline-none placeholder:text-slate-500"
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Digite sua senha"
            required
          />
          <button
            className="ml-1 grid size-11 shrink-0 cursor-pointer place-items-center rounded-xl text-zinc-700 min-[390px]:ml-2 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            type="button"
            onClick={() => setShowPassword((visible) => !visible)}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            aria-pressed={showPassword}
          >
            {showPassword ? (
              <EyeOffIcon className="size-6" />
            ) : (
              <EyeIcon className="size-6" />
            )}
          </button>
        </div>
      </div>
      <div className="min-w-0 max-w-full">
        <label
          className="mb-1.5 block text-sm font-semibold text-zinc-800"
          htmlFor="password"
        >
          Confirme a senha
        </label>
        <div className="flex min-h-14 w-full min-w-0 max-w-full items-center overflow-hidden rounded-2xl border-2 border-zinc-200 bg-white px-3 shadow-sm transition min-[390px]:px-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/15">
          <LockIcon className="size-6 shrink-0 text-zinc-900" />
          <span className="mx-2 h-8 w-px shrink-0 bg-zinc-300 min-[390px]:mx-3" aria-hidden="true" />
          <input
            className="min-w-0 flex-1 bg-transparent py-3 text-base text-zinc-950 outline-none placeholder:text-slate-500"
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Confirme sua senha"
            required
          />
          <button
            className="ml-1 grid size-11 shrink-0 cursor-pointer place-items-center rounded-xl text-zinc-700 min-[390px]:ml-2 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            type="button"
            onClick={() => setShowPassword((visible) => !visible)}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            aria-pressed={showPassword}
          >
            {showPassword ? (
              <EyeOffIcon className="size-6" />
            ) : (
              <EyeIcon className="size-6" />
            )}
          </button>
        </div>
      </div>
            
      <button
        className="mt-1 min-h-14 w-full min-w-0 max-w-full cursor-pointer rounded-2xl bg-[#ffdd00] px-4 text-lg font-extrabold text-zinc-950 shadow-[0_5px_12px_rgb(0_0_0/18%)] transition min-[390px]:px-6 hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:translate-y-0.5 active:shadow-sm"
        type="submit"
      >
        Cadastrar
      </button>

      <Link
        className="grid min-h-14 w-full min-w-0 max-w-full place-items-center rounded-2xl border-2 border-blue-600 bg-white px-4 text-center text-lg font-bold text-blue-700 transition min-[390px]:px-6 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 active:translate-y-0.5"
        href="/login"
      >
        Já tenho uma conta
      </Link>
    </form>
  );
}
