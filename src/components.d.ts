/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LeoCheckBox {
        /**
          * The label for the LeoCheckBox
         */
        "label": string;
        /**
          * The name for the LeoCheckBox
         */
        "name": string;
        /**
          * Checks or unchecks the check input based on the parameter passed
          * @param
         */
        "setChecked": (checked: boolean) => Promise<void>;
    }
    interface LeoLoadingIndicator {
        /**
          * The color of the spinner.
          * @type {('white' | 'primary' | 'secondary')}
         */
        "color": 'white' | 'primary' | 'secondary';
    }
    interface LeoSubmitButton {
        /**
          * The button color
         */
        "color": 'primary' | 'secondary';
        /**
          * Show or hide the loader based on the parameter passed
          * @param show
         */
        "showLoader": (show?: boolean) => Promise<void>;
        /**
          * The button text
         */
        "text": string;
    }
}
declare global {
    interface HTMLLeoCheckBoxElement extends Components.LeoCheckBox, HTMLStencilElement {
    }
    var HTMLLeoCheckBoxElement: {
        prototype: HTMLLeoCheckBoxElement;
        new (): HTMLLeoCheckBoxElement;
    };
    interface HTMLLeoLoadingIndicatorElement extends Components.LeoLoadingIndicator, HTMLStencilElement {
    }
    var HTMLLeoLoadingIndicatorElement: {
        prototype: HTMLLeoLoadingIndicatorElement;
        new (): HTMLLeoLoadingIndicatorElement;
    };
    interface HTMLLeoSubmitButtonElement extends Components.LeoSubmitButton, HTMLStencilElement {
    }
    var HTMLLeoSubmitButtonElement: {
        prototype: HTMLLeoSubmitButtonElement;
        new (): HTMLLeoSubmitButtonElement;
    };
    interface HTMLElementTagNameMap {
        "leo-check-box": HTMLLeoCheckBoxElement;
        "leo-loading-indicator": HTMLLeoLoadingIndicatorElement;
        "leo-submit-button": HTMLLeoSubmitButtonElement;
    }
}
declare namespace LocalJSX {
    interface LeoCheckBox {
        /**
          * The label for the LeoCheckBox
         */
        "label"?: string;
        /**
          * The name for the LeoCheckBox
         */
        "name"?: string;
        /**
          * Emitted when the check changes
         */
        "onLeoChange"?: (event: CustomEvent<boolean>) => void;
    }
    interface LeoLoadingIndicator {
        /**
          * The color of the spinner.
          * @type {('white' | 'primary' | 'secondary')}
         */
        "color"?: 'white' | 'primary' | 'secondary';
    }
    interface LeoSubmitButton {
        /**
          * The button color
         */
        "color"?: 'primary' | 'secondary';
        /**
          * Emitted when the button goes into loading mode
         */
        "onLeoClick"?: (event: CustomEvent<void>) => void;
        /**
          * The button text
         */
        "text"?: string;
    }
    interface IntrinsicElements {
        "leo-check-box": LeoCheckBox;
        "leo-loading-indicator": LeoLoadingIndicator;
        "leo-submit-button": LeoSubmitButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "leo-check-box": LocalJSX.LeoCheckBox & JSXBase.HTMLAttributes<HTMLLeoCheckBoxElement>;
            "leo-loading-indicator": LocalJSX.LeoLoadingIndicator & JSXBase.HTMLAttributes<HTMLLeoLoadingIndicatorElement>;
            "leo-submit-button": LocalJSX.LeoSubmitButton & JSXBase.HTMLAttributes<HTMLLeoSubmitButtonElement>;
        }
    }
}
