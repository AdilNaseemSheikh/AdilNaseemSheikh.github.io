'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8bb655132806cab0b9edb5def031babc",
"assets/assets/i18n/en.yaml": "778e94b03d8c694aacd59da4d2b02fc9",
"assets/assets/i18n/hi.yaml": "c80bb2460856e5cdc54a5b1de7b11889",
"assets/assets/i18n/it.yaml": "ad02bc3a31292241b917becc35af9491",
"assets/assets/i18n/pa.yaml": "84ca5616461b83368eb7c952c9cec1bb",
"assets/assets/i18n/ur.yaml": "dc359ece677ed8c46d8bdcd11dc20415",
"assets/assets/icon/icon.png": "362de17d6eb6aa82e7f0e7922003217c",
"assets/assets/icon/icon_2.jpg": "88f347fffb4a4a5fa6718483e4004b92",
"assets/assets/icon/icon_2.png": "c919351926850d9fae0700b1d736a9d5",
"assets/assets/icon/icon_3.png": "5e99f42879c5701dd205bf59c5f06e03",
"assets/assets/icon/logo_blue.jpg": "11764fa95dfb0d637bcecef31d5f3cd7",
"assets/assets/icon/logo_blue.png": "6e8797cc93f065c64dd97ea5834a82c3",
"assets/assets/img/car.png": "8d20346a9640fb2ad5287dd8047535c5",
"assets/assets/img/cqc.png": "0f82f6d7c118da587646272614e7393b",
"assets/assets/img/LogoNew.jpeg": "44711af4167f6e21195da9aa567bf0dd",
"assets/assets/img/Splash.jpg": "c8b02b897b64fbe99adb9164830a3524",
"assets/assets/img/truck.png": "0672fb798a2818b6af4b8f81035eaeb0",
"assets/assets/json/data.json": "80640f0edf31b62080d6e139000170e3",
"assets/assets/json/manuale.json": "a26d0a0b851227b658e5c811b9836148",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/img/car.png": "8d20346a9640fb2ad5287dd8047535c5",
"assets/img/cqc.png": "0f82f6d7c118da587646272614e7393b",
"assets/img/Splash.jpg": "c8b02b897b64fbe99adb9164830a3524",
"assets/img/truck.png": "0672fb798a2818b6af4b8f81035eaeb0",
"assets/NOTICES": "03f6f49866ed30031fd3253fb56165b7",
"assets/packages/auth_buttons/images/default/apple.svg": "55dba81be7ba24dd88dbf9cc81de95e8",
"assets/packages/auth_buttons/images/default/email.svg": "3082146f3f124a005b10db6fe3109fe7",
"assets/packages/auth_buttons/images/default/facebook.svg": "042d64dc3864e72dee8ed5a25b514b11",
"assets/packages/auth_buttons/images/default/github_black.svg": "8dd7ed5ef65c02f30b4121eee588af6a",
"assets/packages/auth_buttons/images/default/google.svg": "1b57b430c55cb377ac0a88930bcdbd20",
"assets/packages/auth_buttons/images/default/huawei.svg": "82181eb0cd9622dfd588444a4dfe42a5",
"assets/packages/auth_buttons/images/default/microsoft.svg": "4f6ca3fa4b69eb5fca87e32ff32a044b",
"assets/packages/auth_buttons/images/default/twitter.svg": "4250a2b8958bcbef1a0fdb25d7fcce7b",
"assets/packages/auth_buttons/images/outlined/apple.svg": "db47e542919fcaf7d34748536b1deb49",
"assets/packages/auth_buttons/images/outlined/email.svg": "baff162b99d4cb10734919644984b8c7",
"assets/packages/auth_buttons/images/outlined/facebook.svg": "f251b931be2bae01fb489fe3a673ebb3",
"assets/packages/auth_buttons/images/outlined/github.svg": "7f95e5f428d5e503704489ae9059d680",
"assets/packages/auth_buttons/images/outlined/google.svg": "db08beb87c3bf1cffb0eab33ba45e21d",
"assets/packages/auth_buttons/images/outlined/huawei.svg": "9808b2adfd6d50759ac212f2524d89aa",
"assets/packages/auth_buttons/images/outlined/microsoft.svg": "da1f5b1904d6db32f0a328843ef6c194",
"assets/packages/auth_buttons/images/outlined/twitter.svg": "17f1f53b9a9a48f7eb9bef23297adc13",
"assets/packages/auth_buttons/images/secondary/apple.svg": "ada971dac266ff0002cbe1242969fac4",
"assets/packages/auth_buttons/images/secondary/email.svg": "9a8b80e244ab3faef8f215ec9042d826",
"assets/packages/auth_buttons/images/secondary/facebook.svg": "d716044a24525120c68a8aecd0f3ad20",
"assets/packages/auth_buttons/images/secondary/github.svg": "aa9249981ef0010785ac08f5ad311fd9",
"assets/packages/auth_buttons/images/secondary/google.svg": "3d9f5981ce3d70492c4f2669eda64ce8",
"assets/packages/auth_buttons/images/secondary/huawei.svg": "873b380209f2ece370272067b97cc9a9",
"assets/packages/auth_buttons/images/secondary/microsoft.svg": "363865e791ab614f76714d47f31cfe5b",
"assets/packages/auth_buttons/images/secondary/twitter.svg": "7e2e9892b0a7f923f55720429f42f4f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f9018c74d93336411f82a1b4e7e44adf",
"/": "f9018c74d93336411f82a1b4e7e44adf",
"main.dart.js": "ce6eb3a51f46fef21264934fc5ed6718",
"manifest.json": "072e85cc3f64f5a9db3e07868ca8af1c",
"version.json": "1e79acd4cd1b87015d317c33280e07c6"
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
