export function encode(input: string): string {
  return btoa(input);
}

export function decode(encodedInput: string): string {
  return atob(encodedInput);
}

export async function convertToURL(file: File) {
  return new Promise((resolve: (r: string) => any, reject) => {
    const reader = new FileReader();

    reader.onload = function (event: any) {
      try {
        const base64String = event.target.result as string;
        resolve(base64String);
      } catch (e) {
        reject(e);
      }
    };

    try {
      reader.readAsDataURL(file);
    } catch (error) {
      reject(error);
    }
  });
}

export enum Config {
  STORE_NAME = "x-session-store",
}
