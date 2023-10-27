/**
 * Event listener for the 'install' event.  */ 
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/styles.css',
                '/script.js',
                '/manifest.json', 
                '/images/banner.jpg',
                '/images/profile-1.jpeg',
                'images/profile-2.jpeg',
                'images/profile-3.jpeg',
                'images/profile-4.jpeg',
                'images/profile-5.jpeg',
                'images/profile-6.jpeg',
                'images/profile.jpg',
                'images/service1.png',
                'images/service2.png',
                'images/service3.png',
            ]);
        })
    );
});

/**
 * Event listener for the 'fetch' event.  */
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
