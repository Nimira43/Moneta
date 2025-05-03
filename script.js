document.querySelectorAll('.logo').forEach(logo => {
  logo.addEventListener('click', () => {
    document.querySelector('front-page').computedStyleMap.display = 'block'
    document.querySelector('login-page').computedStyleMap.display = 'none'
    document.querySelector('signup-page').computedStyleMap.display = 'none'
  })
})
document.querySelectorAll('.login').forEach(loginBtn => {
  loginBtn.addEventListener('click', () => {
    
  })
})
document.querySelectorAll('.signup').forEach(signupBtn => {
  signupBtn.addEventListener('click', () => {
    
  })
})

const dropdownItems = document.querySelectorAll('.dropdown-hover')

if (window.innerWidth < 1000) { 
  const menuIcon = document.querySelector('.menu')
  const navbar = document.querySelector('.navbar')

} else {

}

window.addEventListener('resize', () => {
  window.location.reload()
})