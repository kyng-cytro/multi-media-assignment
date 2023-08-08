import { defineStore } from "pinia";

export const useModalStore = defineStore("modals", () => {
  const data = ref({ LOGIN: false, NAVIGATION: false });

  const show = (type: "LOGIN" | "NAVIGATION") => {
    data.value[type] = true;
  };

  const hide = (type: "LOGIN" | "NAVIGATION") => {
    data.value[type] = false;
  };

  return { data, show, hide };
});
