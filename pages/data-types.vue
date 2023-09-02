<script setup lang="ts">
const tab = ref(0);

const categories = [
  { id: 0, name: "Text" },
  { id: 1, name: "Image" },
  { id: 2, name: "Video" },
  { id: 3, name: "Audio" },
];
</script>
<style scoped>
#header {
  view-transition-name: header;
}
#button {
  view-transition-name: button;
}
</style>
<template>
  <div class="h-full flex items-center justify-center px-3">
    <div class="max-w-7xl w-full flex flex-col gap-10 items-center">
      <div class="flex flex-col gap-10 items-center">
        <p class="font-bold text-3xl" @click="tab = tab + 1" id="header">
          Categories
        </p>
        <div class="flex gap-3 md:gap-6" id="button">
          <button
            :key="category.id"
            @click="tab = category.id"
            class="rounded-full px-6 py-2 text-sm font-semibold shadow-md hover:bg-blue-500 focus:bg-blue-500"
            :class="{
              'bg-blue-500': tab === category.id,
              'bg-slate-800': tab !== category.id,
            }"
            v-for="category in categories"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
      <Transition name="slide-up" mode="out-in">
        <div class="w-full flex flex-col items-center gap-4" v-if="tab === 0">
          <p class="font-light text-xl">Sample Text</p>
          <div
            class="w-full md:w-[70%] rounded-lg h-96 bg-slate-800 p-4 overflow-y-scroll hide-scroll-bar"
          >
            <p class="text-2xl font-bold mb-4">About This Project</p>
            <p class="text-light text-lg text-justify">
              <b>Built</b> as an assignment for <u><i>ICS 424 Multi-Media</i></u
              >, this project exemplifies the culmination of theoretical
              knowledge and practical skills gained throughout the course. The
              assignment challenged students to <b>delve</b> into the realm of
              multimedia technology, applying principles learned in class to a
              real-world scenario. Participants were tasked with
              <i>conceptualizing</i>, designing, and implementing a multimedia
              project that not only showcased their proficiency in various
              multimedia tools but also demonstrated a deep understanding of how
              different elements such as <u>text</u>, <u>images</u>,
              <u>audio</u>, and <u>video</u> can be harmoniously integrated.
              Through this assignment, students had the opportunity to
              <b>explore</b> the intricacies of multimedia creation,
              experimenting with different techniques and approaches while
              <i>honing</i> their creativity and technical acumen. Overall, the
              project served as a <u>hands-on platform</u> for students to
              translate their academic insights into a tangible, multifaceted
              multimedia experience.
            </p>
          </div>
        </div>
        <div
          class="w-full flex flex-col items-center gap-4"
          v-else-if="tab === 1"
        >
          <p class="font-light text-xl">Sample Image</p>
          <div class="w-full md:w-[70%] rounded-lg h-96 p-4 bg-slate-800">
            <NuxtImg
              src="/images/banner3.jpeg"
              class="w-full h-full bg-fit"
              placeholder
            />
          </div>
        </div>
        <div
          class="w-full flex flex-col items-center gap-4"
          v-else-if="tab === 2"
        >
          <p class="font-light text-xl">Sample Video</p>
          <div class="w-full md:w-[70%] rounded-lg h-96 p-4 bg-slate-800">
            <video class="w-full h-full" controls>
              <source src="/video/sample-5s.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div
          class="w-full flex flex-col items-center gap-4"
          v-else-if="tab === 3"
        >
          <p class="font-light text-xl">Sample Audio</p>
          <div
            class="w-full md:w-[70%] rounded-lg h-96 p-4 bg-slate-800 flex justify-center items-center"
          >
            <audio controls>
              <source src="/audio/sample-15s.mp3" type="audio/mp3" />
            </audio>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
