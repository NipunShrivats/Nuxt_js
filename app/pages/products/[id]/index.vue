<template>
  <div>
    <h2>Product Dynamic Page</h2>
    <p>You are viewing id:{{ route.params.id }}</p>
    <NuxtLink to="/products/about">Go to products About</NuxtLink>
    <NuxtLink to="/products/about">Go to Home</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
