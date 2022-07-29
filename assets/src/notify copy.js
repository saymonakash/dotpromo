
import Toastify from 'toastify-js'

function Notify() {
  
  this.init = function () {
    const self = this;

  }

// Delete cookie
this.show = function(text,newOptions) {

  const options = {
    avatar: "",
    text: "",
    duration: 3000,
    destination: "",
    newWindow: false,
    className:"notification radiant radiant-blue",
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    escapeMarkup:false,
    onClick: function(){} // Callback after click
  };

  options.text = text;

  /* style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }, */

   var arr = {};
   Object.assign(arr,options,newOptions);
   
   Toastify(arr).showToast();
}


}

window.Notify = new Notify;
export default new Notify(); 