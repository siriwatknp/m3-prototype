import { useEffect } from "react";
import { useControls, folder } from "leva";

export function useLevaOverrides<T extends Record<string, any>>(
  defaultValues: T,
  options: {
    dataAttribute: string;
    folders?: Record<string, string[]>;
  }
) {
  const controls = Object.entries(options.folders || {}).reduce(
    (acc, [folderName, keys]) => {
      const folderControls = keys.reduce((folderAcc, key) => {
        if (key in defaultValues) {
          folderAcc[key] = { value: defaultValues[key] };
        }
        return folderAcc;
      }, {} as Record<string, any>);

      if (Object.keys(folderControls).length > 0) {
        acc[folderName] = folder(folderControls);
      }

      return acc;
    },
    {} as Record<string, any>
  );

  // Add remaining controls that aren't in any folder
  const remainingControls = Object.entries(defaultValues).reduce(
    (acc, [key, value]) => {
      if (
        !Object.values(options.folders || {})
          .flat()
          .includes(key)
      ) {
        acc[key] = { value };
      }
      return acc;
    },
    {} as Record<string, any>
  );

  const values = useControls({
    ...remainingControls,
    ...controls,
  });

  useEffect(() => {
    const elements = document.querySelectorAll(
      `[${options.dataAttribute}]`
    ) as NodeListOf<HTMLElement>;

    elements.forEach((elm) => {
      Object.entries(values).forEach(([key, value]) => {
        if (value === defaultValues[key]) {
          elm.style.removeProperty(key);
        } else {
          elm.style.setProperty(
            key,
            typeof value === "number" ? `${value}px` : value
          );
        }
      });
    });
  }, [values, defaultValues, options.dataAttribute]);

  return values;
}
