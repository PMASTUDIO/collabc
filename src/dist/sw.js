var CACHE_NAME = 'collabc-site-cache-v1';
var urlsToCache = [
  '/',
  '/static/frontEndMain/vendors.css',
  '/static/frontEndMain/main.css',
  '/static/frontEndMain/main.js',
  '/static/frontEndMain/vendors.js',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });