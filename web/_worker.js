export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // Root path -> serve landing page (index.html at root)
  if (url.pathname === "/") {
    url.pathname = "/index.html";
    return fetch(context.request, { 
      redirect: "manual"
    }).catch(() => {
      return new Response("Not found", { status: 404 });
    });
  }
  
  // Serve game assets as-is
  return context.next();
}
