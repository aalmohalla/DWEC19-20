

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user & add firestore data
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(()=>{
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
    signupForm.querySelector('.error').innerHTML = '';
    
  }).catch(function(error) {
    // Handle Errors here.
   
    signupForm.querySelector('.error').innerHTML = error.message;
  });

});

/*
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
      bio: signupForm['signup-bio'].value
    });
  }).then(() => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
    signupForm.querySelector('.error').innerHTML = ''
  }).catch(err => {
    signupForm.querySelector('.error').innerHTML = err.message;
  });
});*/