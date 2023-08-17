import { useSessionStorage } from "@vueuse/core";
import { Client, Storage } from "appwrite";

const NOW = Date.now();
const defaultStore = () => ({
  name: "",
  previewKey: "" 
})

export interface IFileImage {
  url: string; 
  file: File, 
  idx: number 
}

export function getFileIdsFromPreviewKey(previewKey: string) {
  const keyString = previewKey.split('-');
  if (keyString.length < 3) return

  const [owner, uid, count] = keyString;
  return new Array(+count + 1).fill("").map((m, idx) => {
    return `${owner}-${uid}-${idx}`;
  })
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

export function generateKey(index: number): string {
  const store = useAppSession()
  return `${store.value.name}-${NOW}-${index}`;
}

export function useAppSession() {
  return useSessionStorage(
    "mshare-session", 
    defaultStore()
  )
}

export function appwriteStorage() {
  const config = useRuntimeConfig();
  const client = new Client();
  const storage = new Storage(client);
  client
      .setEndpoint(config.public.appwriteAPIEndpoint)
      .setProject(config.public.appwriteProjectId);
  return storage
}
