"use client";

import { FormEvent, useState } from "react";
import { CameraIcon } from "@/components/icons/navigation-icons";
import OccurrenceTypeSelector, {
  type OccurrenceType,
} from "@/components/occurrences/OccurrenceTypeSelector";
import OpenStreetMap from "@/components/occurrences/OpenStreetMap";

type ActiveTab = "register" | "history";

export default function OccurrenceForm() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("register");
  const [type, setType] = useState<OccurrenceType>("mechanical-breakdown");
  const [description, setDescription] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight">Ocorrências</h1>

      <div
        className="relative isolate mt-5 grid grid-cols-2 rounded-full bg-zinc-200 p-1"
        role="tablist"
        aria-label="Seções de ocorrências"
      >
        <span
          className={
            "pointer-events-none absolute top-1 bottom-1 left-1 z-0 w-[calc(50%_-_4px)] rounded-full bg-[#ffdd00] shadow-sm transition-transform duration-300 ease-out motion-reduce:transition-none " +
            (activeTab === "history" ? "translate-x-full" : "translate-x-0")
          }
          aria-hidden="true"
        />
        <button
          className={
            "relative z-1 min-h-12 cursor-pointer rounded-full px-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 " +
            (activeTab === "register"
              ? "text-zinc-950"
              : "text-zinc-600 hover:text-zinc-950")
          }
          type="button"
          role="tab"
          aria-selected={activeTab === "register"}
          onClick={() => setActiveTab("register")}
        >
          Registrar
        </button>
        <button
          className={
            "relative z-1 min-h-12 cursor-pointer rounded-full px-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 " +
            (activeTab === "history"
              ? "text-zinc-950"
              : "text-zinc-600 hover:text-zinc-950")
          }
          type="button"
          role="tab"
          aria-selected={activeTab === "history"}
          onClick={() => setActiveTab("history")}
        >
          Minhas ocorrências
        </button>
      </div>

      {activeTab === "register" ? (
        <form className="mt-6 grid gap-6" onSubmit={handleSubmit}>
          <OccurrenceTypeSelector value={type} onChange={setType} />

          <div>
            <label
              className="mb-2 block text-xl font-extrabold"
              htmlFor="occurrence-description"
            >
              Descrição <span className="text-sm font-normal text-zinc-600">(opcional)</span>
            </label>
            <div className="rounded-2xl border-2 border-zinc-200 bg-white p-3 shadow-sm focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/15">
              <textarea
                className="min-h-28 w-full resize-y bg-transparent text-base outline-none placeholder:text-zinc-500"
                id="occurrence-description"
                name="description"
                maxLength={500}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Descreva brevemente o que aconteceu…"
              />
              <p className="text-right text-xs text-zinc-500">
                {description.length}/500
              </p>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xl font-extrabold">Adicionar foto</p>
            <input
              className="sr-only"
              id="occurrence-photo"
              name="photo"
              type="file"
              accept="image/*"
              capture="environment"
              onChange={(event) =>
                setPhotoName(event.target.files?.[0]?.name ?? "")
              }
            />
            <label
              className="flex min-h-36 cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-zinc-300 bg-white px-4 text-center text-zinc-700 transition hover:border-yellow-400 hover:bg-yellow-50 focus-within:border-blue-600"
              htmlFor="occurrence-photo"
            >
              <CameraIcon className="size-10" />
              <span className="font-bold">
                {photoName || "Adicionar foto"}
              </span>
              <span className="text-sm text-zinc-500">
                Tire uma foto ou selecione da sua galeria
              </span>
            </label>
          </div>

          <OpenStreetMap />

          {submitted && (
            <p
              className="rounded-xl border border-blue-200 bg-blue-50 p-3 text-sm font-semibold text-blue-900"
              role="status"
            >
              Protótipo preenchido. O envio para a API será conectado posteriormente.
            </p>
          )}

          <button
            className="min-h-14 cursor-pointer rounded-2xl bg-[#ffdd00] px-6 text-lg font-extrabold text-zinc-950 shadow-[0_5px_12px_rgb(0_0_0/18%)] transition hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:translate-y-0.5 active:shadow-sm"
            type="submit"
          >
            Registrar ocorrência
          </button>
        </form>
      ) : (
        <section
          className="mt-6 rounded-2xl border-2 border-dashed border-zinc-300 bg-white p-8 text-center"
          role="tabpanel"
        >
          <h2 className="text-xl font-extrabold">Minhas ocorrências</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Suas ocorrências registradas aparecerão aqui.
          </p>
        </section>
      )}
    </div>
  );
}
