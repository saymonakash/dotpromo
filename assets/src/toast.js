const init = () => {
  const node = document.createElement('section')
  node.classList.add('gui-toast-group')
  document.firstElementChild.insertBefore(node, document.body)
  return node
}

const createToast = (text,type,url) => {
  
  const node = document.createElement('output')
  node.classList.add('gui-toast')
  node.setAttribute('role', 'status')
  node.setAttribute('aria-live', 'polite')

  var el = document.getElementById('toast-'+type);

  if (el === null) {
    var el = document.getElementById('toast');

  }
  el.querySelector('.text').innerHTML = text;
  var html = el.innerHTML;

  if(url) {

    el.querySelector('.text').classList.add('cursor-pointer');
    
    var text2 = el.querySelector('.text');

    text2.addEventListener('click', function (e) {
      e.preventDefault()
      window.location.href = url;      
    })
  }


  node.innerHTML = html;


  //const node2 = document.createElement('div')

  return node
}


const addToast = toast => {
  const { matches:motionOK } = window.matchMedia(
    '(prefers-reduced-motion: no-preference)'
  )

   Toaster.children.length && motionOK
    ? flipToast(toast)
    : flipToast(toast)

    const node = Toaster.lastElementChild;
    /*
    var el = node.querySelector('.toast-close');
      
    el.addEventListener('click', function (e) {
        e.preventDefault()
        node.remove();        
      })
      */


}

const Toast = (text,type,url)=> {
  let toast = createToast(text,type,url)
  addToast(toast)

  var el = toast.querySelector('.toast-close');
  var removed =0;
  el.addEventListener('click', function (e) {
      e.preventDefault()
      Toaster.removeChild(toast);       
      removed = 1; 
  })
  
  return new Promise(async (resolve, reject) => {
    await Promise.allSettled(
      toast.getAnimations().map(animation => 
        animation.finished
      )
    )
    if(!removed)
    Toaster.removeChild(toast);
    resolve() 
  })
}

// https://aerotwist.com/blog/flip-your-animations/
const flipToast = toast => {
  // FIRST
  const first = Toaster.offsetHeight

  // add new child to change container size
  Toaster.appendChild(toast)

  // LAST
  const last = Toaster.offsetHeight

  // INVERT
  const invert = last - first

  // PLAY
  const animation = Toaster.animate([
    { transform: `translateX(${invert}px)` },
    { transform: 'translateX(0)' }
  ], {
    duration: 450,
    easing: 'ease-out',
  })

  animation.startTime = document.timeline.currentTime
}


const Toaster = init()

export default Toast
window.Toast = Toast 
