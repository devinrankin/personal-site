import React, { ReactNode } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { themes } from "@/lib/data";
import { useTheme } from "next-themes";

type Props = {};

export default function Themes({}: Props) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="border-typography border-2 rounded-2xl p-2 text-typography inline-block">
      Pick a theme!
      <div className="space-x-4">
        <ThemeTooltip title={themes[0].title}>
          <div
            className="rounded-full bg-[#EF6A80] h-6 w-6"
            onClick={() => {
              setTheme(themes[0].title);
            }}
          />
        </ThemeTooltip>
        <ThemeTooltip title={themes[1].title}>
          <div
            className="rounded-full bg-[#436FC7] h-6 w-6"
            onClick={() => {
              setTheme(themes[1].title);
            }}
          />
        </ThemeTooltip>
        <ThemeTooltip title={themes[2].title}>
          <div
            className="rounded-full bg-[#558B68] h-6 w-6"
            onClick={() => {
              setTheme(themes[2].title);
            }}
          />
        </ThemeTooltip>
        <ThemeTooltip title={themes[3].title}>
          <div
            className="rounded-full bg-[#96705B] h-6 w-6"
            onClick={() => {
              setTheme(themes[3].title);
            }}
          />
        </ThemeTooltip>
      </div>
      <p className="text-sm opacity-90">
        Note: I&apos;ll remember your chosen theme for the next time you return!
      </p>
    </div>
  );
}

function ThemeTooltip({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="bg-secondary px-2 text-typography rounded-2xl capitalize m-2">
            {title}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
