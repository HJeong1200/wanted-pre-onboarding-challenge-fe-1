const requestHeaders: HeadersInit = new Headers();
requestHeaders.set(
  "Authorization",
  localStorage.getItem("token") || "no token"
);
requestHeaders.set("Content-Type", "application/json");

export default requestHeaders;
