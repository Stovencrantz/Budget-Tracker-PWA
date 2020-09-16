console.log("hi from your service worker");

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Your files we pre-caches successsfully");
            return cache.addAll(FILES_TO_CACHE);
        })
    )

    self.skipWaiting();
})