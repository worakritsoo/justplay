
/**
 * @roxi/routify 2.1.2
 * File generated Fri Apr 09 2021 01:39:13 GMT+0700 (เวลาอินโดจีน)
 */

export const __version = "2.1.2"
export const __timestamp = "2021-04-08T18:39:13.659Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "C:/Users/Worakrit/Desktop/justplay/svelte-ionic/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/Worakrit/Desktop/justplay/svelte-ionic/src/pages/_fallback.svelte",
      "importPath": "../pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/Worakrit/Desktop/justplay/svelte-ionic/src/pages/index.svelte",
      "importPath": "../pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "ionic",
      "filepath": "/ionic",
      "name": "ionic",
      "ext": "",
      "badExt": false,
      "absolutePath": "C:/Users/Worakrit/Desktop/justplay/svelte-ionic/src/pages/ionic",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "About.svelte",
          "filepath": "/ionic/About.svelte",
          "name": "About",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/Worakrit/Desktop/justplay/svelte-ionic/src/pages/ionic/About.svelte",
          "importPath": "../pages/ionic/About.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/ionic/About",
          "id": "_ionic_About",
          "component": () => import('../pages/ionic/About.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "Profile.svelte",
          "filepath": "/ionic/Profile.svelte",
          "name": "Profile",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/Worakrit/Desktop/justplay/svelte-ionic/src/pages/ionic/Profile.svelte",
          "importPath": "../pages/ionic/Profile.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/ionic/Profile",
          "id": "_ionic_Profile",
          "component": () => import('../pages/ionic/Profile.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "Search.svelte",
          "filepath": "/ionic/Search.svelte",
          "name": "Search",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/Worakrit/Desktop/justplay/svelte-ionic/src/pages/ionic/Search.svelte",
          "importPath": "../pages/ionic/Search.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/ionic/Search",
          "id": "_ionic_Search",
          "component": () => import('../pages/ionic/Search.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/ionic"
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../pages/_layout.svelte",
  "meta": {
    "preload": false,
    "prerender": true,
    "precache-order": false,
    "precache-proximity": true,
    "recursive": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

