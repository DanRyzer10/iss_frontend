<script setup>
import { defineAsyncComponent } from 'vue';
const InputText = defineAsyncComponent(() => import('primevue/inputtext'));
const Dropdown = defineAsyncComponent(() => import('primevue/dropdown'));
const Button = defineAsyncComponent(() => import('primevue/button'));
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useField, useForm, defineRule, configure } from 'vee-validate';
const Toast = defineAsyncComponent(() => import('primevue/toast'));
const toast = useToast();
const industries = ref([
    "Medicina",
    "Veterinaria",
    "Agencia de Marketing",
    "Asesorías y Cursos",
    "Tienda de ropa y accesorios",
    "Centros de belleza",
    "Tienda de cosméticos",
    "Juguetería",
    "Supermercado",
    "Restaurante",
    "Pastelerías y panaderías",
    "Tienda de electrodomésticos",
    "Librería",
    "Concesionarios",
    "Otros"
])

defineRule('only_letters', value => {
    //poner en mayuscula la primera letra del nombre y apellido
    const regex = /^[A-Za-zñÑ\sáéíóúÁÉÍÓÚ]+$/;
    return regex.test(value) || 'Este campo solo puede contener letras';
})

defineRule('alphanumeric', value => {
    const regex = /^[a-zA-ZñÑ0-9\s\!¡?¿#$&%\/\-_.:;,@()=+*áéíóúÁÉÍÓÚ]+$/;
    return regex.test(value) || 'Este campo solo puede contener letras, numeros y caracteres especiales';
})
defineRule('required', value => {
    if (!value || !value.length) {
        return 'Este campo es requerido';
    }
    return true;
})
defineRule('in_array', value => {
    
    value = value.charAt(0).toUpperCase() + value.slice(1);
    return industries.value.includes(value) || 'Este campo no es valido';
})

configure({
    validateOnInput: true
})

const { handleSubmit, resetForm } = useForm();
const { value: companyValue, errorMessage: companyErr } = useField('company', "required|alphanumeric");
const { value: fullnameValue, errorMessage: fullnameErr } = useField('fullname', "required|only_letters");
const { value: industryValue, errorMessage: industryErr } = useField('industry', "required|in_array");

const onSubmit = handleSubmit(() => {
    postData();
    resetForm();
})

async function postData() {
    let message = '';
    const data = {
        businessName: companyValue.value,
        industry: industryValue.value,
        fullname: fullnameValue.value,
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch('http://localhost:8000/api/accounts', options)
        const responseData = await response.json()
        message = responseData.message;
        if (!response.ok || response.status == 400) {
            toast.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
        }
        toast.add({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
    } catch (error) {
        toast.add({ severity: 'error', summary: 'Error', detail: "Hubo un error de conexión con la API. Por favor, inténtalo de nuevo más tarde.", life: 3000 });
        console.log("error: ", error)
    }
}
</script>

<template>
    <section class="form-main-container">
        <section class="header-container">
            <h1 class="title">Registro</h1>
            <h3 class="subtitle">
                Comienza tu periodo de prueba gratuito
            </h3>
            <strong>no es necesario agregar tarjeta de credito</strong>
        </section>
        <div class="main-container">
            <Toast position="top-center" />
            <h2>Datos de la cuenta</h2>
            <form @submit="onSubmit">
                <div class="form-items">
                    <div class="input-name">
                        <label for="businessName">Nombre del negocio</label>
                        <InputText autocomplete="on" class="inputtext" id="businessName" v-model="companyValue"
                            :class="{ 'p-invalid': companyErr }" aria-describedby="username-help" />
                        <small class="p-error" id="text-error">{{ companyErr || '&nbsp;' }}</small>
                        <small id="username-help">nombre de tu negocio</small>
                    </div>
                    <div class="dropform">
                        <label for="industry">Selecciona tu industria</label>
                        <Dropdown input-id="industry" v-model="industryValue" editable :options="industries" :class="{ 'p-invalid': industryErr }"
                            placeholder="Selecciona una opcion" class="inputtext" />
                        <small class="p-error" id="text-error">{{ industryErr || '&nbsp;' }}</small>
                    </div>
                    <h2>Datos del administrador</h2>
                    <div class="input-name">
                        <label for="name">Nombres y apellidos</label>
                        <InputText autocomplete="family-name" class="inputtext" id="name" v-model="fullnameValue" :class="{ 'p-invalid': fullnameErr }"
                            aria-describedby="username-help" />
                        <small class="p-error" id="text-error">{{ fullnameErr || '&nbsp;' }}</small>
                        <small id="username-help">Nombres y apellidos del administrador</small>
                    </div>
                    <div class="button-container">
                        <Button label="Submit" type="submit" />
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>
<style scoped>
.title {
    color: #48516f;
    margin-bottom: 3px;


}
.subtitle {
    color: #48516f;
    margin: 3px 0;
}
.header-container>strong {
    font-style: italic;
}
.header-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.input-name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2px;
    width: 100%;
    margin-bottom: 1rem;
}
.inputtext {
    width: 100%;
    margin: 5px;
}
.form-main-container {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    border-radius: 5px;
    /*shadow*/
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 1rem;
    margin: 1rem;
}
.button-container {
    display: flex;
    justify-content: right;
}

</style>