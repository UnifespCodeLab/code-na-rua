import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const iconProps: IconProps = {
  "aria-hidden": true,
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  viewBox: "0 0 24 24",
};

export function HouseIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M11.05 2.93a1 1 0 0 1 1.9 0l2.02 4.1a1 1 0 0 0 .75.54l4.52.66a1 1 0 0 1 .56 1.7l-3.27 3.19a1 1 0 0 0-.29.88l.77 4.5a1 1 0 0 1-1.45 1.06l-4.04-2.13a1 1 0 0 0-.94 0l-4.04 2.13a1 1 0 0 1-1.45-1.06l.77-4.5a1 1 0 0 0-.29-.88L3.2 9.93a1 1 0 0 1 .56-1.7l4.52-.66a1 1 0 0 0 .75-.54Z" />
    </svg>
  );
}

export function SirenIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M7 18v-6a5 5 0 0 1 10 0v6" />
      <path d="M5 21h14" />
      <path d="M12 2v2M4.93 4.93l1.42 1.42M2 12h2M20 12h2M17.66 6.34l1.41-1.41" />
      <path d="M12 12v6" />
    </svg>
  );
}

export function BadgePercentIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.77 4 4 0 0 1 0 6.76 4 4 0 0 1-4.78 4.77 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m15 9-6 6M9 9h.01M15 15h.01" />
    </svg>
  );
}

export function TriangleAlertIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M19 21a7 7 0 0 0-14 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function LogOutIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m16 17 5-5-5-5" />
      <path d="M21 12H9" />
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <rect width="18" height="11" x="3" y="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <path d="M12 15v3" />
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M2.06 12.35a1 1 0 0 1 0-.7C3.7 7.6 7.64 5 12 5c4.36 0 8.3 2.6 9.94 6.65a1 1 0 0 1 0 .7C20.3 16.4 16.36 19 12 19c-4.36 0-8.3-2.6-9.94-6.65Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function EyeOffIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m2 2 20 20" />
      <path d="M6.71 6.71C4.93 7.9 3.5 9.6 2.66 11.65a1 1 0 0 0 0 .7C4.3 16.4 8.24 19 12.6 19c1.5 0 2.94-.31 4.25-.88" />
      <path d="M10.73 5.08C11.15 5.03 11.57 5 12 5c4.36 0 8.3 2.6 9.94 6.65a1 1 0 0 1 0 .7 11.1 11.1 0 0 1-1.67 2.74" />
      <path d="M14.12 14.12A3 3 0 0 1 9.88 9.88" />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94Z" />
    </svg>
  );
}

export function MessageCircleIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 12h14M12 5v14" />
    </svg>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function LocateIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  );
}
