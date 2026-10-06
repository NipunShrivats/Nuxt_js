<template>
  <div>
    <input v-model="name" type="text" placeholder="Enter" />
    <p>Hello, {{ name }}</p>
    <p>Cart:{{ cart.items.length }} items:(Total:${{ cart.total }})</p>

    <button @click="addItem">Add Item</button>
    <button @click="remItem">Rem Item</button>
    <p v-if="isBigCart">Wow! You have a big cart</p>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";

// Ref for name
const name = ref("");

// recative for object
const cart = reactive({
  items: [],
  total: 0,
});

//
const isBigCart = computed(() => cart.items.length >= 3);

// watching value change
watch(name, (newVal, oldval) => {
  console.log(`Name changed from ${oldval} to ${newVal}`);
});
//
function addItem() {
  cart.items.push("item");
  cart.total += 100;
}
function remItem() {
  cart.items.pop("item");
  cart.total -= 100;
}
</script>
