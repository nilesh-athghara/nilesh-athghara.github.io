'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "34a9dbcb5276b81662aa138c90f26d60",
"index.html": "db22922f298c96b1851d85fbecf0d6f3",
"/": "db22922f298c96b1851d85fbecf0d6f3",
"main.dart.js": "466fbd69253b6374c096da7966abe9fd",
"script.js": "aa1da467a5f019216ce85e6a13ec94c8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "032227350aa86e997b98f3538020e86d",
"assets/AssetManifest.json": "fce3d1b9f2ab8a2e0469e1a5029080af",
"assets/NOTICES": "fae596f722b437d0beea020dc8e35961",
"assets/FontManifest.json": "06687afcec88b00d89372cf55fb6cae8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/anim/loading.json": "bffdd110a3d969836b5874f69cb1a543",
"assets/assets/anim/success.json": "4cbc6bd7631b1efe6487d1793262a0c5",
"assets/assets/anim/partials.json": "b7f3057688a2172c095f60ddd2142af4",
"assets/assets/anim/fail.json": "f7c8b1efc9a23d69d944d079ac8b8e9a",
"assets/assets/Images/item_mobile_a.svg": "75bce091a980797a16dc6bb66e02ce0f",
"assets/assets/Images/topic_three.svg": "876e14f57c4259b1f51f697d6769a01a",
"assets/assets/Images/item_mobile_b.svg": "70ac3f4191d1298bcf8b285ecee6bb34",
"assets/assets/Images/icon.jpg": "9b274d1826c9f749636552f16ffb8683",
"assets/assets/Images/item_mobile_c.svg": "c89241802274a332b8284181e71a8e2f",
"assets/assets/Images/svg_web_b.svg": "ac37863cb8b01f53aa53d9ee2f07eb11",
"assets/assets/Images/svg_web_a.svg": "5e2db883950d68eae4c360938c882398",
"assets/assets/Images/2.0x/img_dash.png": "824907aae9f4bb8c439022115a28d9ae",
"assets/assets/Images/2.0x/certi.png": "8d66f66408389cd183f9ce4c38375710",
"assets/assets/Images/2.0x/app_logo.png": "ddd478ba15ebaa9b1d7cc9afbb03bf23",
"assets/assets/Images/academyLogo.png": "53a26b1dab165565dfeb41ceefcfb299",
"assets/assets/Images/step_one.svg": "f0cf6d0499448c1725107af5f915d499",
"assets/assets/Images/img_dash.png": "3c8925bb423aebb8fac31fb01b3e7261",
"assets/assets/Images/3.0x/img_dash.png": "3e45d9f9e80afc3bb8e3018e92b56a00",
"assets/assets/Images/3.0x/certi.png": "a6f4e330fdcaaabb46074dcfb1faccfc",
"assets/assets/Images/3.0x/app_logo.png": "b36a3864440ff4fd9b06b4922c875377",
"assets/assets/Images/topic_one.svg": "cc58a13ee5abb02b189960a8fd5d3f41",
"assets/assets/Images/4.0x/img_dash.png": "3104a4418fffed4922c24e06cc937aae",
"assets/assets/Images/4.0x/certi.png": "57abed1266f3bec11206382ff5fb95b6",
"assets/assets/Images/4.0x/app_logo.png": "dd4bbd9f581f5e977169d953055ba12d",
"assets/assets/Images/certi_web.png": "5aac4dd04969493dd9277bd3c34b46ec",
"assets/assets/Images/step_two.svg": "6ab0223933376b56bed96f35044f0fef",
"assets/assets/Images/topic_two.svg": "72bc3c03b65b7f2e887f8b083b835320",
"assets/assets/Images/step_three.svg": "f1a164e417a496c06bf07d80dfd3a1e1",
"assets/assets/Images/certi.png": "1c0c5cbbfa7f799ada1cdf8f62c6c41f",
"assets/assets/Images/app_logo.png": "4330d3922eea91e26bd487c1f29d8244",
"assets/assets/Images/watch_video.svg": "f2ba66b043e436eba4b11c21ac10416c",
"assets/assets/Images/you_tube.png": "b05238174067e7f873ccbc13ac76928d",
"assets/assets/Images/img_dash_web.png": "832a7d76c10d0e300d3a36087d10e6f9",
"assets/assets/Images/item_dash.svg": "84802643f68128e419b4b7560d421f56",
"assets/assets/lang/en.json": "0f7c94344fd6e764f8a4fe4edf8ac567",
"assets/assets/lang/hi.json": "963e32d3a103c02d266dd8553722507d",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "cabdb4a12e5de710afde298809306937",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "7384da64612787e3662872e9d19cbc2d",
"assets/assets/fonts/Roboto-BoldItalic.ttf": "0be9fa8f2863998d1e52c84165976880",
"assets/assets/fonts/Roboto-LightItalic.ttf": "2ffc058ddedacfeaa23542026c8108e2",
"assets/assets/fonts/Roboto-Italic.ttf": "465d1affcd03e9c6096f3313a47e0bf5",
"assets/assets/fonts/Roboto-BlackItalic.ttf": "c470ca2b5b4f4437a3fe71b113a289a2",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/Roboto-Thin.ttf": "4f0b85f5b601a405bdc7b23aad6d2a47",
"assets/assets/fonts/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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
