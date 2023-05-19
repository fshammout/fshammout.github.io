'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "232de35adebfa41a81efe78b27bcffbe",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/data_lab_cert.png": "227a8022d02dd3a6d21bc3b2aff51269",
"assets/assets/images/dev_meditate.png": "206861775d0f1fa15cd487e54df0fa3b",
"assets/assets/images/down-arrow-2.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/feras-res.pdf": "c8f77f6f8e42701d1d17cea18226cc61",
"assets/assets/images/feras_sh.png": "1eccfba4ff7740dc0219276ec2c89859",
"assets/assets/images/google_play.png": "7c42f3803d546db3d393106501dba541",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/power_plat_cert.png": "6c925a27c5ef450f9b4438fab97b906d",
"assets/assets/images/projects/bitcoin_mining/clustering.png": "944d02a2cd738a460476f8c0e85145fe",
"assets/assets/images/projects/bitcoin_mining/emotion1.png": "19ea1ed566b0c112258a78c6eac258ba",
"assets/assets/images/projects/bitcoin_mining/emotion2.png": "f19e4b2fe0e29e9f35f0d4e90ca0b1ec",
"assets/assets/images/projects/bitcoin_mining/emotion3.png": "9c61e301ab1eff3af76b71949513ef39",
"assets/assets/images/projects/bitcoin_mining/emotion4.png": "a43358ee004c48d8096b309d55bd075b",
"assets/assets/images/projects/bitcoin_mining/emotion5.png": "3561061364adf55144af9bec2edcd411",
"assets/assets/images/projects/bitcoin_mining/tone_analysis.png": "82fa2620f597763c00fa1a44e4dcc5d5",
"assets/assets/images/projects/daily_electric/daily1.png": "e85570ade82342cf554836ebc450070b",
"assets/assets/images/projects/daily_electric/daily2.png": "7af1fbfbd60e18a087bdf5ab02a05e76",
"assets/assets/images/projects/data_task_abs/data_task1.png": "094ef5246799167554f4430e6c55eadb",
"assets/assets/images/projects/data_task_abs/data_task2.png": "14491bce758cbfd548409b1956292d6f",
"assets/assets/images/projects/data_task_abs/data_task3.png": "d5bbd2551cfa11e099c425c384ccdb10",
"assets/assets/images/projects/excel_financial/excel_input1.png": "040856213fe99c7da26c5f1b1b40c614",
"assets/assets/images/projects/excel_financial/excel_input2.png": "9adeb254ea91a2d93e5e7b19cd93e8d0",
"assets/assets/images/projects/excel_financial/excel_setup.png": "822ce8ba657d5d03cc2b5357e06b48d8",
"assets/assets/images/projects/excel_financial/excel_visuals.png": "a66e8dab71ac15a3c8077b3caf4bf886",
"assets/assets/images/projects/feras_chatbot/chat1.png": "b2752853bd00ceeaec3fba79ba052ea0",
"assets/assets/images/projects/feras_chatbot/chat2.png": "cbfdfa45156c66926602258e878daa13",
"assets/assets/images/projects/massarat_powerbi/admin_v1.png": "b4c7ef950ccc51c36980618a0983b227",
"assets/assets/images/projects/massarat_powerbi/dash1.png": "684b2180d3334d59a1fffa3d9b4c0b54",
"assets/assets/images/projects/massarat_powerbi/dash2.png": "b80ff1f3d07f665558adc8f50e6e053e",
"assets/assets/images/projects/massarat_powerbi/dash_home.png": "0826e6a3293929b7e764d3e308ecc4fe",
"assets/assets/images/projects/massarat_powerbi/dash_quizes.png": "def1dba40dc8c26ce591cb4eafaffac3",
"assets/assets/images/projects/massarat_powerbi/model.png": "72fe812da751759c8cab15ac2c829a69",
"assets/assets/images/projects/massarat_powerbi/parents_v1.png": "b88a05c70f53572e314f82ff393e68df",
"assets/assets/images/projects/massarat_powerbi/students_v2.png": "7436b9a2e98a0dd0efbe1b821025cfcf",
"assets/assets/images/projects/massarat_powerbi/student_home.png": "61fcbeb1f9f075590e6ab7fa829e10b2",
"assets/assets/images/projects/massarat_powerbi/student_reports.png": "508c184d1770add742ad5aa3ec15d83a",
"assets/assets/images/projects/massarat_powerbi/student_v1.png": "a6409d215064f2ac9ed0416e7d80c99e",
"assets/assets/images/projects/massarat_powerbi/teacher_v1.png": "62493a6edd3a8a05a789c09d7bb4ae04",
"assets/assets/images/projects/massarat_powerbi/teacher_v2.png": "aebe18e4f953a466f2dd76215ee45f8f",
"assets/assets/images/projects/ml_crypto/avg_error.png": "eed58466089cd84a28fd8fc079b74531",
"assets/assets/images/projects/ml_crypto/regres.png": "d8c04141f1931f0c6f66403a1b600730",
"assets/assets/images/projects/ml_crypto/regress.png": "bf895e8a29956ec6e94fa3273acaa695",
"assets/assets/images/projects/ml_crypto/sentiment.png": "5af33dded03babf6e467a34b9672ee53",
"assets/assets/images/projects/ml_crypto/sentimet_prediction.png": "ec9a7dc6b3c56608eea4ecf34250dd13",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/skills.png": "2bd1870ebedbbd39a41827675a2846c3",
"assets/assets/images/skills1.png": "77752281625f377820cdc5de7e66512c",
"assets/assets/images/skills2.png": "5849f99db0aaf1026199cd184087deae",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/FontManifest.json": "a78f950d25c1e29b92a4a309465e60cd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "5df1bc332093a744db1727c7abf27111",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/logo-aerium-1.png": "c9c1749b275f61ebc563d6596ccf2569",
"icons/logo-aerium-2.png": "58b131c1e81194452cb702693c040a92",
"index.html": "0ecb35567ad4e404d39e54c81eeef8f2",
"/": "0ecb35567ad4e404d39e54c81eeef8f2",
"main.dart.js": "a54ab6fb509ba1da21c31a0ddd542959",
"manifest.json": "603fbc6854b7f4afae3b4b7fc7be4bc0",
"version.json": "3906fc5d38199c243ab81a45fee32c66"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
