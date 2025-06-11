const protectedRoutePatterns = [/^\/api\/subscription\/[^/]+\/notification\/?$/i]

export default defineEventHandler((event) => {
  console.log('New request: ' + getRequestURL(event))

  const isProtected = protectedRoutePatterns.some((rx) => rx.test(event.node.req.url || ''))
  if (!isProtected) {
    return
  }

  const config = useRuntimeConfig()
  const authHeader = getRequestHeader(event, 'authorization')

  if (extractBearerToken(authHeader) !== config.private.serverValidationKey) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Unauthorized',
      data: { message: 'Invalid or missing API token' },
    })
  }
})
