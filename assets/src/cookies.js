function Cookies() {
  
  this.init = function () {
    const self = this;

    //self.deleteCookie('user_cookie_consent');
    //self.deleteCookie('user_cookie_analtics');

    let consent = self.getCookie('user_cookie_consent');
  
    let consentNotice = document.querySelector('#cookieNotice');

    if(consentNotice) { 
      let consentButton = document.querySelector('#cookieAccept');

      if(!consent) {
        consentNotice.classList.remove('hidden');
        consentNotice.classList.add('block');
      }

      if(!!consentButton)
      consentButton.addEventListener('click', function (e) {
        e.preventDefault()
        self.acceptCookieConsent();
      })
    }

  }
  // Create cookie
  this.setCookie = function(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

// Delete cookie
this.deleteCookie = function(cname) {
  const d = new Date();
  d.setTime(d.getTime() + (24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
this.getCookie = function (cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

// Set cookie consent
this.acceptCookieConsent = function (){
  const self = this

   document.getElementById("cookieNotice").classList.add("hidden"); 
   var val = document.querySelector('input[name=cookie_analytical]').checked;
   self.setCookie('user_cookie_consent', 1, 30);

   if(val) {
      self.setCookie('user_cookie_analtics', 1, 30);
   } 

 }

}

window.cookies = new Cookies
export default new Cookies(); 