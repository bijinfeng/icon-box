import { Card } from "@iconbox/ui/components/card";

export const IconCard = () => {
  return (
    <Card className="@container/card flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-aarrow-down-icon lucide-a-arrow-down"
      >
        <path d="M3.5 13h6" />
        <path d="m2 16 4.5-9 4.5 9" />
        <path d="M18 7v9" />
        <path d="m14 12 4 4 4-4" />
      </svg>
    </Card>
  );
};
