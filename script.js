document.querySelectorAll('.logo').forEach(logo => {
  logo.addEventListener('click', () => {
    document.querySelector('front-page').style.display = 'block'
    document.querySelector('login-page').style.display = 'none'
    document.querySelector('signup-page').style.display = 'none'
  })
})
document.querySelectorAll('.login').forEach(loginBtn => {
  loginBtn.addEventListener('click', () => {
    document.querySelector('front-page').style.display = 'none'
    document.querySelector('login-page').style.display = 'block'
    document.querySelector('signup-page').style.display = 'none'
  })
})
document.querySelectorAll('.signup').forEach(signupBtn => {
  signupBtn.addEventListener('click', () => {
    document.querySelector('front-page').style.display = 'none'
    document.querySelector('login-page').style.display = 'none'
    document.querySelector('signup-page').style.display = 'flex'
  })
})

const dropdownItems = document.querySelectorAll('.dropdown-hover')

if (window.innerWidth < 1000) { 
  const menuIcon = document.querySelector('.menu')
  const navbar = document.querySelector('.navbar')


  document.querySelector('front-page').computedStyleMap.display = 'none'
  document.querySelector('front-page').computedStyleMap.display = 'none'
} else {

}

window.addEventListener('resize', () => {
  window.location.reload()
})