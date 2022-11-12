export default defineEventHandler(async ({ res }) => {
  const feedString = '<xml-test>hello world</xml-test>'
  res.setHeader('content-type', 'text/xml')
  res.end(feedString)
})
