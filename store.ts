import { createGlobalState, useSessionStorage } from "@vueuse/core";

export const useGlobalState = createGlobalState(() => {
  const email = useSessionStorage("x-session-email", "");

  function encode(input: string): string {
    return btoa(input);
  }

  function decode(encodedInput: string): string {
    return atob(encodedInput);
  }

  return {
    email,
    code: {
      encode,
      decode,
    },
  };
});
