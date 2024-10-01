// registro.js
document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.querySelector('#password');
    const confirmPasswordInput = document.querySelector('#confirm-password');
    const passwordRequirements = document.querySelector('#password-requirements');
    
    const lengthRequirement = document.createElement('li');
    lengthRequirement.id = 'length';
    lengthRequirement.classList.add('requirement');
    lengthRequirement.textContent = 'Al menos 4 caracteres';
    
    const uppercaseRequirement = document.createElement('li');
    uppercaseRequirement.id = 'uppercase';
    uppercaseRequirement.classList.add('requirement');
    uppercaseRequirement.textContent = 'Al menos una letra mayúscula';
    
    const numberRequirement = document.createElement('li');
    numberRequirement.id = 'number';
    numberRequirement.classList.add('requirement');
    numberRequirement.textContent = 'Al menos un número';
    
    passwordRequirements.appendChild(lengthRequirement);
    passwordRequirements.appendChild(uppercaseRequirement);
    passwordRequirements.appendChild(numberRequirement);

    function validatePassword() {
        const password = passwordInput.value;
        
        lengthRequirement.classList.toggle('valid', password.length >= 4);
        lengthRequirement.classList.toggle('invalid', password.length < 4);
        
        uppercaseRequirement.classList.toggle('valid', /[A-Z]/.test(password));
        uppercaseRequirement.classList.toggle('invalid', !/[A-Z]/.test(password));
        
        numberRequirement.classList.toggle('valid', /\d/.test(password));
        numberRequirement.classList.toggle('invalid', !/\d/.test(password));
        
        passwordRequirements.classList.add('active');
        
        setTimeout(() => {
            passwordRequirements.classList.remove('active');
        }, 5000); // Mostrar durante 5 segundos
    }
    
    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const passwordsMatch = password === confirmPassword;
        confirmPasswordInput.setCustomValidity(passwordsMatch ? '' : 'Las contraseñas no coinciden');
    }
    
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
});
