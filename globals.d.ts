import * as ReactDOM from "react-dom";

export {};

declare global {
  interface Window {
    initService: () => void;
  }
}

declare module "react-dom" {
  function experimental_useFormState<S, P>(
    action: (state: S, payload: P) => Promise<S>,
    initialState?: S,
    url?: string,
  ): initialState extends undefined
    ? [S | undefined, (payload: P) => Promise<void>]
    : [S, (payload: P) => Promise<void>];
}
