import React from "react";
import FormControl from "@/components/FormControl";
import FormLabel from "@/components/FormLabel";
import Input from "@/components/Input";
import FilledInput from "@/components/FilledInput";
import OutlinedInput from "@/components/OutlinedInput";
import TextField from "@/components/TextField";
import FormHelperText from "@/components/FormHelperText";
import InputAdornment from "@/components/InputAdornment";

export default function TextFieldPage() {
  return (
    <div className="prose container mx-auto py-5 px-2">
      <h1>Text Field Example</h1>
      <div className="flex flex-col space-y-4">
        <TextField label="Label" helperText="Helper Text" />
        <TextField
          variant="filled"
          label="Label"
          helperText={
            <React.Fragment>
              <span>Helper Text</span>
              <span>5 / 20</span>
            </React.Fragment>
          }
        />
        <TextField variant="outlined" label="Label" helperText="Helper Text" />

        <TextField
          error
          variant="filled"
          label="Label"
          helperText={
            <React.Fragment>
              <span>Helper Text</span>
              <span>5 / 20</span>
            </React.Fragment>
          }
        />
        <TextField
          error
          variant="outlined"
          label="Label"
          helperText="Helper Text"
        />
        <FormControl className="Mui-error">
          <div className="flex">
            <FormLabel>Label</FormLabel>
          </div>
          <Input
            placeholder="Placeholder"
            endAdornment={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="1.5rem"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            }
          />
          <FormHelperText>Helper Text</FormHelperText>
        </FormControl>

        <TextField
          disabled
          value="Hello World"
          variant="filled"
          label="Label"
          helperText={
            <React.Fragment>
              <span>Helper Text</span>
              <span>5 / 20</span>
            </React.Fragment>
          }
          startAdornment="$"
        />
        <TextField
          disabled
          variant="outlined"
          label="Label"
          helperText="Helper Text"
          endAdornment="0.00"
        />

        <FormControl>
          <div className="flex items-end">
            <FormLabel>Label</FormLabel>
            <div className="ml-auto inline-flex rounded-full bg-primary-container text-on-primary-container text-label-small px-1.5 py-0.5">
              New
            </div>
          </div>
          <Input placeholder="Placeholder" />
          <FormHelperText>Helper Text</FormHelperText>
        </FormControl>

        <FormControl>
          <FilledInput
            label="Label"
            placeholder="Placeholder"
            startAdornment={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="1em"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            }
            endAdornment={
              <InputAdornment>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width="1em"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </InputAdornment>
            }
          />
          <FormHelperText>
            <React.Fragment>
              <span>Helper Text</span>
              <span>5 / 20</span>
            </React.Fragment>
          </FormHelperText>
        </FormControl>

        <OutlinedInput label="Label" placeholder="Placeholder" />

        <div className="grid grid-cols-[auto_1fr] gap-1 items-baseline">
          <FormLabel>Name:</FormLabel>
          <Input
            placeholder="Placeholder"
            startAdornment={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="1em"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            }
            endAdornment={
              <InputAdornment position="end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width="1em"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </InputAdornment>
            }
            className="[--start-adornment-size:16px]"
          />

          <FormLabel>Address:</FormLabel>
          <Input placeholder="Placeholder" />

          <FormLabel>Nationality:</FormLabel>
          <Input placeholder="Placeholder" />
        </div>
      </div>
    </div>
  );
}
