<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useModalStore } from "~/stores/modalStore";

const links = computed(() => [
  { text: "Home", url: "/" },
  { text: "Types", url: "/data-types" },
]);

const modalStore = useModalStore();

const { data } = storeToRefs(modalStore);

const hideNav = () => {
  modalStore.hide("NAVIGATION");
};

const showNav = () => {
  modalStore.show("NAVIGATION");
};
</script>

<style scoped>
.menu-enter-active {
  animation: scale-up-center 0.25s ease 0s 1 normal none;
}
.menu-leave-active {
  animation: scale-down-center 0.25s ease 0s 1 normal none;
}

.shutter-enter-active {
  animation: shutter-in-top 0.25s ease 0s 1 normal none;
}
.shutter-leave-active {
  animation: shutter-out-top 0.25s ease 0s 1 normal none;
}

@keyframes shutter-in-top {
  0% {
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
}
@keyframes shutter-out-top {
  0% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
  100% {
    transform: rotateX(70deg);
    transform-origin: top;
    opacity: 0;
  }
}

@keyframes scale-up-center {
  0% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes scale-down-center {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.2);
  }
}
</style>

<template>
  <nav class="px-3 py-5 shadow-md bg-black">
    <div class="mx-auto flex max-w-7xl items-center justify-between">
      <div>
        <NuxtLink
          @click="hideNav"
          class="p-2 text-xl font-bold text-slate-800 dark:text-slate-300"
          to="/"
          >Multi Media</NuxtLink
        >
      </div>

      <!-- Mobile Nav Toggle -->
      <div class="flex items-center gap-3 md:hidden">
        <Transition name="menu" mode="out-in">
          <button
            @click="hideNav"
            class="rounded-md border border-slate-300 p-1.5 hover:bg-slate-300 focus:bg-slate-300 focus:outline-none dark:border-slate-600 dark:hover:bg-slate-600 dark:focus:bg-slate-600"
            v-if="data.NAVIGATION"
          >
            <svg
              fill="none"
              stroke="currentColor"
              class="h-7 w-7"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <button
            @click="showNav"
            class="rounded-md border border-slate-300 p-1.5 hover:bg-slate-300 focus:bg-slate-300 focus:outline-none dark:border-slate-600 dark:hover:bg-slate-600 dark:focus:bg-slate-600"
            v-else
          >
            <svg
              fill="none"
              stroke="currentColor"
              class="h-7 w-7"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </Transition>
      </div>

      <!-- Desktop Nav -->
      <div class="hidden items-center gap-8 md:flex">
        <!-- Nav Button -->
        <div class="flex items-center gap-6">
          <NavBarsNavLink
            :to="link.url"
            class="block rounded p-2 duration-300 ease-in-out hover:text-blue-500 focus:appearance-none focus:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
            v-for="link in links"
            >{{ link.text }}</NavBarsNavLink
          >
        </div>
      </div>
    </div>

    <Transition name="shutter">
      <!-- Mobile Nav -->
      <div
        class="flex flex-col items-center gap-3 pb-2 pt-3 md:hidden"
        v-show="data.NAVIGATION"
      >
        <NavBarsNavLinkMobile
          @click="hideNav"
          :to="link.url"
          class="w-full rounded border border-slate-300 p-2 duration-300 ease-in-out hover:bg-blue-500 hover:text-white focus:appearance-none focus:bg-blue-500 focus:text-white dark:border-slate-600 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
          v-for="link in links"
          >{{ link.text }}</NavBarsNavLinkMobile
        >
      </div>
    </Transition>
  </nav>
</template>
