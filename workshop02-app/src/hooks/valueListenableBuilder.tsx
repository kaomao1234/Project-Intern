import React, { ReactNode, useEffect, useState, useCallback } from "react";
import { ValueNotifier } from "./valuenotifier";

type Props = {
  valueListenable: ValueNotifier;
  builder: (value: any) => ReactNode;
};

/**
 * A React component that listens to changes in a `valueListenable` object and renders
 * the result of the `builder` function with the current value.
 *
 * @param {ValueNotifier} valueListenable - The valueListenable object that the component listens to for changes.
 * @param {Function} builder - A builder function that takes the current value and returns the ReactNode to render.
 * @returns {ReactNode} - The rendered output based on the builder function and current value.
 */
const ValueListenableBuilder = ({ valueListenable, builder }: Props): ReactNode => {
  const [value, setValue] = useState(valueListenable.get());

  useEffect(() => {
    const listener = () => {
      setValue(valueListenable.get());
    };
    valueListenable.addListener(listener);

    return () => {
      valueListenable.removeListener(listener);
    };
  }, [value, valueListenable]);

  // Render the result of the builder function with the current value

  return <>{builder(value)}</>;
};

export default ValueListenableBuilder;
