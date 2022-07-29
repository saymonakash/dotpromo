function StackMenu() {

  this.rootEl = null,

  this.getStackRoot = function() {
    return this.rootEl.querySelector('.stack-menu_list.root')
  },
  
  this.getStackList = function() {
    return this.rootEl.querySelector('.stack-menu_list')
  },

  this.handleEventClickOutside = function () {
    document.addEventListener('click', (e) => {
      
      if (window.innerWidth <= 640) {
        return
      }

      let activeDropdown = document.querySelector('.stack-menu_list.active')
      if (! activeDropdown) {
        // console.log('no dropdown open found')
        return
      }

      if (activeDropdown && activeDropdown.contains(e.target)) {
        // console.log('click inside dropdown prend')
        return
      }

      if (document.querySelector('.stack-menu_list.root').contains(e.target)) {
        // console.log('click inside root prend')
        return
      }

      // console.log('click really outside', e.target)

      // Logic for hide
      document.querySelectorAll('.stack-menu_list.active').forEach(item => {
        item.classList.remove('active')
      })
      
    })
  },

  this.render = function(selector) {
    var self = this
    this.rootEl = document.querySelector(selector)
    if (!this.rootEl) {
      return
    }

    var stackRoot = this.getStackRoot()
    this.handleLoop(stackRoot)
  },

  this.handleLoop = function (stackList) {
    var self = this
    var stackListItems = stackList.querySelectorAll(':scope > li')

    stackListItems.forEach(liElement => {
      var hasStack = liElement.querySelector('.stack-menu_list')

      if (hasStack) {
        // info for development further
        // console.log('register event', stackList)
        
        // 1. expand
        this.handleEventExpand(liElement)

        // 2. add `back` event
        var childStackList = liElement.querySelector(':scope > .stack-menu_list')
        this.handleEventHide(childStackList.querySelector(':scope > li > .back'))

        // 3. deep loop
        self.handleLoop(childStackList)
      }
    })
  },

  this.handleEventExpand = function (liElement) {
    var parent = liElement.parentElement
    var stackList = liElement.querySelector(':scope > .stack-menu_list')
    var link = liElement.querySelector(':scope > a')
    link.addEventListener('click', function (e) {
      e.preventDefault()

      // Handle toggle
      if (stackList.classList.contains('active')) {
        return stackList.classList.remove('active')
      }
      
      stackList.classList.add('active')

      // Handle on desktop
      /* if (window.innerWidth >= 640) {
        parent.querySelectorAll(':scope > li').forEach(item => {

          // 1. check if current liElement is not first child
          if (! liElement.parentElement.classList.contains('root')) {
            if (item != liElement) {
              link.classList.add('hidden')
              item.classList.add('hidden')
            }
          }

        })
      } */

      // Handle on mobile
    
       /*  parent.querySelectorAll(':scope > li').forEach(item => {

          // Hide all others liElement
          if (item != liElement) {
            link.classList.add('hidden')
            item.classList.add('hidden')
          }
        }) */
     

    })
  },

  this.handleEventHide = function (linkBack) {
    linkBack.addEventListener('click', function (e) {
      e.preventDefault()
      var stackList = linkBack.parentElement.parentElement
      stackList.classList.remove('active')

      stackList.parentElement.parentElement.querySelectorAll(':scope > li').forEach(function (item) {
        item.classList.remove('hidden')
        item.querySelector(':scope > a').classList.remove('hidden')
      })
    })
  }
}
export default new StackMenu();