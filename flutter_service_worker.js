'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6db3f91de318ea83c52e2b63313ba30c",
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
".git/index": "3479daf9e76978832e2ce87dd332c09a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "edc1f28c93f4143a59d2da34958e164b",
".git/logs/refs/heads/main": "d6ad637b3e77bba29691323fec15ebe6",
".git/logs/refs/remotes/origin/main": "cf8d210ad8027f230f20751122c06c23",
".git/objects/00/e92ced0a13b7bbc4889eb041e279964b6c4e42": "b4bf660a04324b9cc77b69633113831e",
".git/objects/07/c58d717ef9afa8747ee52e7583942fe9fbf35c": "496e9cc101f2f6471dddf64b1964839b",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "fd4ef62e3de637b2e51ef92caf1601d7",
".git/objects/0c/e3f263d029abe77b326d26dc6b9df74c1c081e": "214c3201eadbfe8773286d92a40defd5",
".git/objects/0f/eb08ff67588f8c321acd906adbf7cddd6ed7cd": "4c62a47739c0d16ba9e7f6764fc07bb0",
".git/objects/11/11316e5caaf4caf8dc1aa8b2fc881200d0e65f": "dc69e60ec6612a408470f0b25ff8de41",
".git/objects/11/3d21bdcd03bee507cee2f81eee7375d651935a": "29700cf9c35aa2a3eaaa18566727eb40",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "b3781133604d26e4cdb145dcc68d0ac2",
".git/objects/12/18034591d3e60b435c379c554959f37ae7fa69": "0007fec98c30b16cee47f5fafeaa5886",
".git/objects/14/44a672b0b1a9c5e55371c4312ace9c40e2a267": "c9623f2f4d271e410c795e74d3959b90",
".git/objects/15/88032d2fc714df7fff95b26f7aa26659fb1c02": "d6606324df0afce62a5146726b2f82b5",
".git/objects/15/c3fd4cbca7f05664bd1881f3a52e2a1c6763e6": "258328b09a4709db1c27899fb015793c",
".git/objects/15/f72f9f7218ccdea9be2f90c8ad45edb88b7111": "9bc3b70bd134ddabfc62418b6547c854",
".git/objects/1d/2c49a561b9fe739dff6c00fb9836b797af7b92": "7b0c872939d0a6e69f89cdfafc6d9976",
".git/objects/1e/651827c0f596466ef822cfb3cd17ab50d776e4": "6d455eca8eb6f07211a761adacb4e672",
".git/objects/1e/65c18e0fd33657baf6dc4eb54a4d48f2788d87": "23593f334c7f2a8bab624ec8e24f7d30",
".git/objects/1f/98ed6c37e9140e852249a0e4f8dba309b3ba92": "0434ff9f1c7408e9c77a0f8d9922e856",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "acb5fd748aa46d54ae30a923f218cb1a",
".git/objects/22/cc4312d1baf77937c76d7630245fc3ace5b926": "c06a578844247994da5628966209b0bb",
".git/objects/25/4fa6aee31cec67b6e6f3c6cea575c993734599": "4fa4a7169db58e630b3eff440c3a5653",
".git/objects/27/be5c65d06a46e9650600bf5059aecc8f6a33ef": "63a0b152d2edefabe1930726f9f8ebb6",
".git/objects/2a/4b5434e0f05e31d533bb94c4c964bc061e00e2": "df4c94802a16450cad0783d647e1bdae",
".git/objects/2a/f476e46e2022948672bb33bd8b7f4c76e8f327": "bca8187777295b7671408de816d9f7f1",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "733ddcf1f8467729f0dab00912add93d",
".git/objects/2f/99285cb47b5a6debc10b47fd18c91fe552ae68": "fbd4e0af46d27c3bbb39a5638aca7b75",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "352867978a346c506bb3faab4ed092f0",
".git/objects/32/7c3e6c4255cd2a08d3dd6462397a18b1c9d709": "932febb8bbf426a91f8e5ccb68128a7a",
".git/objects/32/f01fbaadf09c7573f90792fc2a79abee5daed3": "73c6e8677eeb1160a089ae41571b0eee",
".git/objects/33/e311984bf02524dbe07598563efd494acfb2d0": "486714030b0c24b7eff7145637ec329e",
".git/objects/34/cb5a117d76fbf377891a565db00411c59d9858": "672741f6520e9b47a2b725afac3c8d55",
".git/objects/38/894c8ae76d077917fd0401b58b92deaa160f53": "ded002a3336503e1a2dbe3ac63a26d16",
".git/objects/3a/eead9da1a65a4c365cb4f421bb01f8ce4ebe12": "ecacf6168a69b9ea909b443f5622f141",
".git/objects/3c/344ce1aba2bdbdaf53519db76850472b76828c": "1bf35a4adf8b240d57128855572b2faa",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "dddca3f1373f3dc9a3da1c1e3b0991bc",
".git/objects/3f/072558d6abf22cfd401c8bb590c7979635f041": "989cc4b5e763808f70e922914ea702c4",
".git/objects/40/456d84bcffc2c6aa8d7d908f4c8ffefd5135ec": "d50581817dfcf9e5d3dd951396d2d617",
".git/objects/40/f63e5b3d0992134af00d97ae8aae75a2c26915": "6aab155ca66834923d6bcbb283949151",
".git/objects/41/346ee1bff59d2d2581758e074edfd840f4dc5d": "60e6356b9cf15ebdecfefd27db070c6f",
".git/objects/41/6266f8cd24e6499b4e54d428cbc8bba26071da": "07a439747a2c43d532d152fbd03b0f9e",
".git/objects/43/1cb6c0007f9b28879e7d3513b101a61c813c38": "45b9a32ab4a861a30bb3425b297ecca1",
".git/objects/44/45dbc759e98eb1b9a90c0d8210798e2698bd3b": "2325187a8449d13f114029fd18e58335",
".git/objects/44/53e4fd34d7242573c274559d146f79eb3c9246": "d6dad5f01e5e5c74481c1f76e46ffecf",
".git/objects/44/ebd21886fd04c17207ee5ccfbaddc74c7b99df": "935e603b3bf198c2b97d3ea39df1f842",
".git/objects/46/b4520378b7354efff49dc59c8bfee323dc3cbc": "da588bca70018086f6145877d7dde8fd",
".git/objects/49/1325bb522d6793a3a8f8f9f002102c4ce4497c": "60a8835873414423d080a92acf437308",
".git/objects/49/b1924395218b5eb30c4da95c426f5261127633": "c1a8478a971efc32c25e96429090ec05",
".git/objects/52/eb7de8be676197c9851224287e9d7d7e49b723": "4c0921262a82451d7f950196cd5fcaea",
".git/objects/53/2467afddb8a0d1d4240ba1386fd3121f70322b": "60e925a213080311dc43b115c962737b",
".git/objects/54/e360a148566e1132a1ebd0aff4cbe4ccfa94ef": "a6f8c8493fa8667503eb9eeb1d3ace33",
".git/objects/5a/587d2ba85ca2289f35f0180eaf35a27a4108b9": "35e21b1d8940fe4b8e7b6e84db57c40e",
".git/objects/5c/255575bbb8e194e6c9b9875b35c666eb7467cf": "51ea6b1d02da8499883c5155164cb854",
".git/objects/5d/048d4d8df5bf31b937d8804516957e0d78df15": "e566a9369554be24ec75299ccd2e6cfa",
".git/objects/5d/ad30b0c067767e1b2f7524b9caa768f1906df9": "8bbd62438cd730cc805bfddd1a051ca9",
".git/objects/60/6da2761ff62994a6b6a7e4c8810504ee4a2084": "0044813fefa05e66e90c07a59b868162",
".git/objects/60/c3ef73ee68cf9cbe5640912ec4d23f3b112f20": "1995c22fa3631da0681ce4223a9188ed",
".git/objects/61/b2c5ec7be8abf88e20432146890b87803c14f3": "7b4c7eb003c40ede7fafc646996813e1",
".git/objects/63/85f3ac6b0e95d1ee16781166348a9a2e0f26f9": "5ad422ba0f694c16fe2e392a03c089cb",
".git/objects/63/c609fd69574158c52d9a6682b2056101671339": "1175b31d12983e2ae97d2ff7947a75d1",
".git/objects/65/fba56ec3d270ba70ce2b0910b22f2ad4325484": "808b81eb15328861c7e9901d552dc15f",
".git/objects/68/b6d881d778fd2e94b9f011219e8e1919159539": "cda892838de22b6cc1cbcc1fce02f675",
".git/objects/69/7c2b9b0cb1f8e80ba7bc1f065b6091122d4923": "46adba942446144636f1a8a9848c9aba",
".git/objects/6d/f4d689fb40c76cb01286cc1b2f7e83ab5d8f6e": "4d8cee4be8f84287cc418a933e607aea",
".git/objects/77/55c0f905c740cd96941e9aac51879adb21f6f2": "7deceeea8ce6bb857293e5a3bac9e7d2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "246e3e2b7e888b83fa64eaff60e2ff86",
".git/objects/7b/c4f3d0ba9ab5d9f6e34964c5491ff081510ac9": "c6c83f18217c92350d321af8f3c65ee1",
".git/objects/7b/f97cbc913948164930e17c58f1e63441c4d839": "78e6ab150de959992e2289394e55c5c2",
".git/objects/7f/37cd6fbed25a1068ccde3182375cd8a854ab17": "2eb86cc6c1097c024b2e1f2c6f7e6088",
".git/objects/80/84e1ede2b7d4a90425501aa8a06201683523c3": "080bc7dcb2ddc8835d3a316155b27c43",
".git/objects/80/eb1c86eebcdb08a5bdd921b5fdeeb46d261118": "d27f2fce63f9fc431bf41bf011566f79",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "bffa5ae7d204cf64d894d3cd7b0af05c",
".git/objects/83/752ebd71b9b8cb28909cf72a761a1bb0d85dec": "0cb350e913ec50626fd308d5ef8d35ca",
".git/objects/83/c7a74ff2d686191289a51f9b08b09095671fee": "92691db5c443a13e8cb210590566eaf1",
".git/objects/85/0da31235ecdbbc6866ccaa3062ba3f43df12e6": "f6a26806440b71179777ab8c76fe17ff",
".git/objects/85/f74a14f64ffa35b49e3bb8a184de23a4218c55": "90c72a98609864977f3a02d90a78416d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/98335d14c91cb5735862b3f4722245b56e7711": "478836cb562b0e367042f97d127667a8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8d/0a9ba742ed9852f44542cbec16760200381765": "fd39b9c893df07d7a651053a734ef265",
".git/objects/8d/f7d2512c4750ea7d51234e4187538765a9f8ca": "1f30d78a499042ea45a496662ec0ee38",
".git/objects/90/80be6cf995aa4e3dc5252a07ed5ae6e18d95ea": "60b840c0f02365af78eac6c281a940c0",
".git/objects/91/780ba123b929883ceeff1d68ce8d5e49b436d8": "15520b842bb3b606d790431d2a022e2c",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "fe82cb5d1dc87fa940fe30e6a69718f7",
".git/objects/95/785f27381a6a428a4e70a6553cc2539c7423cc": "d793865bea00df616aa405fc1623fd84",
".git/objects/99/5bfbf8d502df5802e2e0dd996190c75d76e7a3": "3aa1c53af3b108b8971fb3801917c327",
".git/objects/9c/9e6f17915e23049489646f54e63db7a1344dbe": "c0f35d142428788c4e0712e0abe52f44",
".git/objects/9d/e6a55d09d940e730ba9497e3d64ce4319d0e8f": "c2abf3c2d976f4d47d2c74011be70e80",
".git/objects/a0/a049e5aadb6022cc8f8b1d67ecd59bf82121b4": "6513d40fda5bc176432f9a667ba9f163",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "d3184f8d69b8aa198a5a7a210764ede9",
".git/objects/a3/fd7f6ed19e660065eab656a1f17ec3233d495c": "02a66e7bc593625e2ab59cbe15cf5112",
".git/objects/a5/3c61ea82222c12a23b45f628d08a51a136f91f": "025f3602d592a4b55b7ab4f4e6a05a32",
".git/objects/a7/ca49f3308cd7c4aff360d44536efaf45cbfad6": "2ea34385faf56057f51906c2c39ccd47",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "74a5ec35adc4e11c71619fa7b961b7d6",
".git/objects/a9/6c0bac97fa96dbfb0d706da2dd473391b8c30f": "ba14c856b4637523634ac7862c9c48c6",
".git/objects/aa/1657873aecd9eec8d2c3ebedbe15a958c09363": "b78c1f678b08534c8e9b797b5a9dd865",
".git/objects/aa/69c512149d62a376898b558e8bcbdb23ac769e": "fa646ac8189ecc9ce0dab553e4d3a674",
".git/objects/ab/e2bdd27ee5d37197c95b41a2a83e90d6eb676f": "81740d4b4789c59789daf9b5fac432dd",
".git/objects/ab/fd4eafe4d80d83c1a1f96c97786bfd50aea4a1": "f57d6f94bcc82e07cffc2e91cf5096cd",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "8743e406ba04f7d2151b690cfec2c95f",
".git/objects/ae/63fc253e13456846fd3bf350e50a826e4984ef": "a21e9d859ecf43cf986453ec90a8498d",
".git/objects/b1/d42efdc5473e87d7b0f349e91a9ce48af52527": "6646639ced6a9fefbfc253b6861b47f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b7/894ef46d8d2762dc41470c77dab65d98fd2810": "45e2eba2f91626b380621b7cf6811ac2",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "4baa6499fc13a25b33f8a73f13a4c9ec",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/bb/21d72f6e9e03a59a477c2968a0b684860d27f3": "eb0652c7ba979a38e0438fb9b8a92166",
".git/objects/bc/d28976a5770b78c9f3dd85946108f3e14553f4": "1140b4c9cba0a9ccce4c62e6f83c5fe9",
".git/objects/bd/6b933c761ac29da575857897d34e03ae4ae1a4": "35fb2cd34efb2b0696fb46a119abbcf7",
".git/objects/c0/1afe929eacc90b281ab92ec64a1e8d753e1cdb": "9a9f24ded8f11864eb82e3fd403bc0aa",
".git/objects/c4/8df58473d77c8f80121dee4c69a0ecbbfe4417": "84780f63278e38ba898aba8342dbc6ef",
".git/objects/c8/8d3557b854f4e7a06b22d07cf8658e5cac4ff4": "8ca2e037dbf8cf808cfc1d6fee29c53c",
".git/objects/c9/862f584963c3ad43af0c96a1f7598be726bba9": "30f8c56c90c7da18cf1b09c809427f24",
".git/objects/cc/b47d2223aab7dc27f09ef85c6b6576f7e1bbba": "84dbada2fcb21a64c936876c95209ca5",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "3bedc9ee97a529723c645f042ebffb23",
".git/objects/d0/02586e9969d70712ec483e22ecb81854356710": "f5a9894cbe1810e2f417b2660113123d",
".git/objects/d1/ce529a5dda8f120b0cec789e71f3d3cded5147": "e1b4e34f45f5651b21791bca32566fe5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d7/64381b4962db2425486eff5a7d7e0ea747ac20": "27156e799fe617f73b762ffee2f85af4",
".git/objects/d7/f2599e0a16ee5861cb34662fec5470175cd371": "ee909116af71d0f4eb11e1ee117fe4cf",
".git/objects/d8/5c64e2ec066d9784b3e4225bb320b257277f5e": "446b31e70d9458e21eb0bdfd0d3d4b54",
".git/objects/d9/b3dea47dfdbdd418533764ee1c06bd3907b9d7": "b976b575c25ad69352044b69fad6c233",
".git/objects/da/84150a37f3f17626b2a79a610bc7298a373622": "89c102b332700752fd4ac0244c0ea67a",
".git/objects/da/b26a7806b7417057cb72ec0d6b63a5291b7264": "290a21fc3ac4517ee109f8faa91f612a",
".git/objects/dc/620896dd6942d3a1b65348e6540daa608c54c9": "87caef9a5da1700286b1e0cc357667f3",
".git/objects/de/7b8d18443bbd6ffc5a7e38a1f428d6364c9a6a": "dce800fe9478e8f5c66b08661358b548",
".git/objects/df/07b69011d63e56b8d0f4aa1520022e8495e675": "0e77377d128814c9cd08ae8f1e8c97c6",
".git/objects/e2/854136a6aa5ad391087109273cf3ee9b0ec6c0": "27bfbfd1979341d6a5c22f2254bf8c51",
".git/objects/e4/fd16d75fbb8a634d92eb93c5126cd258532498": "33666cb38526947afd11f4602f530fe3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "b1bfda8eb29e326a32fc89e9c85ae8dd",
".git/objects/e6/aaddc169254e5425797f11c717fce084bf424f": "f30bbdd2642329bdc186049c0f1d3a61",
".git/objects/e8/3802159615945d0454d9082c48666b2a1505f2": "9e61d2a2b2baeef9fb03cca8e61f49a4",
".git/objects/e9/1606cb88a4205b8058bd968224a813583aac3a": "498a8d9aa9949b50ca275bb8344562da",
".git/objects/ea/2c8ae0e2209d91b6fd0eaca506992ae9d495cc": "228e79c58e8e36e9a4a811d3ebc77c5b",
".git/objects/ea/a14815272d3d6191691918b469a55e7683469e": "da47003a90211400b1a1a05d45d34105",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f0/4c5896e4603df2e4b1d4229177d351c5f7a278": "3aededba4707c38fafd9e26b306e9b3f",
".git/objects/f4/0cacd5c6a9e91153e1118ce9de3ba673c215b2": "a1771b4fc91f8d49c4add194bb6ac796",
".git/objects/f4/6a93c1d81e73ae1e5f18aa6a759f9e66386e29": "49e2405c5cc2372dc5682dd72ffe4ff6",
".git/objects/f5/8aa962992dd289f5645098666bae5b281d8e19": "86ee0abea46106292e066366a2a28df4",
".git/objects/f5/df8b934ded459d477aa2c04852b706b7564a27": "41c4531babf192d7d92b4b66f01e687c",
".git/objects/f6/0d1da82a2c7b7445494e21182e7dd7ef460815": "663b03869e8d2c134a35155c8c25f246",
".git/objects/f6/95b62af059bb24ffcf18689823208873f702ca": "9c74f60ab9c71978a0248b554cca9bf3",
".git/objects/fa/04ad7ac03fb882ec786d840e04ba43af5a65ee": "ac646d50d76b5d37b24097779d7d496d",
".git/objects/fb/c728112a1fe84b798b87facfe63266407d0db4": "3b0e559619356d89cbb4ccd1816aa089",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "bcc060f0a05fdcc2b0dd8d83914b04ff",
".git/objects/fd/c2f64306e9de2495f24fd992a1c5810172a965": "9212139761aab9992814e04e2747edf0",
".git/objects/fd/f8ecb97c1ade57c0deb9fe00d991400e3d2836": "e7ee5b0602a6a9d1204c630d80cd5d13",
".git/objects/fe/85e41820a85c568d15b3afe34218df303190e4": "877d45a845452bc2c2b089cb1e683bf0",
".git/refs/heads/main": "a5275cd1ed5fe3094f5923009f7e2452",
".git/refs/remotes/origin/main": "a5275cd1ed5fe3094f5923009f7e2452",
"assets/AssetManifest.json": "01c37e18f47232a671ef9f3ac920d499",
"assets/assets/dev3.gif": "c7f8b1214b6d3d01b698819c4d677ab3",
"assets/assets/dev6.gif": "82b7314fe96c4a2d8f3088207a4afd8d",
"assets/assets/developer.gif": "ce8f0a1f308780e5ec63775df9fc61bc",
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
"assets/FontManifest.json": "24636421a941e1a973ed7962700ca341",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "56de2cdf619c135a70378e1499f08c51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.ico": "fbf7a940925d9b2af0af2c7c0c6a3a10",
"icons/Icon-192.png": "5b52a0094329bce4db5b9cb1c8a96410",
"icons/Icon-512.png": "f466d2b0609918790cdb18ef1b964ce8",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "13c650d7849c83703010abe14befbee3",
"/": "13c650d7849c83703010abe14befbee3",
"main.dart.js": "d037809c15d6ff71c495fc3bc2e19221",
"manifest.json": "9d93e02b57534da5d3ad30cda50c0da4",
"version.json": "a13e86862584090201331c92e7086c9d"
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
