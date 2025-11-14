const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

// clear active status for all panels
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
