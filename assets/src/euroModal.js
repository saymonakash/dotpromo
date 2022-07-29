function EuroModal() {
  
  this.init = function () {
    const self = this
    let buttons = document.querySelectorAll('[data-modal-target]')

    this.btnCloseEvent()

    buttons.forEach(btn => {
      
      //console.log('all buttons', btn)

      btn.addEventListener('click', function (e) {
        e.preventDefault()

        let modalSelector = e.target.getAttribute('data-modal-target');
        let remoteUrl = e.target.getAttribute('data-load-remote');

        let modal = document.querySelector(modalSelector);

        modal.style.display = 'block';
        self.backdrop().classList.add('show')
      })
    })


  },

  this.btnCloseEvent = function () {
    const self = this
      document.querySelectorAll('.euro-modal .modal-btn-dismiss').forEach(btn => {
      
      btn.addEventListener('click', function (e) {
        
        e.preventDefault();
        var id = e.target.closest('.euro-modal').getAttribute('id');
        self.close(id);

       
      
      })
    })

    document.querySelectorAll('.euro-modal  [data-dismiss]').forEach(btn => { 
      
      btn.addEventListener('click', function (e) {
        e.preventDefault()
       
        var id = e.target.closest('.euro-modal').getAttribute('id');
        /*  document.querySelector('#'+id).style.display = 'none';
        self.backdrop().classList.remove('show') */

        self.close(id);
      })
    })
    
  },


  this.show = function (element) {
     
    const self = this
    let modal = document.getElementById(element);
    modal.style.display = 'block';
    self.backdrop().classList.add('show')
    self.btnCloseEvent();
  
},

  this.close = function (element) {
     
      const self = this
      let modal = document.getElementById(element);
      modal.style.display = 'none';
      self.backdrop().classList.remove('show');
      modal.querySelector('.modal-content').innerHTML = '';
    
  },

  this.loading = function () {

    if (! document.querySelector('.euro-modal-backdrop')) {
      let createBackdrop = document.createElement('div')
      createBackdrop.className = 'euro-modal-backdrop'
      document.querySelector('body').appendChild(createBackdrop)
      
  
      // attach event
      //console.log('lihat', createBackdrop)
      document.addEventListener('click', function (e) {
        if (e.target.classList.contains('euro-modal')) {
          e.target.style.display = 'none'
          document.querySelector('.euro-modal-backdrop').classList.remove('show')
        }
      })
    }

    return document.querySelector('.euro-modal-backdrop')
  },

  this.backdrop = function () {
    if (! document.querySelector('.euro-modal-backdrop')) {
      let createBackdrop = document.createElement('div')
      createBackdrop.className = 'euro-modal-backdrop'
      document.querySelector('body').appendChild(createBackdrop)
      
      // attach event
      //console.log('lihat', createBackdrop)
      document.addEventListener('click', function (e) {
        if (e.target.classList.contains('euro-modal')) {
          e.target.style.display = 'none'
          document.querySelector('.euro-modal-backdrop').classList.remove('show')
        }
      })
    }

    return document.querySelector('.euro-modal-backdrop')
  }
}

window.euromodal = new EuroModal
export default new EuroModal();