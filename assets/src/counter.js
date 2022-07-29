function Counter() {
  var qnt = 0;
  this.initialize = function () {
    const self = this;
    document.addEventListener('click', function(e) {
      if (e.target.closest('a.counter-increment') || e.target.closest('a.counter-decrement')) {
        e.preventDefault()
        var targetEl = e.target.closest('a.counter-increment') || e.target.closest('a.counter-decrement')
        var isIncrement = targetEl.classList.contains('counter-increment')
        var elParent = targetEl.closest('div.counter')
        var counterInput = elParent.querySelector('input')

        if (!counterInput.value) {
          counterInput.value = 0
        }
    
        if (isIncrement) {
          counterInput.value = parseInt(counterInput.value) + 1
        } else {
          if (parseInt(counterInput.value) < 1) {
            counterInput.value = 0
            return
          }
          counterInput.value = parseInt(counterInput.value) - 1
        }

        qnt =  counterInput.value;
      }

      document.querySelectorAll('.counter-input').forEach(item => {
        var val = item.value;
        if(val>0)
         qnt = val;

      })

    })

  } 
  this.getValue = function () {
    const self = this;   
    return qnt;

  }   
}

export default new Counter()