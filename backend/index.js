addEventListener('fetch', event => {
  event.respondWith(handleRequest(event))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(event) {
  const method = event.request.method
  const url = new URL(event.request.url)
  const path = url.pathname
  const request = event.request

  if(path === "/shorten" && method === "POST"){
    const { short_url, long_url } = await request.json()
    const _ = await newLink.put(short_url, long_url)
      return new Response(JSON.stringify({ data: short_url, ok: true }), {
        status: 200,
      })
    }
  
    if(path === "/retrieve" && method === "POST"){
      const res = await request.json()
      const {short_url} = res
      const long_url = await newLink.get(short_url)
        return new Response(JSON.stringify({ data: long_url, ok: true }), {
          status: 200,
        })
      }
  
  if(method === "GET"){
    return new Response('Hello Salma!', {
      status: 200,
    })
  }
}