// Service Worker for Owen Cotter Portfolio
// Version 1.0.0

const CACHE_NAME = 'portfolio-v1'
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
]

// Install event - cache critical resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      )
    }).then(() => self.clients.claim())
  )
})

// Fetch event - serve from cache when possible
self.addEventListener('fetch', event => {
  const { request } = event

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Network first for API calls
  if (request.url.includes('/api/')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (!response || response.status !== 200) {
            return response
          }
          const responseToCache = response.clone()
          caches.open(CACHE_NAME)
            .then(cache => cache.put(request, responseToCache))
          return response
        })
        .catch(() => caches.match(request))
    )
    return
  }

  // Cache first for assets
  event.respondWith(
    caches.match(request)
      .then(response => {
        if (response) {
          return response
        }

        return fetch(request).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response
          }

          // Clone the response
          const responseToCache = response.clone()

          // Add to cache
          caches.open(CACHE_NAME)
            .then(cache => {
              // Only cache images, CSS, JS, and fonts
              if (request.url.match(/\.(js|css|png|jpg|jpeg|gif|svg|webp|avif|woff|woff2|ttf|eot)$/)) {
                cache.put(request, responseToCache)
              }
            })

          return response
        })
      })
      .catch(() => {
        // Offline fallback
        if (request.destination === 'document') {
          return caches.match('/index.html')
        }
      })
  )
})
