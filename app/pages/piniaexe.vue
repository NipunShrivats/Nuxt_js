<template>
  <div>
    <h2>Pini Example</h2>
    <h1>Counter:{{ counter.count }}</h1>
    <h1>Doubble:{{ counter.doubleCount }}</h1>
    <button @click="counter.increment">+</button>
    <button @click="counter.decrement">-</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
console.log("counter", counter.count);
</script>
