// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import { VRInstance } from "react-vr-web";
import * as SimpleRaycaster from "simple-raycaster";

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, "AutomationVR", parent, {
    raycasters: [
      SimpleRaycaster // Add SimpleRaycaster to the options
    ],
    cursorVisibility: "auto", // Add cursorVisibility
    ...options
  });
  vr.start();
  window.playerCamera = vr.player._camera;
  window.vr = vr;
  window.onmousewheel = onRendererMouseWheel;
  return vr;
}

window.ReactVR = { init };



function onRendererMouseWheel(){
  if (event.deltaY > 0 ){
     if(window.playerCamera.zoom  > 1) {
       window.playerCamera.zoom -= 0.1;
       window.playerCamera.updateProjectionMatrix();
      }
   }
   else {
     if(window.playerCamera.zoom < 3) {
      window.playerCamera.zoom += 0.1;
      window.playerCamera.updateProjectionMatrix();
     }
   }
}
