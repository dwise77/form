const form = document.querySelector('.sign-in');
const form2 = document.querySelector('.sign-up');
const wrapper = document.querySelector('.wrapper');
const signinBtn = document.querySelector('.sign-in-btn');
const signupBtn = document.querySelector('.sign-up-btn');
const username = document.querySelector('#username');
const usernameLabel = document.querySelector('.username');
const password = document.querySelector('#password');
const passwordLabel = document.querySelector('.password');
const name = document.querySelector('#name');
const nameLabel = document.querySelector('.name');
const username2 = document.querySelector('#username2');
const usernameLabel2 = document.querySelector('.username2');
const password2 = document.querySelector('#password2');
const passwordLabel2 = document.querySelector('.password2');
form.addEventListener('submit', (i) => {
  i.preventDefault()
})
username.addEventListener('click', ()=> {
  usernameLabel.classList.add('move');
})
  username.addEventListener('blur', () => {
if (username.value.trim() === '') {
  usernameLabel.classList.remove('move');
}
 })
password.addEventListener('click', ()=> {
  passwordLabel.classList.add('move');
})
  password.addEventListener('blur', () => {
if (password.value.trim() === '') {
  passwordLabel.classList.remove('move');
}
 })
 


 form2.addEventListener('submit', (m) => {
  m.preventDefault()
})
  name.addEventListener('click', () => {
  nameLabel.classList.add('move');
})
name.addEventListener('blur', () => {
  if (name.value.trim() === '') {
    nameLabel.classList.remove('move');
  }
})
username2.addEventListener('click', ()=> {
  usernameLabel2.classList.add('move');
})
  username2.addEventListener('blur', () => {
if (username2.value.trim() === '') {
  usernameLabel2.classList.remove('move');
}
 })
password2.addEventListener('click', ()=> {
  passwordLabel2.classList.add('move');
})
  password2.addEventListener('blur', () => {
if (password2.value.trim() === '') {
  passwordLabel2.classList.remove('move');
}
 })
 signupBtn.addEventListener('click', ()=> {
   wrapper.classList.add('slide')
 })
 signinBtn.addEventListener('click', ()=> {
   wrapper.classList.remove('slide')
 })