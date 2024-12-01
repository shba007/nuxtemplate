<script setup lang="ts">
const { user, session } = useUserSession()
</script>

<template>
  <main class="flex h-screen w-screen items-center justify-center bg-black">
    <AuthState>
      <template #default="{ loggedIn, clear }">
        <div v-if="loggedIn && user">
          <h1>Welcome {{ user.name }}!</h1>
          <p>Logged in since {{ new Date(session.loggedInAt) }}</p>
          <button @click="clear">Logout</button>
        </div>
        <div v-else>
          <h1>Not logged in</h1>
          <NuxtLink to="/auth/google" external>Login with Google</NuxtLink>
        </div>
      </template>
      <template #placeholder>
        <button disabled>Loading...</button>
      </template>
    </AuthState>
  </main>
</template>
