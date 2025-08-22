export default defineEventHandler(async (event) => {
  const { data } = await readValidatedBody(event, userFormSchema.safeParse)

  if (!data) return

  const { user } = await requireUserSession(event)

  const config = useRuntimeConfig()
  const notionDbId = config.private.notionDbId as unknown as NotionDB

  const query = await notion.databases.query({
    database_id: notionDbId.user,
    filter: {
      property: 'Email',
      email: { equals: user.email },
    },
  })

  if (query.results.length > 0) {
    await notion.pages.update({
      page_id: query.results[0].id,
      properties: {
        Name: {
          type: 'title',
          title: [{ type: 'text', text: { content: changeCase(data.name, 'sentence') } }],
        },
        Status: {
          type: 'status',
          status: { name: 'Filled' },
        },
        DOB: {
          type: 'date',
          date: { start: data.dob },
        },
        Gender: {
          type: 'select',
          select: { name: changeCase(data.gender, 'sentence') },
        },
        Phone: {
          type: 'phone_number',
          phone_number: data.phone,
        },
      },
    })

    const { user } = await getUserSession(event)
    await replaceUserSession(event, {
      user: {
        ...user,
        isProfileComplete: true,
      },
      logged_at: new Date().toISOString(),
    })
  }

  return { status: 'OK' }
})
