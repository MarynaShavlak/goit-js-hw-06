const form = document.querySelector('.login-form');
const emailEl = document.querySelector('input[type="email"]');
const passwordlEl = document.querySelector('input[type="password"]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const userInfo = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  const { email, password } = userInfo;

  if (email === '' && password === '') {
    return alert('Attention! All fields must be filled');
  } else if (email === '') {
    return alert(
      'Attention! All fields must be filled. Please, fill the field "Email"',
    );
  } else if (password === '') {
    return alert(
      'Attention! All fields must be filled. Please, fill the field "Password"',
    );
  }

  console.log(userInfo);
  event.currentTarget.reset();
}
