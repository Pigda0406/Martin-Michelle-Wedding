'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a1e606e050f3061bc34fa0a376fd9af7",
"assets/assets/0076.jpg": "8de9021843d9b08a9c5efc2d67d04e86",
"assets/assets/AZ9I0320.jpg": "6df241bae5310120ce62b5c6437ffd48",
"assets/assets/AZ9I0399.jpg": "85552b609d6fd9080b99835d8ac0ff0c",
"assets/assets/AZ9I0426.jpg": "a66bc7cfe51ea7d3fd90c92daa0c839a",
"assets/assets/AZ9I0435.jpg": "5e079e181a47664d59d9f50c878eb20e",
"assets/assets/AZ9I0483.jpg": "7abe8f3cec75e8e7e206e674107fe16e",
"assets/assets/AZ9I0522.jpg": "4debdd6b8894d535e1a83f91c81bb55c",
"assets/assets/AZ9I0552.jpg": "6b6942bc41f5b5684240f2b56d274212",
"assets/assets/AZ9I0785.jpg": "97fd3d5a3a3be5cc994b4d960cf3559f",
"assets/assets/AZ9I0853.jpg": "8f6c4804aecc8b721b69b459b0565e9b",
"assets/assets/AZ9I1005.jpg": "8b6a9a4452c925f9dbb4735f831c960f",
"assets/assets/AZ9I1030.jpg": "4d549503bfade93ada75cb6531b481d1",
"assets/assets/AZ9I1134.jpg": "6725560b7681baf132253ece7753995c",
"assets/assets/AZ9I1269.jpg": "c037114a1b954f0798a44d87f56a706c",
"assets/assets/AZ9I1627.jpg": "09648bb01fc9f845aa24317ccb0da941",
"assets/assets/AZ9I1880.jpg": "a5010d4e13ee89e8daaaff32ffa85d1a",
"assets/assets/AZ9I2289.jpg": "bd05eebe00bf260412f8923329338166",
"assets/assets/AZ9I2415.jpg": "8900d721d95d804bc64497c069ca9026",
"assets/assets/AZ9I2462.jpg": "25c158fdc12c4c2c776e0232f61d7ecf",
"assets/assets/AZ9I2792.jpg": "2271a685fa8c5f44ba504232bc4993f6",
"assets/assets/AZ9I2811.jpg": "fcff83bd0e39be51e8f1ce2138e93a66",
"assets/assets/AZ9I2834.jpg": "2ef87b80853df904db4561efc0899167",
"assets/assets/AZ9I2872.jpg": "9ea965a65afa0427ffc8ce09c02e626b",
"assets/assets/AZ9I2882.jpg": "da6c2fd422e712e2821ac73aa7207f2d",
"assets/assets/AZ9I3036.jpg": "6c0851ae6d09606cbf4dfd961e343763",
"assets/assets/AZ9I3191.jpg": "14350800a588ba6a9110f6c86b0f1965",
"assets/assets/AZ9I3197.jpg": "74f47506409055b9c1ebb3577bb2ea80",
"assets/assets/AZ9I3353.jpg": "f862e6e2a7e5d2691f11d2665cdcff7c",
"assets/assets/AZ9I3431.jpg": "2e7344fd524ae1bfb642414f1a5e1853",
"assets/assets/AZ9I3731.jpg": "30242dee3e9643f7170069129df1dffb",
"assets/assets/AZ9I3774.jpg": "45acb2a91330293ce5f1711305ce565c",
"assets/assets/AZ9I3777.jpg": "6d072a464d5af91bc169f05a97c95aa5",
"assets/assets/AZ9I3895.jpg": "2f0019f621f999afc1feb16777493fee",
"assets/assets/AZ9I8767.jpg": "51874d3b9228dae4660678c5ca2d75a4",
"assets/assets/AZ9I8878.jpg": "f416d9ff5b5195bdb125d9880dd66846",
"assets/assets/AZ9I8999.jpg": "718c5746cc4f13f8282ea0b898ebf0b9",
"assets/assets/AZ9I9136.jpg": "9e1ad80f263a12a1c92eab849e3eb958",
"assets/assets/AZ9I9276.jpg": "3650d5edc8bc12b200c0c89879fc8306",
"assets/assets/AZ9I9315.jpg": "53118dedbf78c4f9e72e308e72c2e8bc",
"assets/assets/AZ9I9442.jpg": "47cafb49b34b473c22df5567ab1bec27",
"assets/assets/AZ9I9629.jpg": "092abb72b01f63907acc43d741b11f24",
"assets/assets/AZ9I9797.jpg": "e86592fd576a7b22fb44d43a902413f2",
"assets/assets/AZ9I9942.jpg": "e87ff38bf2a29db1459c2e9c055c490a",
"assets/assets/background_img.jpg": "25c158fdc12c4c2c776e0232f61d7ecf",
"assets/assets/background_img.png": "a6e100e233529d484f7c04f0c46fe6e7",
"assets/assets/bg2.png": "fdd442dccb07321c7c49d6107ab68ed7",
"assets/assets/center8.png": "8737b2e6a1c4c19389b893efbb760a74",
"assets/assets/chat.png": "8c20d46da09d8548ec17c1cc970fd8e4",
"assets/assets/congratulation.json": "9a42c6f47bf192a0a4dec3245515feaf",
"assets/assets/ic_chat.png": "d80f00c56437bc1fd2c69bd57020e7b1",
"assets/assets/ic_message.png": "d82b6988f8ed3a15a3205ee9f990cd37",
"assets/assets/img.json": "4a90e247193305219ce43ea1187e22f6",
"assets/assets/loading.json": "0abf73d93e94a4872d4bf34a9df54da2",
"assets/assets/logo.png": "940084d970bd25e90588ece0f487172a",
"assets/assets/newg3.png": "883caabcfcf7f2206a7a454f28101d10",
"assets/assets/profile.png": "624e008258fa23e4b683bfc12d904fa9",
"assets/assets/profile_default.png": "7ddc665469f6b90b2b53cd66bb668202",
"assets/assets/shape.png": "669da348a4139bdf2f2aa8f9bcf117ac",
"assets/assets/videos/background_video.mp4": "e5dd5676edd7568aaefaaffa5fa802cd",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "3957b16f093b20181ab5ab8e289d840e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "d47871e48abe8c585d585a68cca17608",
"icons/favicon.png": "d47871e48abe8c585d585a68cca17608",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "deed469ad2284d9a07d319514e6aebdd",
"/": "deed469ad2284d9a07d319514e6aebdd",
"main.dart.js": "a8b19b15a444b8bea70ee85b889b395a",
"manifest.json": "91fe89c9bbdb2b3c73f8ea79c4ef8cc8",
"version.json": "1c374999146835b6664c700b81870973"
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
