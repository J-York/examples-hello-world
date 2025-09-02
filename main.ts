Deno.serve(async (_req: Request) => {
  // 1. Read the environment variable.
  const gatewayBaseUrl = Deno.env.get("GATEWAY_BASE_URL");

  // 2. Read the content of index.html
  let content = await Deno.readTextFile("./index.html");

  // 3. Replace the placeholder with the environment variable.
  //    If the variable is not set, it will be replaced by `null`, 
  //    so the client-side script will fallback to `window.location.origin`.
  const replacementValue = gatewayBaseUrl ? `'${gatewayBaseUrl}'` : "null";
  content = content.replace(/Deno\.env\.get\('GATEWAY_BASE_URL'\)/g, replacementValue);

  // 4. Return the modified HTML.
  return new Response(content, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
});