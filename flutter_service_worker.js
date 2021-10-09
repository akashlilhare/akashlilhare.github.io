'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9a10131d3885901f9a6efd791c3d2d57",
"assets/assets/dev1.gif": "0f2748c6d9232abc3977dcd2db8af9c2",
"assets/assets/dev2.gif": "b289c37290212e2ae3c2d60dbeded16c",
"assets/assets/dev3.gif": "c7f8b1214b6d3d01b698819c4d677ab3",
"assets/assets/dev4.gif": "606f3e3478a0d88a3193ca4d8c0399df",
"assets/assets/dev6.gif": "82b7314fe96c4a2d8f3088207a4afd8d",
"assets/assets/devloper.gif": "03a89c7e9ddcf097525ec86c5d9dea72",
"assets/assets/project_assets/1.jpg": "66d0b38f5606eec513b1595d032ba2c3",
"assets/assets/project_assets/2.jpg": "e2e214ffe319005bf455644847fddfe5",
"assets/assets/project_assets/3.jpg": "622a885a70a5efa3642d50f9e3fefbcd",
"assets/assets/project_assets/4.jpg": "f9a14b3c0a4a86836adce2e4d2340fcb",
"assets/assets/project_assets/5.jpg": "89a4e0c13276ff27d9b9b9ed6aa4db16",
"assets/assets/project_assets/6.jpg": "0151155b5f8fefc057e25dc3927d379f",
"assets/assets/skills_assets/cpp.png": "0b849c72f38362fe12072a4916660013",
"assets/assets/skills_assets/css.png": "86a1d44381a9af62298bf58870439456",
"assets/assets/skills_assets/dart.png": "b1e0fb812fba9509f032d24e496f12c5",
"assets/assets/skills_assets/firebase.png": "ab1fff217b598adb6cc0ebd784d52cc5",
"assets/assets/skills_assets/flutter.png": "e31f1c20d27c4415bce49ca10cc44ba1",
"assets/assets/skills_assets/git.png": "b9925639795cfe12fd51b11b585830dc",
"assets/assets/skills_assets/github.png": "0ba2aa20e2c2ce80e9a2db5b07198464",
"assets/assets/skills_assets/html.png": "d4c6438cb89570fd4ff4871b5b022a7e",
"assets/assets/skills_assets/javascript.png": "5062b5479e5aa9afffd1ff5d0b0682e2",
"assets/assets/skills_assets/mongodb.png": "70da52e652ab6f94e3c152393b0626c5",
"assets/assets/skills_assets/mysql.png": "fd01c80c788feee0d588929412e83f86",
"assets/assets/skills_assets/nodejs.png": "7b36b799a15eab69e78c349f5bf80ded",
"assets/assets/skills_assets/python.png": "2f5b68a4059d3d28a0db73944b840a6a",
"assets/assets/skills_assets/react.png": "70f87bba34487dc1c0cb8916d800c63b",
"assets/assets/skills_assets/sqllite.png": "c26a3f90e0a40649713f7ec9b8b33c24",
"assets/assets/swipe/giphy.gif": "0b40d38384e31586de95eeabf502b50a",
"assets/assets/swipe/scroll_animation.gif": "fed3defa88e02481a577a6ddff039a3a",
"assets/assets/swipe/seipe2.gif": "d7d57e356fa7c084cdba9a489e399777",
"assets/assets/swipe/swipe1.gif": "8207e569b1b5da0a3bc2ed5e17f8a1c0",
"assets/assets/swipe/swipe3.gif": "6a99e12f88f40c8516cbee4c61f6b539",
"assets/assets/swipe/swipe4.gif": "c54446f3c01d15ed029fcef3c5f352b3",
"assets/assets/swipe/swipe5.gif": "aaaac16085a101c18c4f74e5d4acf34a",
"assets/FontManifest.json": "24636421a941e1a973ed7962700ca341",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "5f471727e047718be9030934cb1e9bfc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e55ae7157d8d50fc7cf0a5aa8dc1d23",
"/": "2e55ae7157d8d50fc7cf0a5aa8dc1d23",
"main.dart.js": "90fb101e89eab8c785e78798c4db9b8d",
"manifest.json": "1f9c93ad7cc560cfca1e619b3576bbe0",
"version.json": "9cfb1aecc8614ad4683e6b5a58245e0b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
