"use client";

import type { FormEvent, InputHTMLAttributes, ReactNode } from "react";
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "@/components/icons/navigation-icons";

type SettingsFieldProps = {
  icon: ReactNode;
  label: string;
  highlighted?: boolean;
  readOnly?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "readOnly">;

function SettingsField({
  icon,
  label,
  highlighted = false,
  readOnly = false,
  ...inputProps
}: SettingsFieldProps) {
  return (
    <div className="min-w-0 max-w-full">
      <label
        className="mb-1.5 block text-sm font-semibold text-zinc-800"
        htmlFor={inputProps.id}
      >
        {label}
      </label>
      <div
        className={
          "flex min-h-14 w-full min-w-0 max-w-full items-center overflow-hidden rounded-2xl border-2 px-3 shadow-sm transition min-[390px]:px-4 " +
          (readOnly
            ? "border-zinc-200 bg-zinc-100 text-zinc-500"
            : highlighted
              ? "border-yellow-300 bg-yellow-100/70 focus-within:border-yellow-500 focus-within:ring-2 focus-within:ring-yellow-500/20"
            : "border-zinc-200 bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/15")
        }
      >
        <span className="shrink-0 text-zinc-800">{icon}</span>
        <span
          className="mx-2 h-8 w-px shrink-0 bg-zinc-300 min-[390px]:mx-3"
          aria-hidden="true"
        />
        <input
          {...inputProps}
          className="min-w-0 flex-1 bg-transparent py-3 text-base text-zinc-950 outline-none placeholder:text-slate-500 read-only:cursor-not-allowed read-only:text-zinc-500"
          readOnly={readOnly}
        />
      </div>
    </div>
  );
}

export default function ConfiguracoesForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      className="mt-5 grid w-full min-w-0 max-w-full gap-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-extrabold tracking-tight">Configurações</h1>

      <SettingsField
        icon={<MailIcon className="size-6" />}
        label="E-mail"
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        value="motoboy@motolab.com.br"
        readOnly
        aria-describedby="email-help"
      />
      <p id="email-help" className="-mt-2 text-xs text-zinc-500">
        O e-mail da conta não pode ser alterado.
      </p>

      <SettingsField
        icon={<UserIcon className="size-6" />}
        label="Nome completo"
        id="full-name"
        name="fullName"
        type="text"
        autoComplete="name"
        placeholder="Digite seu nome completo"
        required
      />

      <SettingsField
        icon={<MapPinIcon className="size-6" />}
        label="Endereço"
        id="address"
        name="address"
        type="text"
        autoComplete="street-address"
        placeholder="Digite seu endereço"
        required
      />

      <fieldset className="grid gap-4 rounded-3xl border-2 border-yellow-300 bg-yellow-50 p-4 shadow-sm">
        <legend className="px-2 text-base font-extrabold text-zinc-900">
          Contato de emergência
        </legend>

        <SettingsField
          icon={<UserIcon className="size-6" />}
          label="Nome da pessoa"
          id="emergency-contact-name"
          name="emergencyContactName"
          type="text"
          placeholder="Digite o nome do contato"
          highlighted
          required
        />

        <SettingsField
          icon={<PhoneIcon className="size-6" />}
          label="Telefone"
          id="emergency-phone"
          name="emergencyPhone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(12) 99999-9999"
          highlighted
          required
        />

        <p className="text-xs leading-relaxed font-medium text-zinc-700">
          <span className="font-extrabold text-yellow-700" aria-hidden="true">
            *
          </span>{" "}
          campos necessários para avisar em caso de emergência
        </p>
      </fieldset>

      <button
        className="mt-1 min-h-14 w-full min-w-0 max-w-full cursor-pointer rounded-2xl bg-[#ffdd00] px-4 text-lg font-extrabold text-zinc-950 shadow-[0_5px_12px_rgb(0_0_0/18%)] transition min-[390px]:px-6 hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:translate-y-0.5 active:shadow-sm"
        type="submit"
      >
        Salvar alterações
      </button>
    </form>
  );
}
