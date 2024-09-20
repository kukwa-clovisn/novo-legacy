export default defineNuxtPlugin((nuxtApp) => {
  const clientId = useRuntimeConfig().clientId;
  if (process.client) {
    const PAYPAL_CLIENT_ID = clientId;
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
    script.async = true;
    document.head.appendChild(script);
  }
});
