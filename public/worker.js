var doCache = true;
var CACHE_NAME = 'pwa-app-cache';
// Delete old caches

const filesToCache = [
  '/',
  '/src/assests/css/bootstrap.min.css',
  '/src/App.js',
  '/src/index.js',
  'index.html',
];
self.addEventListener('activate', event => {
  const currentCachelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!currentCachelist.includes(key)) {
            return caches.delete(key);
          }
        }))
      )
  );
});
// This triggers when user starts the app
self.addEventListener('install', function (event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function (cache) {
          fetch('manifest.json')
            .then(response => {
              response.json();
            })
            .then(assets => {
              cache.addAll(filesToCache);
            })
        })
    );
  }
});
// Here we intercept request and serve up the matching files
self.addEventListener('fetch', function (event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});