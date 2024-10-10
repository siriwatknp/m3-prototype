import Button from "@/components/Button4/Button4";

export default function TextFieldPage() {
  return (
    <div
      className="prose max-w-[max-content] mx-auto py-5 px-2"
      style={
        {
          "--md-comp-button-height": "32px",
          "--md-comp-button-padding-inline": "12px",
          "--md-comp-button-elevated-corner": "8px",
          "--md-comp-button-elevated-color": "red",
          "--md-comp-button-elevated-background": "salmon",
        } as React.CSSProperties
      }
    >
      <h1>Text Field Example</h1>

      <h2>Base Button</h2>
      <div className="flex rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4">
        <Button>Button</Button>
      </div>

      <h2>Variants</h2>

      <div className="flex rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4">
        <Button variant="elevated">Elevated</Button>
        <Button variant="filled">Filled</Button>
        <Button variant="filledTonal">Filled Tonal</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </div>

      <h2>Secondary</h2>

      <div className="flex rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4">
        <Button color="secondary" variant="elevated">
          Elevated
        </Button>
        <Button color="secondary" variant="filled">
          Filled
        </Button>
        <Button color="secondary" variant="filledTonal">
          Filled Tonal
        </Button>
        <Button color="secondary" variant="outlined">
          Outlined
        </Button>
        <Button color="secondary" variant="text">
          Text
        </Button>
      </div>

      <h2>Tertiary</h2>

      <div className="flex rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4">
        <Button color="tertiary" variant="elevated">
          Elevated
        </Button>
        <Button color="tertiary" variant="filled">
          Filled
        </Button>
        <Button color="tertiary" variant="filledTonal">
          Filled Tonal
        </Button>
        <Button color="tertiary" variant="outlined">
          Outlined
        </Button>
        <Button color="tertiary" variant="text">
          Text
        </Button>
      </div>

      <h2>Error</h2>

      <div className="flex rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4">
        <Button color="error" variant="elevated">
          Elevated
        </Button>
        <Button color="error" variant="filled">
          Filled
        </Button>
        <Button color="error" variant="filledTonal">
          Filled Tonal
        </Button>
        <Button color="error" variant="outlined">
          Outlined
        </Button>
        <Button color="error" variant="text">
          Text
        </Button>
      </div>

      <h2>Disabled</h2>

      <div className="flex rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4">
        <Button disabled variant="elevated">
          Elevated
        </Button>

        <Button disabled variant="filled">
          Filled
        </Button>
      </div>

      <h2>Sizes</h2>

      <h2>Start/End Icon</h2>
      <div className="flex rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4">
        <Button
          variant="elevated"
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-[1em]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          }
        >
          Elevated
        </Button>
        <Button
          variant="filled"
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-[1em]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          }
        >
          Filled
        </Button>
      </div>
    </div>
  );
}
