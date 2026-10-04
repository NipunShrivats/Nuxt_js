<template>
  <div>
    <h2>oops! Page Not Found.</h2>
    <p>You tried to access: blogs/{{ route.params.slug.join("/") }}/</p>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
