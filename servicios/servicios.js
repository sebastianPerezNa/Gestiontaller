// Funcionalidad básica para el dropdown de selección de auto
document.getElementById('marca-modelo').addEventListener('change', function() {
    const selectedModel = this.value;
    if (selectedModel !== 'default') {
        alert('Has seleccionado el modelo: ' + selectedModel);
    }
});
// Función para habilitar el input de contacto
const medioComunicacionSelect = document.getElementById('medio-comunicacion');
const contactInfoDiv = document.getElementById('contact-info');

medioComunicacionSelect.addEventListener('change', function() {
    if (this.value === 'whatsapp' || this.value === 'correo') {
        contactInfoDiv.style.display = 'block';
        const placeholderText = this.value === 'whatsapp' ? 'Número de WhatsApp' : 'Correo Electrónico';
        document.getElementById('info-input').setAttribute('placeholder', placeholderText);
    } else {
        contactInfoDiv.style.display = 'none';
    }   
});

// Resto del código para cargar marcas y

document.addEventListener('DOMContentLoaded', function() {
    const tipoVehiculoSelect = document.getElementById('tipo-vehiculo');
    const marcaSelect = document.getElementById('marca');
    const modeloSelect = document.getElementById('modelo');
    const medioComunicacionSelect = document.getElementById('medio-comunicacion');
    const infoInput = document.getElementById('contact-info');

    // Lista de marcas y modelos
    const vehiculos = {
        "Auto": {
            "Toyota": ["Corolla", "Camry", "Yaris"],
            "Ford": ["Focus", "Fiesta", "Mustang"],
            "Chevrolet": ["Sonic", "Malibu", "Tracker"]
        },
        "Camión": {
            "Mercedes": ["Actros", "Atego"],
            "Volvo": ["FMX", "FH"],
            "MAN": ["TGS", "TGA"]
        }
    };

    // Evento para habilitar la lista de marcas
    tipoVehiculoSelect.addEventListener('change', function() {
        const tipoVehiculo = this.value;
        marcaSelect.innerHTML = '<option value="">Seleccionar Marca</option>'; // Resetear opciones de marca
        modeloSelect.innerHTML = '<option value="">Seleccionar Modelo</option>'; // Resetear opciones de modelo
        modeloSelect.disabled = true; // Deshabilitar el modelo

        if (tipoVehiculo) {
            const marcas = vehiculos[tipoVehiculo];
            for (const marca in marcas) {
                const option = document.createElement('option');
                option.value = marca;
                option.textContent = marca;
                marcaSelect.appendChild(option);
            }
            marcaSelect.disabled = false; // Habilitar lista de marcas
        } else {
            marcaSelect.disabled = true; // Deshabilitar si no hay tipo de vehículo
        }
    });

    // Evento para habilitar la lista de modelos
    marcaSelect.addEventListener('change', function() {
        const marcaSeleccionada = this.value;
        modeloSelect.innerHTML = '<option value="">Seleccionar Modelo</option>'; // Resetear opciones de modelo

        if (marcaSeleccionada) {
            const modelos = vehiculos[tipoVehiculoSelect.value][marcaSeleccionada];
            for (const modelo of modelos) {
                const option = document.createElement('option');
                option.value = modelo;
                option.textContent = modelo;
                modeloSelect.appendChild(option);
            }
            modeloSelect.disabled = false; // Habilitar lista de modelos
        } else {
            modeloSelect.disabled = true; // Deshabilitar si no hay marca seleccionada
        }
    });

    // Evento para mostrar el input de contacto
    medioComunicacionSelect.addEventListener('change', function() {
        if (this.value) {
            infoInput.style.display = 'block'; // Mostrar input
            infoInput.placeholder = this.value === 'whatsapp' ? 'Ingrese su número de WhatsApp' : 'Ingrese su correo electrónico';
            infoInput.type = this.value === 'whatsapp' ? 'tel' : 'email'; // Cambiar tipo a teléfono o email
        } else {
            infoInput.style.display = 'none'; // Ocultar si no hay selección
        }
    });
});
