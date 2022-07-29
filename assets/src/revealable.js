function Revealable() {

  this.el = null,

  this.elTriggers = [],

  this.isOpen = false,

  this.render = (selector, triggerSelector) => {
    this.el = document.querySelector(selector)
    this.elTriggers = document.querySelectorAll(triggerSelector)

    if (!this.el) {
      return
    }
    
    this.initialize()

    this.handleEvent()
  },

  this.initialize = () => {

    if (!this.isOpen) {
      if (window.innerWidth >= 768) {
        var size = this.el.offsetWidth + 'px'
        this.el.style.transform = 'translateX('+ size +')'
      } else {
        var size = this.el.offsetHeight + 'px'
        this.el.style.transform = 'translateY('+ size +')'
      }
    }
  },

  this.handleEvent = (selector = null) => {
    var el = this.el

    // Attach on resize
    this.attachInitializeOnResize()

    // Attach trigger open event
    this.attachTriggerOpen()

    // Attach trigger close event
    this.attachTriggerClose()
  },

  this.attachInitializeOnResize = () => {
    var self = this
    window.onresize = function () {
      self.initialize()
    }
  },

  this.attachTriggerOpen = () => {
    var self = this

    if (!this.elTriggers.length) {
      return
    }

    this.elTriggers.forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault()

        document.body.style.overflow = 'hidden'
        
        self.isOpen = true
  
        if (window.innerWidth >= 768) {
          self.el.style.transform = 'translateX(0px)'
        } else {
          self.el.style.transform = 'translateY(0px)'
        }
      })
    })
  }

  this.attachTriggerClose = () => {
    var self = this
    var revealClose = this.el.querySelector('.revealable-close')
    revealClose.addEventListener('click', e => {
      e.preventDefault()

      document.body.style.overflow = 'auto'

      self.isOpen = false

      // TODO: Conditional width
      var theWidth
      if (window.innerWidth >= 768) {
        theWidth = self.el.offsetWidth +'px'
      } else {
        theWidth = '100%'
      }

      if (window.innerWidth >= 768) {
        self.el.style.transform = 'translateX('+ theWidth +')'
      } else {
        self.el.style.transform = 'translateY('+ theWidth +')'
      }
    })
  }

}

window.revealable = new Revealable

export default new Revealable()
