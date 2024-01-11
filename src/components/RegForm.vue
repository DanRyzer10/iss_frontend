<script setup>
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import { ref } from 'vue';

import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('company', validateField);
const toast = useToast();


function validateField(value) {
    if (!value) {
        return 'Name - Surname is required.';
    }
    return true;
}

const onSubmit = handleSubmit((values) => {
    if(values.company && values.company.length>0){
        postData()
        resetForm();
    }
    // if (values.company && values.company.length>0) {
    //     toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
    //     resetForm();
    // }
});



const selectedIndustry = ref(null);
const company = ref(null);
const fullname = ref(null);
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
// async function postData(){
//     const response = await fetch('http://localhost:8000/api/accounts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             company: company.value,
//             fullname: fullname.value,
//             industry: selectedIndustry.value
//         })
//     })
//     const data = await response.json()
//     console.log(data)
// }

function postData(){
    console.log(value.value)
    console.log(fullname.value)
    console.log(selectedIndustry.value)
}

//define params 
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
            <h2>Datos de la cuenta</h2>
            <form @submit="onSubmit">
                <div class="form-items">
                <div class="input-name">
                    <label for="negocio">Nombre del negocio</label>
                    <InputText class="inputtext"  id="company" v-model="value"  :class="{ 'p-invalid': errorMessage }"  aria-describedby="username-help" />
                    <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
                    <small id="username-help">Enter your username to reset your password.</small>
                </div>
                <div class="dropform">
                    <Dropdown v-model="selectedIndustry" editable :options="industries"  placeholder="Select la industria" class="inputtext" />
                    <!-- <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small> -->
                </div>
                <h2>Datos del administrador</h2>
                <div class="input-name">
                    <label for="negocio">Nombres y apellidos</label>
                    <InputText class="inputtext" id="name" v-model="fullname" aria-describedby="username-help" />
                    <!-- <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small> -->
                    <small id="username-help">Nombres y apellidos del administrador</small>
                </div>

                <div class="button-container">
                    <Button label="Submit" type="submit" />
                </div>
                </div>
            </form>
        </div>

    <section>

    </section>
    </section>
    
</template>

<style scoped>
.title{ 
    color: #48516f;
    margin-bottom: 3px;


}
.subtitle{
    color: #48516f;
    margin: 3px 0;
}
.header-container > strong{
    
    font-style: italic;
    /*bold  style*/


}
.header-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.input-name{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2px;
    width: 100%;
    margin-bottom: 1rem;
}
.inputtext{
    width: 100%;
    margin: 5px;
}
.form-main-container{
    display: flex;
   
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.main-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    border-radius: 5px;
    /*shadow*/
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    padding: 1rem;
    margin: 1rem;
}
.button-container {
    display: flex;
    justify-content: right;
}

</style>