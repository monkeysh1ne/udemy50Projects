const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

/*  for each split attach listening event for hover and apply appropriate class */
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
)
right.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
)
right.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
)
