# forms.py
from django import forms
from django.core.validators import RegexValidator
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password

class RegistrationForm(forms.Form):
    first_name = forms.CharField(
        max_length=12,
        validators=[RegexValidator(r'^[A-Za-z]*$', 'Only letters are allowed')],
        widget=forms.TextInput(attrs={'placeholder': 'First Name'})
    )
    last_name = forms.CharField(
        max_length=12,
        validators=[RegexValidator(r'^[A-Za-z]*$', 'Only letters are allowed')],
        widget=forms.TextInput(attrs={'placeholder': 'Last Name'})
    )
    username = forms.CharField(
        max_length=12,
        widget=forms.TextInput(attrs={'placeholder': 'Username'})
    )
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={'placeholder': 'Password'}),
        validators=[validate_password, RegexValidator(
            r'^(?=.*[A-Z])(?=.*\d).{4,}$', 'Password must contain at least one uppercase letter, one number, and be at least 4 characters long'
        )]
    )

    def clean_username(self):
        username = self.cleaned_data.get('username')
        # Aquí puedes agregar lógica para validar que el nombre de usuario no esté ya en uso
        return username

    def clean_password(self):
        password = self.cleaned_data.get('password')
        # Aquí puedes agregar lógica para validar la contraseña si es necesario
        return password
