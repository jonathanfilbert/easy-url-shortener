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

  if(path === "/shorten"){
    return new Response('Hello Shorten', {
      status: 200,
    })
  }
  
  if (path === "/retrieve"){
    return new Response('Hello Retrieve', {
      status: 200,
    })
  }
  
  if(method === "GET"){
    return new Response('Hello Salma!', {
      status: 200,
    })
  }
}