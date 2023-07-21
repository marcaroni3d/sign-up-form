const signUpForm = document.getElementById('sign-up-form')
const firstName = document.getElementById('first-name')
const firstNameError = document.getElementById('first-name-error')
const lastName = document.getElementById('last-name')
const lastNameError = document.getElementById('last-name-error')
const email = document.getElementById('email')
const emailError = document.getElementById('email-error')
const phoneNumber = document.getElementById('phone-number')
const phoneNumberError = document.getElementById('phone-number-error')
const password = document.getElementById('password')
const passwordError = document.getElementById('password-error')
const confirmPassword = document.getElementById('confirm-password')
const confirmPasswordError = document.getElementById('confirm-password-error')
// const allErrors = document.querySelectorAll('.error')

firstName.oninput = () => {
    firstNameError.innerText = ''
    if (firstName.value === '') {
        firstNameError.innerText = 'Please type in your first name'
    }
}

lastName.oninput = () => {
    lastNameError.innerText = ''
    if (lastName.value === '') {
        lastNameError.innerText = 'Please type in your last name'
    }
}

email.oninput = () => {
    emailError.innerText = ''
    if (email.value === '' || email.validity.typeMismatch) {
        emailError.innerText = 'Please enter a valid email address'
    }
}

phoneNumber.oninput = () => {
    phoneNumberError.innerText = ''
    if (phoneNumber.value === '' || phoneNumber.validity.patternMismatch) {
        phoneNumberError.innerText = 'Please enter a ten digit number'
    }
}

password.oninput = () => {
    passwordError.innerText = ''
    if (password.validity.patternMismatch) {
        const currentValue = password.value
        const regExpCap = /[A-Z]/g;
        const regExpDig = /[0-9]/g;
        let result = ''

        if (regExpCap.test(currentValue)) {
            result += ''
        } else {
            result += 'Missing at least 1 capital letter'
            result += '\n';
        }

        if (regExpDig.test(currentValue)) {
            result += ''
        } else {
            result += 'Missing at least 1 number'
            result += '\n'
        }

        if (currentValue.length < 9) {
            result += 'Password must be at least 8 characters'
            result += '\n'
        }

        if (currentValue.length > 14) {
            result += 'Password must be less than 14 characters'
            result += '\n'
        }

        passwordError.innerText = result
    }
}

confirmPassword.oninput = () => {
    confirmPasswordError.innerText = ''
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.innerText = 'Passwords do not match'
    }
}


/* allErrors.forEach(addEventListener('input', (e) => {
    const activeInput = document.getElementById(`${e.target.name}`)
    const errorDisplay = document.getElementById(`${e.target.name}-error`)
    errorDisplay.innerText = ''
    if (activeInput.value === '') {
        errorDisplay.innerText = 'Please enter a value'
    }
}))

 */