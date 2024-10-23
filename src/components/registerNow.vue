<script setup>
import {ref} from 'vue';
    const firstName = ref('');
    const secondName = ref('');
    const email= ref('');
      const rules = [
        value => {
          if (value) return true

          return 'You must enter a first name.'
        },
      ];
      const rulessecondName = [
        value => {
          if (value) return true

          return 'You must enter a second name.'
        },
      ];
      
      const emailRules = [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ]
</script>
<template >
    
        <div class="login-container d-flex justify-center align-center flex-column">
            <div>
                <h4 class="flex-row">Hello <v-icon
                          color="yellow-accent-4"
                          icon="mdi-hand-wave-outline"
                          size="large"
                          class="pl-2"
                        ></v-icon></h4>
            </div>
        <p class="pt-3">Register to continue</p>

        <v-sheet class="form">
    <v-form @submit.prevent>
      <div class="form-container">
        <v-text-field
          v-model="firstName"
          :rules="rules"
          label="First name"
        ></v-text-field>
        <v-text-field
          v-model="secondName"
          :rules="rulessecondName"
          label="Second name"
        ></v-text-field>
        <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              hide-details
              required
            ></v-text-field>
        <v-btn class="mt-4 p-4 login-button" type="submit" rounded="2" block>Submit</v-btn>
        
      </div>
    </v-form>
  </v-sheet>
  <p class="pt-3">Already have an account? <a href="/">Login here</a></p>
    </div>
</template>
<style scoped>
.login-container{
    height: 100svh;
}
:is(h4){
    font-size: clamp(1.4238rem, 1.0921rem + 1.6585vw, 2.6469rem);
}
:is(p){
    font-size: clamp(1.125rem, 1.0243rem + 0.5034vw, 1.4963rem);
}
.form{
    width: min(90%, 500px);
    margin: 2em;
}
.form-container{
  margin: 1.5em;
  border-radius: 5px;
}
.login-button{
  background-color: #FFC400;
  color: #000;
}
:is(a){
  color: #FFC400;
}
</style>