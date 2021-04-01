'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b60a5c54b7dd5c7a706eafe8f78c9da8",
"assets/assets/images/add.png": "8bff27dc5b55e923ad63f98f70d9ddce",
"assets/assets/images/adhar_oneside.png": "0d4f3ae243b4bcd7749ebdfefcd0b539",
"assets/assets/images/adhar_twoside.png": "cb2f40daa3d2af338f3840b62556480d",
"assets/assets/images/approved_ic.png": "37d48e2562f594bc339c47bfd3eecedb",
"assets/assets/images/back_arrow_ic.png": "f2155f95696bcf56fcd6a4fd44de7f90",
"assets/assets/images/bank_inactive.png": "78c3fa7f1d7ff9082454913b537ec19f",
"assets/assets/images/bell.png": "6b6262d8927199ff09f2db0e6291e213",
"assets/assets/images/bell_with_dot.png": "6b6262d8927199ff09f2db0e6291e213",
"assets/assets/images/booking.png": "8ac937bc65c2e13243a1c7e50e233505",
"assets/assets/images/bottom_bell.png": "40140c8127599e92864fdc0dc5bffdab",
"assets/assets/images/bus.png": "749daea11757bf5434a77558f7650320",
"assets/assets/images/calender_ic.png": "6fea881946ec304a4d5958b651693c06",
"assets/assets/images/call_red.png": "2f3449aa44fb4d05c834d4a36a529edc",
"assets/assets/images/camera.png": "726dfa4971fb6d2059fd5edbe7bdd629",
"assets/assets/images/cam_upload.png": "f96c190525e958a1cdbb6575713978de",
"assets/assets/images/cancel.png": "0ca61d44ea01b0cf64abd03f776a865a",
"assets/assets/images/cancel_booking.png": "43f5db8037c70cf0b8ee2047ba21c2e0",
"assets/assets/images/cc.png": "e845e0157c568a634d92a146ba1c9e37",
"assets/assets/images/change_trains.png": "a5b58ecedfd5838765f6b15071f8fb19",
"assets/assets/images/close_dialog.png": "4534b112df4a8db8f8ac29b3f1813aa0",
"assets/assets/images/contact_us_ic.png": "11a468f5076f91c22a34608276454c3b",
"assets/assets/images/cross_ic.png": "94607f56806629abef93ef59dc722b59",
"assets/assets/images/dashboard_bg.png": "4318b6f6552a0aace78b17523d086fc1",
"assets/assets/images/date_range.png": "d147b2b111e5c0b1053d454a0f752304",
"assets/assets/images/default_dp.png": "df63b5559108294bc84744b668099b81",
"assets/assets/images/doc_edit.png": "73ee9d9ebe5bd8d10043324c1fff8b8c",
"assets/assets/images/download.png": "1bbd1520a54659d9c983089ed6dc5901",
"assets/assets/images/email.png": "71410c647438665d590d97f8d55ada33",
"assets/assets/images/eye_hidden.png": "0ff69d8d5e46e2918df814172a8d44da",
"assets/assets/images/eye_visible.png": "ba1aee6951bbd3097fbfc3027a836648",
"assets/assets/images/flight.png": "d1721a0b9bb2312ea51e19a14dae6820",
"assets/assets/images/footer_bg.png": "250b8f4881f4dfa48f6fbc5657d6825e",
"assets/assets/images/footer_vector.png": "ede3150f7687d08831ba176a00801fae",
"assets/assets/images/forward_arrow.png": "fb7de03789900ecceea10724b4c08766",
"assets/assets/images/gallery_upload.png": "fb16e719a0254d5296286832c3f8006e",
"assets/assets/images/gov_id_aadhaar.png": "a158f6329ae7d152f8993f98699e55a8",
"assets/assets/images/gov_id_dl.png": "1f96f00576aefc4147b55c429c6bcf3e",
"assets/assets/images/gov_id_nrega.png": "5f2bfce5ec3b06f679c30dab0d068347",
"assets/assets/images/gov_id_passport.png": "60520b73b02f683efa8632b144b5959e",
"assets/assets/images/gov_id_voterid.png": "5995e32a3556e34cd670fb52cc6102b8",
"assets/assets/images/help_ic.png": "58bf6acf0140ebfe381db9e42ea9828f",
"assets/assets/images/help_more_ic.png": "360e20f0fbe163f1825e317c156a5d13",
"assets/assets/images/home_activee.png": "6e30f32ec038a7c1f86a510edaa218e2",
"assets/assets/images/hotel.png": "fe7b8568c3ea63b13664d2e2eba4a2af",
"assets/assets/images/icon_cross_bl.png": "5e22b3be5affaead15c2e182b4fef165",
"assets/assets/images/icon_dropdown.png": "87ef46630163984d4b86767cd138e2f2",
"assets/assets/images/icon_filter.png": "4c6a4b2a6d008bbf6c90fd5b0d6263aa",
"assets/assets/images/icon_help.png": "da14f6dccb47d8a70945845a3b424749",
"assets/assets/images/icon_search.png": "522571b20b47a21534269de3d355a194",
"assets/assets/images/icon_train.png": "6a5cb95f46e5621bae4e6e270d47dbf3",
"assets/assets/images/lang.png": "b794271b09d6248a7acdcd4c8ca6a698",
"assets/assets/images/lang_more_ic.png": "81da5080a8c294852eece5feee848c42",
"assets/assets/images/loction_ic.png": "022b095a236afde3a392c581fc45ffb5",
"assets/assets/images/login_banner.png": "aef8643de83c2d38f929952ed857f71d",
"assets/assets/images/logout_ic.png": "ed4ab81cb833eb43f8944569fbf2b3d3",
"assets/assets/images/logo_login.png": "f62e16fb04f8cb710878de154652a9ef",
"assets/assets/images/mail_red.png": "f4e92fc1c36a4bd511cdfafb3d2d910d",
"assets/assets/images/markup.png": "e1e60d90562b9a84221ae23c6cb5ae32",
"assets/assets/images/more.png": "7bb49bd645c99ba7cba991808086fbbf",
"assets/assets/images/passanger.png": "7db64b8c845eefbe798827607348c5e5",
"assets/assets/images/pnr.png": "7241a503abc0b21feb231f1a04307010",
"assets/assets/images/pnr_ic.png": "6b3ce43e77c7245eeb76b33af7f96a5a",
"assets/assets/images/privacy_policy_ic.png": "8f1c7dd2e2946ac26792d35f618304a8",
"assets/assets/images/profile_backup.png": "81ac90ce31007348bb76284a59efe2f5",
"assets/assets/images/profile_ic.png": "364cdb7328ce04f88d75d66f7ff420c7",
"assets/assets/images/refund.png": "a3d38e1798d8a7cf7a3040db67eddeda",
"assets/assets/images/rejected_ic.png": "6319044208ac202fb97aadfc043b19bb",
"assets/assets/images/rupee_icon.png": "f335705a628df91f1a0c46041bcfb22f",
"assets/assets/images/search_icon_new.png": "7f6db370b5c665a4d06c33368f996fcd",
"assets/assets/images/success.png": "3f28e75930f0a77ab6ad7ce04dbf0daf",
"assets/assets/images/success_ic.png": "a94e5a7777e1590c6c162d2d8217fa49",
"assets/assets/images/success_image.png": "7b8ec74670cbc1513f075bd857041286",
"assets/assets/images/telephone-call.png": "5f41ff5e2ff4e144da47b7ec1f526345",
"assets/assets/images/telephone_call.png": "5f41ff5e2ff4e144da47b7ec1f526345",
"assets/assets/images/timer.png": "b01e4d4e4cd07a1eca85409d2a90af0a",
"assets/assets/images/train.png": "cc856941f992224334824a18ced880c3",
"assets/assets/images/upload_front_side.png": "b362974bf4093acecd8a1351d0d42caa",
"assets/assets/images/wallet.png": "85a4c3a1af8c25ae29a7c579c088e665",
"assets/assets/images/wallets.png": "0d414b77029405ceef38d13a34e50a3a",
"assets/assets/images/wallet_icon.png": "1d7ff38ea99f46a974bfadec311d1e09",
"assets/assets/images/whatsapp_ic.png": "3b6c81c081d80d0a743307aa01d6c04a",
"assets/assets/images/work-process.png": "8b213efca919fc2998cac25e04848e94",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "69f4251fb642cb48625305909d06b89f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f8e8fbe948dbe04cc3eb6ec2cce6ff4f",
"/": "f8e8fbe948dbe04cc3eb6ec2cce6ff4f",
"main.dart.js": "4686af974e7bd373af3a4c831f9948ae",
"manifest.json": "691250e23af4f1e84c9a9c1a014bc2e5",
"version.json": "134ad2d9ac4a457cdea792201553fc31"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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