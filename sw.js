/* Estudio de fondos: permite abrir la app sin internet.
   IMPORTANTE: cada vez que subas un index.html nuevo, cambia VERSION
   (por ejemplo "v2", "v3"...). Así los celulares detectan la actualización. */
const VERSION = "v3";
const CACHE = "estudio-fondos-" + VERSION;
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c =>
    c.addAll(FILES.map(u => new Request(u, { cache: "reload" })))));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith("estudio-fondos-") && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("message", e => { if (e.data === "activar") self.skipWaiting(); });

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    const scope = new URL("./", self.registration.scope).pathname;
    const p = new URL(req.url).pathname;
    // Solo la app principal se sirve desde la memoria; otras páginas del repositorio se abren normal
    if (p === scope || p === scope + "index.html") {
      e.respondWith(caches.match("./index.html").then(r => r || fetch(req)));
    }
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req)));
});
