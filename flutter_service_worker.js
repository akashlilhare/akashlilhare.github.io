'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "73a7facf67b6f9484a8386672b9256ed",
".git/config": "a472fe93a54dc1f0409fbc5f5b2f543f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "e27830aed93cec96f13c54b1048d453c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "345bb417cd18b10b73b664fef3a9dfa7",
".git/logs/refs/heads/main": "dee68c73e315c9dcf22196d96345200e",
".git/logs/refs/remotes/origin/main": "02ccf773401cac0f26cfa2e4136f7c3e",
".git/objects/00/e92ced0a13b7bbc4889eb041e279964b6c4e42": "b4bf660a04324b9cc77b69633113831e",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "fd4ef62e3de637b2e51ef92caf1601d7",
".git/objects/0c/e3f263d029abe77b326d26dc6b9df74c1c081e": "214c3201eadbfe8773286d92a40defd5",
".git/objects/11/3d21bdcd03bee507cee2f81eee7375d651935a": "29700cf9c35aa2a3eaaa18566727eb40",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "b3781133604d26e4cdb145dcc68d0ac2",
".git/objects/12/18034591d3e60b435c379c554959f37ae7fa69": "0007fec98c30b16cee47f5fafeaa5886",
".git/objects/14/44a672b0b1a9c5e55371c4312ace9c40e2a267": "c9623f2f4d271e410c795e74d3959b90",
".git/objects/15/c3fd4cbca7f05664bd1881f3a52e2a1c6763e6": "258328b09a4709db1c27899fb015793c",
".git/objects/1d/2c49a561b9fe739dff6c00fb9836b797af7b92": "7b0c872939d0a6e69f89cdfafc6d9976",
".git/objects/1e/65c18e0fd33657baf6dc4eb54a4d48f2788d87": "23593f334c7f2a8bab624ec8e24f7d30",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "acb5fd748aa46d54ae30a923f218cb1a",
".git/objects/2a/4b5434e0f05e31d533bb94c4c964bc061e00e2": "df4c94802a16450cad0783d647e1bdae",
".git/objects/2a/f476e46e2022948672bb33bd8b7f4c76e8f327": "bca8187777295b7671408de816d9f7f1",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "733ddcf1f8467729f0dab00912add93d",
".git/objects/2f/99285cb47b5a6debc10b47fd18c91fe552ae68": "fbd4e0af46d27c3bbb39a5638aca7b75",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "352867978a346c506bb3faab4ed092f0",
".git/objects/32/f01fbaadf09c7573f90792fc2a79abee5daed3": "73c6e8677eeb1160a089ae41571b0eee",
".git/objects/3a/eead9da1a65a4c365cb4f421bb01f8ce4ebe12": "ecacf6168a69b9ea909b443f5622f141",
".git/objects/3c/344ce1aba2bdbdaf53519db76850472b76828c": "1bf35a4adf8b240d57128855572b2faa",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "dddca3f1373f3dc9a3da1c1e3b0991bc",
".git/objects/3f/072558d6abf22cfd401c8bb590c7979635f041": "989cc4b5e763808f70e922914ea702c4",
".git/objects/41/346ee1bff59d2d2581758e074edfd840f4dc5d": "60e6356b9cf15ebdecfefd27db070c6f",
".git/objects/41/6266f8cd24e6499b4e54d428cbc8bba26071da": "07a439747a2c43d532d152fbd03b0f9e",
".git/objects/43/1cb6c0007f9b28879e7d3513b101a61c813c38": "45b9a32ab4a861a30bb3425b297ecca1",
".git/objects/44/53e4fd34d7242573c274559d146f79eb3c9246": "d6dad5f01e5e5c74481c1f76e46ffecf",
".git/objects/44/ebd21886fd04c17207ee5ccfbaddc74c7b99df": "935e603b3bf198c2b97d3ea39df1f842",
".git/objects/49/1325bb522d6793a3a8f8f9f002102c4ce4497c": "60a8835873414423d080a92acf437308",
".git/objects/52/eb7de8be676197c9851224287e9d7d7e49b723": "4c0921262a82451d7f950196cd5fcaea",
".git/objects/53/2467afddb8a0d1d4240ba1386fd3121f70322b": "60e925a213080311dc43b115c962737b",
".git/objects/5a/587d2ba85ca2289f35f0180eaf35a27a4108b9": "35e21b1d8940fe4b8e7b6e84db57c40e",
".git/objects/60/6da2761ff62994a6b6a7e4c8810504ee4a2084": "0044813fefa05e66e90c07a59b868162",
".git/objects/60/c3ef73ee68cf9cbe5640912ec4d23f3b112f20": "1995c22fa3631da0681ce4223a9188ed",
".git/objects/61/b2c5ec7be8abf88e20432146890b87803c14f3": "7b4c7eb003c40ede7fafc646996813e1",
".git/objects/68/b6d881d778fd2e94b9f011219e8e1919159539": "cda892838de22b6cc1cbcc1fce02f675",
".git/objects/69/7c2b9b0cb1f8e80ba7bc1f065b6091122d4923": "46adba942446144636f1a8a9848c9aba",
".git/objects/6d/f4d689fb40c76cb01286cc1b2f7e83ab5d8f6e": "4d8cee4be8f84287cc418a933e607aea",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "246e3e2b7e888b83fa64eaff60e2ff86",
".git/objects/7b/c4f3d0ba9ab5d9f6e34964c5491ff081510ac9": "c6c83f18217c92350d321af8f3c65ee1",
".git/objects/7b/f97cbc913948164930e17c58f1e63441c4d839": "78e6ab150de959992e2289394e55c5c2",
".git/objects/80/84e1ede2b7d4a90425501aa8a06201683523c3": "080bc7dcb2ddc8835d3a316155b27c43",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "bffa5ae7d204cf64d894d3cd7b0af05c",
".git/objects/83/752ebd71b9b8cb28909cf72a761a1bb0d85dec": "0cb350e913ec50626fd308d5ef8d35ca",
".git/objects/85/0da31235ecdbbc6866ccaa3062ba3f43df12e6": "f6a26806440b71179777ab8c76fe17ff",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/98335d14c91cb5735862b3f4722245b56e7711": "478836cb562b0e367042f97d127667a8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/91/780ba123b929883ceeff1d68ce8d5e49b436d8": "15520b842bb3b606d790431d2a022e2c",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "fe82cb5d1dc87fa940fe30e6a69718f7",
".git/objects/95/785f27381a6a428a4e70a6553cc2539c7423cc": "d793865bea00df616aa405fc1623fd84",
".git/objects/99/5bfbf8d502df5802e2e0dd996190c75d76e7a3": "3aa1c53af3b108b8971fb3801917c327",
".git/objects/9c/9e6f17915e23049489646f54e63db7a1344dbe": "c0f35d142428788c4e0712e0abe52f44",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "d3184f8d69b8aa198a5a7a210764ede9",
".git/objects/a3/fd7f6ed19e660065eab656a1f17ec3233d495c": "02a66e7bc593625e2ab59cbe15cf5112",
".git/objects/a7/ca49f3308cd7c4aff360d44536efaf45cbfad6": "2ea34385faf56057f51906c2c39ccd47",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "74a5ec35adc4e11c71619fa7b961b7d6",
".git/objects/aa/1657873aecd9eec8d2c3ebedbe15a958c09363": "b78c1f678b08534c8e9b797b5a9dd865",
".git/objects/aa/69c512149d62a376898b558e8bcbdb23ac769e": "fa646ac8189ecc9ce0dab553e4d3a674",
".git/objects/ab/fd4eafe4d80d83c1a1f96c97786bfd50aea4a1": "f57d6f94bcc82e07cffc2e91cf5096cd",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "8743e406ba04f7d2151b690cfec2c95f",
".git/objects/b1/d42efdc5473e87d7b0f349e91a9ce48af52527": "6646639ced6a9fefbfc253b6861b47f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "4baa6499fc13a25b33f8a73f13a4c9ec",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/bc/d28976a5770b78c9f3dd85946108f3e14553f4": "1140b4c9cba0a9ccce4c62e6f83c5fe9",
".git/objects/bd/6b933c761ac29da575857897d34e03ae4ae1a4": "35fb2cd34efb2b0696fb46a119abbcf7",
".git/objects/c9/862f584963c3ad43af0c96a1f7598be726bba9": "30f8c56c90c7da18cf1b09c809427f24",
".git/objects/cc/b47d2223aab7dc27f09ef85c6b6576f7e1bbba": "84dbada2fcb21a64c936876c95209ca5",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "3bedc9ee97a529723c645f042ebffb23",
".git/objects/d0/02586e9969d70712ec483e22ecb81854356710": "f5a9894cbe1810e2f417b2660113123d",
".git/objects/d1/ce529a5dda8f120b0cec789e71f3d3cded5147": "e1b4e34f45f5651b21791bca32566fe5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d7/f2599e0a16ee5861cb34662fec5470175cd371": "ee909116af71d0f4eb11e1ee117fe4cf",
".git/objects/da/84150a37f3f17626b2a79a610bc7298a373622": "89c102b332700752fd4ac0244c0ea67a",
".git/objects/da/b26a7806b7417057cb72ec0d6b63a5291b7264": "290a21fc3ac4517ee109f8faa91f612a",
".git/objects/dc/620896dd6942d3a1b65348e6540daa608c54c9": "87caef9a5da1700286b1e0cc357667f3",
".git/objects/de/7b8d18443bbd6ffc5a7e38a1f428d6364c9a6a": "dce800fe9478e8f5c66b08661358b548",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "b1bfda8eb29e326a32fc89e9c85ae8dd",
".git/objects/e8/3802159615945d0454d9082c48666b2a1505f2": "9e61d2a2b2baeef9fb03cca8e61f49a4",
".git/objects/e9/1606cb88a4205b8058bd968224a813583aac3a": "498a8d9aa9949b50ca275bb8344562da",
".git/objects/ea/2c8ae0e2209d91b6fd0eaca506992ae9d495cc": "228e79c58e8e36e9a4a811d3ebc77c5b",
".git/objects/ea/a14815272d3d6191691918b469a55e7683469e": "da47003a90211400b1a1a05d45d34105",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f4/0cacd5c6a9e91153e1118ce9de3ba673c215b2": "a1771b4fc91f8d49c4add194bb6ac796",
".git/objects/f5/8aa962992dd289f5645098666bae5b281d8e19": "86ee0abea46106292e066366a2a28df4",
".git/objects/f6/0d1da82a2c7b7445494e21182e7dd7ef460815": "663b03869e8d2c134a35155c8c25f246",
".git/objects/f6/95b62af059bb24ffcf18689823208873f702ca": "9c74f60ab9c71978a0248b554cca9bf3",
".git/objects/fa/04ad7ac03fb882ec786d840e04ba43af5a65ee": "ac646d50d76b5d37b24097779d7d496d",
".git/objects/fb/c728112a1fe84b798b87facfe63266407d0db4": "3b0e559619356d89cbb4ccd1816aa089",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "bcc060f0a05fdcc2b0dd8d83914b04ff",
".git/refs/heads/main": "72460f111b59110b2419fc66d3a3a69e",
".git/refs/remotes/origin/main": "72460f111b59110b2419fc66d3a3a69e",
"assets/AssetManifest.json": "ab9dd0ae1ee5b7e13cc0b4ce5624ed2d",
"assets/assets/dev1.gif": "0f2748c6d9232abc3977dcd2db8af9c2",
"assets/assets/dev2.gif": "b289c37290212e2ae3c2d60dbeded16c",
"assets/assets/dev3.gif": "c7f8b1214b6d3d01b698819c4d677ab3",
"assets/assets/dev4.gif": "606f3e3478a0d88a3193ca4d8c0399df",
"assets/assets/dev6.gif": "82b7314fe96c4a2d8f3088207a4afd8d",
"assets/assets/devloper.gif": "03a89c7e9ddcf097525ec86c5d9dea72",
"assets/assets/dino.gif": "25ba86f1f8196349683ab5c47d3144eb",
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
"assets/NOTICES": "8c6131a3c00b6a93bba0a903473baf1d",
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
"index.html": "5ca28dae5af2626e830c821d2e58e8a5",
"/": "5ca28dae5af2626e830c821d2e58e8a5",
"main.dart.js": "c72dc67f9cebe4f9f8406581016b406c",
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
