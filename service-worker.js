if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const c=e=>a(e,r),b={module:{uri:r},exports:d,require:c};s[r]=Promise.all(f.map((e=>b[e]||c(e)))).then((e=>(i(...e),d)))}}define(["./workbox-2572b17b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Mini Projects"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.ffb14985.js",revision:"030c791f11954fe91679c74e54a64155"},{url:"assets/404.html.0c8252b8.js",revision:"d64b20567ce888f90e08ec9acbdd81f9"},{url:"assets/404.html.a8e3cb07.js",revision:"8dbd2edabdabe6bc3d8d4c10677ba8b3"},{url:"assets/about.html.9e26e861.js",revision:"4502f661b3e6367bb4e4ba895859a965"},{url:"assets/about.html.bf504f17.js",revision:"b1eae8db1875213ebdec1b0120a8759c"},{url:"assets/about.html.ca732d02.js",revision:"4502f661b3e6367bb4e4ba895859a965"},{url:"assets/about.html.d34c6aaf.js",revision:"2cfc2222adcb223e7f409eff5a174735"},{url:"assets/app.bd302178.js",revision:"2bd0e55abfa434f579d7274ba19f1c9a"},{url:"assets/auto.esm.15d52109.js",revision:"3005710dc3beaf11158e79fe70a4c0aa"},{url:"assets/Blog.96c37d7d.js",revision:"46b01415e299f917a024c40e78504bd2"},{url:"assets/example.html.b8c44f46.js",revision:"e6a7a47d00c83f662bee8d327d568c8f"},{url:"assets/example.html.d7de51be.js",revision:"6cb56f0777139a206e8b77c858f750fc"},{url:"assets/giscus.es.d2953791.js",revision:"c74b717a7906a84e4a2b2b6ba19b0954"},{url:"assets/highlight.esm.d982e650.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/index.1842ee54.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.html.023d4c87.js",revision:"7e8eb5bb1accfe5f06345414a4fdaf8b"},{url:"assets/index.html.0319d1c3.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.05f66ce3.js",revision:"cf84014b62c3406e0f06bebef4791c03"},{url:"assets/index.html.0b6e1ecb.js",revision:"07395fd06acf367b0386c755e00d9e50"},{url:"assets/index.html.1174fbbd.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.1331f6ca.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.1d9aa380.js",revision:"70c049968202f79de1663c13630b6263"},{url:"assets/index.html.1e315145.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.275fb664.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.2a02e649.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.347e66d5.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.3d252bec.js",revision:"cccd3912dce66cf5196b72e65ef65489"},{url:"assets/index.html.436433ee.js",revision:"396dbce77c712af40ed3c184a3f66012"},{url:"assets/index.html.43ac646f.js",revision:"41394e9232013d3c06f62bf87c9a2a41"},{url:"assets/index.html.48e784f5.js",revision:"2d700c549d1b9f338515e645f8ef4410"},{url:"assets/index.html.514b72a3.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.579ccf47.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.5ab8770d.js",revision:"29dc672ffae16e2a42a4248bc068a964"},{url:"assets/index.html.7308a608.js",revision:"14f6ac3f08b4b3008e5c9a3b0f1bcdd6"},{url:"assets/index.html.754738e0.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.8a33973c.js",revision:"702d1af00d02e5b62b615210d6c2cbfb"},{url:"assets/index.html.97a670e2.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.97efbe5a.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.b53640bf.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.c73d2264.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.d11f2db8.js",revision:"b7841f38d87a2716c90758ffb176c8ae"},{url:"assets/index.html.d4953529.js",revision:"d2a3701c8e174a8688edc54018671930"},{url:"assets/index.html.d4e0061e.js",revision:"0c1060d1fcfd4df4e732c9dd3d4421a6"},{url:"assets/index.html.d5cc08ad.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.da6c3a69.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.e845cdce.js",revision:"422a22bc9c0c8e55ccf5a6798d45d6c4"},{url:"assets/index.html.eed3099f.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.fb619bb8.js",revision:"1db980f3b2941eeb2530d028fefee43e"},{url:"assets/index.html.ff7ccc29.js",revision:"61b82e3e0017c7795acd42db4d893fcf"},{url:"assets/Layout.ca6f3d3e.js",revision:"1cd3ce2b164290ff4f0655a5eb47fdbe"},{url:"assets/markdown.esm.832a189d.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/math.esm.a3f84b6f.js",revision:"cbf844f27edbc061c86ae840d70389f6"},{url:"assets/mermaid.esm.min.95aabeb7.js",revision:"dff54a3d503ff2004c411be3e2992fc9"},{url:"assets/mini-project.html.3183d6b2.js",revision:"7e30b7921d85e8a00ce53a67f0f345c6"},{url:"assets/mini-project.html.389a833c.js",revision:"45d5fecfba771c26968cfb5faa78a6be"},{url:"assets/mini-project.html.3fb14b3c.js",revision:"85768005eff8f8b3b4278474e60ab5be"},{url:"assets/mini-project.html.e0ab487e.js",revision:"85768005eff8f8b3b4278474e60ab5be"},{url:"assets/notes.esm.3c361cb7.js",revision:"eda65c99450fe02da90bde90cc614a56"},{url:"assets/photoswipe.esm.92018b73.js",revision:"442a3264b1db7eb84ffc880407e7565d"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/reveal.esm.b96f05d8.js",revision:"f78a424fad98faac5d5ca8ebfbebe94b"},{url:"assets/search.esm.80da4a02.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/SkipLink.d9eb745a.js",revision:"c5e55c3770a70d9ac988f589e2e7eeef"},{url:"assets/Slide.06a108eb.js",revision:"5575840afbaf75caf91130780a2692e8"},{url:"assets/style.8727ade9.css",revision:"8b7d89b1b641c9394e8f80843d1009c2"},{url:"assets/zoom.esm.8514a202.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"logo.svg",revision:"3faa3fe46329be1466bcd8e46a57eaee"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"index.html",revision:"236c04c2fe769515fa64681c79f5d914"},{url:"404.html",revision:"b49633014f7b9bda298c5480c306b783"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
