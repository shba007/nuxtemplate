<script setup>
const { loggedIn, user, session, clear } = useUserSession()
</script>

<template>
  <main class="flex h-screen w-screen items-center justify-center bg-black">
    <div v-if="loggedIn">
      <h1>Welcome {{ user.name }}!</h1>
      <p>Logged in since {{ new Date(session.loggedInAt) }}</p>
      <button @click="clear">Logout</button>
    </div>
    <div v-else>
      <h1>Not logged in</h1>
      <NuxtLink to="/auth/google" external>Login with Google</NuxtLink>
    </div>
  </main>
</template>
