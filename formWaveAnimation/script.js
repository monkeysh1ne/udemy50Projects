/* create node list of all the labels */
const labels = document.querySelectorAll('.form-control label')

/* iterate through the letters of the label and surround each letter with  <span> element */
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
    )
    .join('')
})
