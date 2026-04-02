export default defineNuxtRouteMiddleware(() => {
  const { loggedIn, user } = useUserSession()

  if (loggedIn.value && user.value?.isProfileComplete) {
    // eslint-disable-next-line link-checker/valid-route
    return navigateTo('/dashboard')
  }
})
