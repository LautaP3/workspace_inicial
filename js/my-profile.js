const profileImageInput = document.getElementById("profileImageInput");
const profileImg = document.getElementById("profile-img");

profileImageInput.addEventListener("change", (event) => {
  const selectedImage = event.target.files[0]; 

  if (selectedImage) {
    const imageURL = URL.createObjectURL(selectedImage);
    profileImg.src = imageURL;
  }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()