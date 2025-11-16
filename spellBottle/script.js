const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// determine which step we are at and style
// the progress bar and numbered circles accordingly.
// also, style and control the Prev and Next btns
// based on the same information.
let currentActive = 1

next.addEventListener('click', () => {
  currentActive++
  if (currentActive > circles.length) {
    // is current step = 4?
    currentActive = circles.length
  }
  update()
})

prev.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    // is current step < 1?
    currentActive = 1
  }
  update()
})

// add or remove circle styling based on current step
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
  // add or remove styling on progress bar based on
  // currently active circle step
  const actives = document.querySelectorAll('.active')

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  // determine if Prev and Next btns are active based
  // on currently active step
  if (currentActive === 1) {
    prev.diasbled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
