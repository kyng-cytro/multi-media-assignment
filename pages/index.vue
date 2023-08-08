<script setup lang="ts">
import { Splide, SplideSlide, Options } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const options: Options = ref({
  rewind: true,
  pagination: false,
  autoplay: true,
});
</script>
<template>
  <div>
    <div class="h-full flex items-center justify-center">
      <div
        class="max-w-7xl grid w-full grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-6 h-full items-center"
      >
        <div class="flex flex-col gap-8 mx-auto">
          <p class="max-w-sm font-bold text-3xl leading-normal">
            This Project shows the different media data types.
          </p>
          <NuxtLink
            class="max-w-max rounded-md border border-blue-400 px-5 py-2.5 transition-all duration-500 ease-in-out hover:bg-blue-500 hover:text-slate-50 focus:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:text-slate-100"
            to="/data-types"
          >
            <span>View Data Types</span>
          </NuxtLink>
        </div>
        <div class="w-full mx-auto order-first md:order-last">
          <Splide :options="options">
            <SplideSlide>
              <NuxtImg
                src="/images/banner1.jpeg"
                class="w-full h-96"
                placeholder
              />
            </SplideSlide>
            <SplideSlide>
              <NuxtImg
                src="/images/banner2.jpeg"
                class="w-full h-96"
                placeholder
              />
            </SplideSlide>
            <SplideSlide>
              <NuxtImg
                src="/images/banner3.jpeg"
                class="w-full h-96"
                placeholder
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  </div>
</template>
