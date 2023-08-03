document.querySelectorAll('a[href^="#"]').forEach(ele => {
  ele.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector(ele.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
    ele.classList.add('active')
  })
})


