<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* CSS to hide nav bar */
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}

.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
/* End of hide nav bar */
</style>

<template>
  <div
    class="flex h-full h-screen min-h-screen flex-col bg-[#01080E] text-white"
  >
    <NavBars />

    <div class="flex-1">
      <NuxtPage style="height: 100%" />
    </div>
  </div>
</template>
