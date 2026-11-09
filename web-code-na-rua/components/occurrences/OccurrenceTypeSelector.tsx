import type { ReactNode } from "react";
import {
  MessageCircleIcon,
  PlusIcon,
  TriangleAlertIcon,
  WrenchIcon,
} from "@/components/icons/navigation-icons";

export type OccurrenceType =
  | "mechanical-breakdown"
  | "accident"
  | "other";

type TypeOption = {
  id: OccurrenceType | "future-1" | "future-2" | "future-3";
  label: string;
  icon: ReactNode;
  disabled?: boolean;
};

const OPTIONS: TypeOption[] = [
  {
    id: "mechanical-breakdown",
    label: "Pane mecânica",
    icon: <WrenchIcon className="size-8" />,
  },
  {
    id: "accident",
    label: "Acidente",
    icon: <TriangleAlertIcon className="size-8" />,
  },
  {
    id: "other",
    label: "Outro",
    icon: <MessageCircleIcon className="size-8" />,
  },
  {
    id: "future-1",
    label: "A definir",
    icon: <PlusIcon className="size-8" />,
    disabled: true,
  },
  {
    id: "future-2",
    label: "A definir",
    icon: <PlusIcon className="size-8" />,
    disabled: true,
  },
  {
    id: "future-3",
    label: "A definir",
    icon: <PlusIcon className="size-8" />,
    disabled: true,
  },
];

function getButtonClass(selected: boolean, disabled: boolean) {
  const stateClass = selected
    ? "border-blue-600 bg-blue-50 text-blue-800 shadow-md"
    : "border-zinc-200 bg-white text-zinc-700 shadow-sm";
  const interactionClass = disabled
    ? "cursor-not-allowed opacity-45"
    : "cursor-pointer hover:border-yellow-400 hover:bg-yellow-50 active:translate-y-0.5";

  return `relative flex min-h-28 flex-col items-center justify-center gap-2 rounded-2xl border-2 px-2 py-3 text-center transition ${stateClass} ${interactionClass} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`;
}

export default function OccurrenceTypeSelector({
  value,
  onChange,
}: {
  value: OccurrenceType;
  onChange: (value: OccurrenceType) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-xl font-extrabold">Tipo de ocorrência</legend>
      <div className="grid grid-cols-3 gap-2">
        {OPTIONS.map((option) => {
          const selected = option.id === value;
          const disabled = Boolean(option.disabled);

          return (
            <button
              key={option.id}
              className={getButtonClass(selected, disabled)}
              type="button"
              disabled={disabled}
              onClick={() => {
                if (!disabled) {
                  onChange(option.id as OccurrenceType);
                }
              }}
              aria-pressed={selected}
            >
              <span
                className={
                  "grid size-12 place-items-center rounded-full " +
                  (selected ? "bg-blue-100" : "bg-zinc-100")
                }
              >
                {option.icon}
              </span>
              <span className="text-xs leading-tight font-bold">
                {option.label}
              </span>
              {selected && (
                <span className="absolute top-2 right-2 grid size-5 place-items-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
