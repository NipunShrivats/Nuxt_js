export default defineEventHandler((event) => {
  return {
    message: "Hello from nuxt js",
    time: new Date().toLocaleTimeString(),
  };
});
