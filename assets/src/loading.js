
import 'js-loading-overlay'

function Loading() {
  
  this.init = function () {
    const self = this;

  }

// Delete cookie
this.show = function(container,options) {

  if(!container) 
   container = null;

  var configs = {

    'overlayOpacity': 0.2,
    'spinnerIcon': 'ball-clip-rotate',
    'spinnerColor': 'inherit',
    'spinnerSize': '1x',
    'overlayIDName': 'overlay',
    'spinnerIDName': 'spinner',
    'offsetY': 0,
    'offsetX': 0,
    'lockScroll': false,
    'containerID': container,
    'overlayZIndex': 10 
  };


  Object.assign(configs,options,configs);
  JsLoadingOverlay.show(configs);

}

this.hide = function() {

  JsLoadingOverlay.hide();

}


}

window.loading = new Loading
export default new Loading(); 