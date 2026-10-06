<template>
  <div>
    <h2>Hook</h2>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
// useAsyncData for fetching apis
const { data } = await useAsyncData("posts", () =>
  $fetch(`https://jsonplaceholder.typicode.com/posts/1`),
);

// will work after nuxt app is completly readdy
onNuxtReady(() => {
  console.log("Nuxt app is readdy");
});
</script>
