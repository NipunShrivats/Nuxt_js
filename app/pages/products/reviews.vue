<template>
  <div>
    <h1>Product reviews Main</h1>
    <!-- Will only load on client side -->
    <ClientOnly>
      <LazyReviewSection />
    </ClientOnly>
  </div>
</template>

<script setup>
const LazyReviewSection = defineAsyncComponent(
  () => import("@/components/ReviewSection.vue"),
);
</script>
