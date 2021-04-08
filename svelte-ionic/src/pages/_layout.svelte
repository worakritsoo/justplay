<!-- src/App.svelte -->
<svelte:head>
  <title>Ionic Companion - svelte power!</title>
</svelte:head>

<ion-app>


  <ion-split-pane content-id="main">
    <Menu />
    <div class="ion-page" id="main">
      <slot />
    </div>
  </ion-split-pane>
</ion-app>

<style>
@keyframes shadow-pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 0 135px rgba(0, 0, 0, 0);
  }
}

.pulseSourceViewer {
  border-radius: 50%;
  animation: shadow-pulse 1s infinite;
}
</style>

<script>

import localforage from "localforage";

import Menu from "../components/Menu.svelte";

// source viewer and pulsating class for the FAB
let pulseSourceViewer = false;
localforage.getItem("has-seen-source").then((value) => {
  console.log("has-seen-source", value);
  if (!value) {
    // let's not trigger the user immmediately
    setTimeout(() => {
      pulseSourceViewer = true;
      // and stop the pulse after 1 minute
      setTimeout(() => {
        pulseSourceViewer = false;
      }, 60000);
    }, 20000);
  }
});

</script>
