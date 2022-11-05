import PocketBase from "pocketbase";

export let getPocketBase = (cookie?: string) => {
  let pocketbase = new PocketBase("http://127.0.0.1:8090");

  if (cookie) {
    pocketbase.authStore.loadFromCookie(cookie);
  }

  return pocketbase;
};
