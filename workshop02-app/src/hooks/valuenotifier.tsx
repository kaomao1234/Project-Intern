import { createRef, useMemo, useRef } from "react";

class ValueNotifier {
    private _value: any;
    listeners: Array<() => void>;
    get: () => any;
    /**
     * Constructor for ValueNotifier class.
     * Initializes the value and listeners array.
     * Provides a getter function to retrieve the current value.
     *
     * @param value - Initial value for the notifier.
     */
    constructor(value: any) {
        this._value = value;
        this.listeners = [];
        this.get = () => this._value;
    }

    /**
     * Adds a listener to the notifier.
     *
     * @param listener - Callback function to be invoked when the value changes.
     */
    addListener(listener: () => void) {
        this.listeners.push(listener);
    }

    /**
     * Removes a listener from the notifier.
     *
     * @param listener - Callback function to be removed from the listeners.
     */
    removeListener(listener: () => void) {
        const index = this.listeners.indexOf(listener);
        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    }

    /**
     * Notifies all listeners by invoking their callback functions.
     * This is called whenever the value changes.
     */
    notifyListener() {
        this.listeners.forEach((item) => item());
    }

    /**
     * Sets the new value for the notifier.
     * Invokes the notifyListener method to notify all listeners.
     *
     * @param value - New value to be set for the notifier.
     */
    set(value: any) {
        this._value = value;
        this.notifyListener();
    }
}
/**
 * Creates a valueNotifier object with the provided initial value and returns it.
 *
 * @param {any} value - The initial value for the valueNotifier.
 * @returns {ValueNotifier} valueNotifier - The valueNotifier object with the provided initial value.
 */
function useValueNotifier(value: any): ValueNotifier {
    // Create a valueNotifier object with the provided initial value using useRef
    const valueNotifier = useRef(new ValueNotifier(value)).current
    return valueNotifier;
}
export { useValueNotifier, ValueNotifier };
