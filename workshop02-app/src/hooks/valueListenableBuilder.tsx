import React, { Component, ReactNode, useRef } from "react";
import { useValueNotifier, ValueNotifier } from "./valuenotifier";

type Props = {
  valueListenable: ValueNotifier;
  builder: (value: any) => ReactNode;
};

type State = {
  value: any;
};

/**
 * A React component that listens to changes in a `valueListenable` object and renders
 * the result of the `builder` function with the current value.
 *
 * @param {ValueNotifier} valueListenable - The valueListenable object that the component listens to for changes.
 * @param {Function} builder - A builder function that takes the current value and returns the ReactNode to render.
 */
class ValueListenableBuilder extends Component<Props, State> {

  listener: () => void;

  constructor(props: Props) {
    super(props);

    // Initialize the state with the initial value from valueListenable
    this.state = {
      value: props.valueListenable.get(),
    };

    // Define the listener function that updates the state when called
    this.listener = () => {
      this.setState({ value: this.props.valueListenable.get() });
    };
  }

  componentDidMount() {
    /* Add the listener to valueListenable when the component is mounted */
    this.props.valueListenable.addListener(this.listener);
  }

  componentWillUnmount() {
    /* Remove the listener from valueListenable when the component is unmounted */
    this.props.valueListenable.removeListener(this.listener);
  }

  render() {
    const { builder } = this.props;
    const { value } = this.state;
    // Render the result of the builder function with the current value
    return <>{builder(value)}</>;
  }
}

export default ValueListenableBuilder;
