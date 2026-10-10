import { ref } from "vue";

export default function useCounter() {
  const count = ref(0);
  function increment() {
    count.value++;
  }
  function decrement() {
    count.value--;
  }

  return {
    count,
    increment,
    decrement,
  };
}
