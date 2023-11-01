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
  function saveUserDataToLocalStorage() {
    const userData = {
      firstName: document.getElementById("nameInput1").value,
      secondName: document.getElementById("nameInput2").value,
      lastName1: document.getElementById("lastNameInput1").value,
      lastName2: document.getElementById("lastNameInput2").value,
      email: document.getElementById("emailInput").value,
      phoneNumber: document.getElementById("phoneInput").value,
    };
  
    localStorage.setItem("userData", JSON.stringify(userData));
  
  }

  // Función para cargar los datos del usuario y la imagen de perfil desde el localStorage
  function loadUserDataFromLocalStorage() {
    const userData = JSON.parse(localStorage.getItem("userData"));
  
    if (userData) {
      document.getElementById("nameInput1").value = userData.firstName;
      document.getElementById("nameInput2").value = userData.secondName;
      document.getElementById("lastNameInput1").value = userData.lastName1;
      document.getElementById("lastNameInput2").value = userData.lastName2;
      document.getElementById("emailInput").value = userData.email;
      document.getElementById("phoneInput").value = userData.phoneNumber;
    }
  }
  
  loadUserDataFromLocalStorage();
  
  const saveButton = document.getElementById("saveChanges");
  saveButton.addEventListener("click", saveUserDataToLocalStorage);
  