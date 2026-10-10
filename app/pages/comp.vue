<template>
  <div>
    <div>
      <h2>counter using Composables</h2>
      <p>Count:{{ count }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </div>
</template>

<script setup>
const { count, increment, decrement } = useCounter();
</script>

<style lang="scss" scoped></style>
