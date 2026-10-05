<template>
  <div>
    <header style="background: palevioletred; padding: 18px">
      <h2>Admin dashboard</h2>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/admin">Admin</NuxtLink>
    </header>
    <main>
      <!-- for dynamic content -->
      <slot></slot>
    </main>
    <footer style="background: palevioletred; padding: 18px">
      <p>Site Footer</p>
    </footer>
  </div>
</template>

<script setup></script>
