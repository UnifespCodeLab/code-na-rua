"use client";

import { useMemo, useState } from "react";
import {
  LocateIcon,
  MapPinIcon,
} from "@/components/icons/navigation-icons";

type Coordinates = {
  latitude: number;
  longitude: number;
};

const DEFAULT_LOCATION: Coordinates = {
  latitude: -23.5614,
  longitude: -46.6565,
};

export default function OpenStreetMap() {
  const [coordinates, setCoordinates] = useState(DEFAULT_LOCATION);
  const [locationStatus, setLocationStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const mapUrl = useMemo(() => {
    const { latitude, longitude } = coordinates;
    const offset = 0.008;
    const bounds = [
      longitude - offset,
      latitude - offset,
      longitude + offset,
      latitude + offset,
    ].join(",");
    const params = new URLSearchParams({
      bbox: bounds,
      layer: "mapnik",
      marker: `${latitude},${longitude}`,
    });

    return `https://www.openstreetmap.org/export/embed.html?${params.toString()}`;
  }, [coordinates]);

  function requestCurrentLocation() {
    if (!("geolocation" in navigator)) {
      setLocationStatus("error");
      return;
    }

    setLocationStatus("loading");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoordinates({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        setLocationStatus("success");
      },
      () => setLocationStatus("error"),
      { enableHighAccuracy: true, timeout: 10_000, maximumAge: 60_000 },
    );
  }

  return (
    <section aria-labelledby="location-title">
      <h2 id="location-title" className="text-xl font-extrabold">
        Localização
      </h2>
      <p className="mt-1 text-sm text-zinc-600">
        Precisamos da sua localização para registrar a ocorrência.
      </p>

      <div className="relative mt-3 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm">
        <iframe
          className="h-56 w-full border-0"
          src={mapUrl}
          title="Mapa da localização da ocorrência"
          loading="lazy"
        />

        <div className="absolute right-3 bottom-3 left-3 flex items-center gap-2 rounded-xl bg-white/95 p-3 shadow-lg backdrop-blur-sm">
          <MapPinIcon className="size-6 shrink-0 text-blue-700" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-zinc-950">
              {locationStatus === "success"
                ? "Sua localização atual"
                : "Av. Paulista, 1578"}
            </p>
            <p className="truncate text-xs text-zinc-600">
              {coordinates.latitude.toFixed(5)}, {coordinates.longitude.toFixed(5)}
            </p>
          </div>
          <button
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-xl border border-zinc-200 bg-white text-zinc-800 shadow-sm hover:bg-yellow-50 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-wait disabled:opacity-60"
            type="button"
            onClick={requestCurrentLocation}
            disabled={locationStatus === "loading"}
            aria-label="Usar minha localização atual"
          >
            <LocateIcon className="size-6" />
          </button>
        </div>
      </div>

      <div className="mt-2 flex items-start justify-between gap-3 text-xs">
        <p className={locationStatus === "error" ? "text-red-700" : "text-zinc-600"}>
          {locationStatus === "loading" && "Obtendo sua localização…"}
          {locationStatus === "success" && "Localização atualizada."}
          {locationStatus === "error" &&
            "Não foi possível acessar sua localização. Verifique a permissão do navegador."}
        </p>
        <a
          className="ml-auto shrink-0 font-semibold text-blue-700 underline"
          href={`https://www.openstreetmap.org/?mlat=${coordinates.latitude}&mlon=${coordinates.longitude}#map=16/${coordinates.latitude}/${coordinates.longitude}`}
          target="_blank"
          rel="noreferrer"
        >
          © OpenStreetMap
        </a>
      </div>
    </section>
  );
}
