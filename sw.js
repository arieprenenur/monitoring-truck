const CACHE_NAME = 'MonitorTruck-pwa-v1';
const urlsToCache = [ '/', '/index.html', '/manifest.json' ];

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Biarkan request berjalan normal ke jaringan (wajib ada untuk syarat PWA Android)
  e.respondWith(fetch(e.request));
});
