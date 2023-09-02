'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4bd2ce01cb68ccc0d97a78d0810ca87b",
".git/config": "7bbd5f8330c9fe4625d676b5a3284ffe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "674251e76524bd78a8185880d1caea6b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "03cc61518967b7b218ae06201fe76689",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "819b6d8052774a46cee80a98e6ae4c0d",
".git/logs/refs/heads/main": "40054bfd6f48be820d421503a00f9064",
".git/logs/refs/remotes/origin/main": "9b31c36cdd3894bc7d2fcb179797df63",
".git/objects/01/ee293c02893f8abf20e1a1501ee9bacfb08e39": "937ad2b4f8a7c4f9ebad6a5665989c08",
".git/objects/02/245455c4140b2badee9d96bacc1f1aebe7db6c": "5fb168ba8eb0ce8cd28a2492cbb3e2c8",
".git/objects/05/143dbcaed7e7f1123de5a6ef2f5d32a452ada1": "210b933ccfcb42b29df012b69035aa6e",
".git/objects/0e/57f4202f0662e6f2fe89a86fbd0528569eaa11": "845388056214da0db8e3f1afb7805f2f",
".git/objects/14/90c17b8420bfddc943d4cf0099a006d8e00950": "e898157f13df80d7321e159dc5635024",
".git/objects/15/bb888c4033c9ef83c164a40e9c9b327ba34dbb": "132ad52372ed90311b890645ae0a2e96",
".git/objects/16/0a23d34e504865bf1b7126faf0cc56bc428e4b": "43e5e60374414dc8220bc4346dbc4de3",
".git/objects/18/282a53362fce49ca5081a1c50bd86a19092536": "71a28d212f97c787059d3c1a330b4e5a",
".git/objects/1c/a4e70fcbf167f1cf652e28c4652bdefebea699": "d5e877ec73bfd555d6e3357d5ac7ec76",
".git/objects/1c/d23fb1f0a90af1ae41dc13bd950031fb9dfaaf": "45b7d5db385fdf0c1d8ac047b71043dd",
".git/objects/1d/53a4da6b208b268ef80c4712711e654dc91db2": "bec59d40d3ce4fbe972d7e3d657f65e5",
".git/objects/23/7690569755903d4e63553cd52a603850055ada": "f65477dd473680600c9ea7e37ec15a6c",
".git/objects/24/8b78daf593ec8abd5594531af9abb653d73f02": "3f899e07bf4b161a56b4e02afb7cf33b",
".git/objects/2b/9f29434df53794943b902beaf478ff72f873ed": "fcc3e3669d6dbf604051e7be92150f8f",
".git/objects/2c/aac51cc869f2886692f318a8667a10d0c926b2": "d414cb0242b2d49d621a72cd7d890532",
".git/objects/34/4e9ea8dd2a6e6f20cb07ceb9f626774f947872": "52ba5ba05a1244b9bf53ec3327303d2d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/40/9292eb459e308145826c049db7cd2f238a2389": "30c7220885641dc53e854e79b0f10575",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/0779d1c58c9dcab52d30fd2537389349f37b4d": "2aa71333c417b98ef946f47a8c7e9cce",
".git/objects/52/8df44b408e2b1d238cc67934cdf6954c6a8665": "884ffd7b5851d4134946ece2e9e96766",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/69/411caec042c8a884d30e1b89b507109876f528": "c1038b93ac597637503e8dee78011854",
".git/objects/6c/5bfb73c57581a369a6472d85e0bbae31329aa7": "726f81541e1538415910d94d8a4f3ca3",
".git/objects/6d/3273db41b9564899110d9efa66ebbbbdc6787c": "ff1d40243e7a0d2ece096bb4828b7aa4",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/72/1e8c8b626c70b6e95bba4bfd1749dc6bb82537": "cea0591434895cf7bebb0335cf23943c",
".git/objects/75/cdcabc18eae7abeb5302e459892f5ca0740f27": "0fd64f0fe1fe135a836241de640f3cbd",
".git/objects/77/cbeed293561084c15a2c027b5e48f27ca83adc": "3e8df26c781016f9e621fb1b2318ecb3",
".git/objects/7d/08d94c9c10bb039386360d6ffd29f71760aeb9": "d0920841422b5ceb1cf946b4d6e59a1d",
".git/objects/84/a723e188163ab13ce5809f3eb99b85b234afce": "7623a90622e82c5b389f7a753106bcd7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/733e6eb0d0400f87f3c67f5bd7376acb9af880": "6ff155320f436e9669231beca304d1b7",
".git/objects/93/6c3f90396766aa966999765442bca9c9b15876": "f619b867ad32132659dab77235c78e3d",
".git/objects/97/8c784bc04585e88295533853997265465f5add": "64b6ee581419a0d7e60733cd6018d0eb",
".git/objects/9a/ef5b82d84537fac406fda99e3b1f9e8801d93f": "4d955d2d9033c1e583e5dedf49ab3f69",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a2/1f103dffb566976874a6fb7f95d00226e83f53": "71ed414ec8607a25da04b2b846496a82",
".git/objects/a6/67d8bc0d58034aa609a236d37739151bad4874": "d303a4f5fa279d241a5b2e50f8971b56",
".git/objects/ac/5a7b4840d3bd0b18bad2db90314f5e2215009e": "56c976913d42f400d8f5959b76c13238",
".git/objects/b6/d9030f42f81a3bbe4c32c449d0218a63be2b59": "0508e681e51967389f70f75c74a97507",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b7e52c4dc0ea915462a48522425a0c4e951b5d": "ac648167a8d5419e49cd6c55151dff3f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/0762585d3a57a6c56b6def7362456448650c5a": "b6d96439099efb8e9e834ba4376e59f6",
".git/objects/bf/b9c701f37e8e5c9ac6230fb0964aee255e7c81": "b3115f6a60ea18a1e6f88626f3b61d09",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c4/0ec90de728941213af4ead17c4f576ff41ea6b": "6a56cd521cab8e920808c9b83671607c",
".git/objects/c4/bd872473245209fe4230971cbe646439b1ecef": "108231cc46f826f6ef5883df9c734474",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/7c8acc1d293f4fff675719ca0b1aae3024928b": "bcf706cd730e79e539b22e03be358df5",
".git/objects/e2/2fb5b703c8d0eedbecd35fb90491e2cb9cefd9": "5610def672420fdd26f3c3b062386dfe",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/9135e2b9d2c1bfd06bf99f19e4ad527eab1c6a": "1164ab079b4a9cd62599d1c9569aa759",
".git/objects/f1/12c1866e35d99ab1eff5cd4650cae70d8c3675": "7b7c1faa4f78ad072073c76b4e5a180e",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/f3792fcebb325b185a6d1d4a364a3d4eac9c36": "0f91b850330c6b211e0aeb53dc7f3af6",
".git/ORIG_HEAD": "9c97f37e267750ce457feb07da39bcfd",
".git/refs/heads/main": "9c97f37e267750ce457feb07da39bcfd",
".git/refs/remotes/origin/main": "9c97f37e267750ce457feb07da39bcfd",
"assets/AssetManifest.bin": "18576035fc034fca5bef1ef77991db89",
"assets/AssetManifest.json": "6ffb26891b80845e60013df6e56fd4c1",
"assets/assets/3dprinting.gif": "df324e46266d58089369ddd77628199a",
"assets/assets/Androidapp.gif": "300faa9c275ec3ee421e7548aa07528a",
"assets/assets/drawings.gif": "c5f9b0c7e02e530197753362828f3330",
"assets/assets/electronics.gif": "a75b0e83c8b3145b2574dc5c6b29eb84",
"assets/assets/graphic.gif": "9e8de20009685280b67b6c232360ddc0",
"assets/assets/opencv.gif": "c943c3e77065cb4507127e14e78764ac",
"assets/assets/Picture1.png": "836d4c89dcedc87e275c26bef07bb05d",
"assets/assets/picwithrobot.jpg": "88407812815dda127d2d3cb0029827f3",
"assets/assets/software.gif": "199581e6e4ced3de5c88c04bce2b86cf",
"assets/assets/videoediting.gif": "afe349d83f2f682647ca55a2761cb399",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d5c0ba78ae907fd2301cadf0401accab",
"assets/NOTICES": "945d7c34376303c8560f6c6a3313dbb7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit%20-%20Shortcut.lnk": "6036a7dd7b9e7a752f4255962fb52253",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a433719d5d24fd86450b671d98e6aa0a",
"/": "a433719d5d24fd86450b671d98e6aa0a",
"main.dart.js": "42566930df4ffc435221ff5eb18fcbf6",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
