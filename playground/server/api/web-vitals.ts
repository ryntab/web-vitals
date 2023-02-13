export default eventHandler(async (event) => {
  const body = await readBody(event)
  // eslint-disable-next-line no-console
  console.log('Web-vitals event:', JSON.stringify(body))
  return 'OK'
})
