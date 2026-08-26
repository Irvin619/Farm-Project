<script setup>
import { ref } from 'vue'
import { useAuth } from '../services/auth.js'
import { useRouter } from "vue-router";
const router = useRouter();

const {signup} = useAuth()

const showPassword = ref(false)
const password = ref(null) 

const confirmPassword= ref(null)
const showConfirm = ref(false)
const rules = {
    required: value => !!value || 'Required.', // checks if the value is not empty(if statement)
    min: v => v.length >= 8 || 'Min 8 characters', // checks if the value is not empty(if statement)
    passwordMatch: () => password == confirmPassword || 'Passwords must match' //function to check matching passwords
  }

//data models
const firstname = ref(null)
const lastname = ref(null)
const email = ref(null)
const phone = ref(null)
const location = ref(null)
const address = ref(null)

function register()
{
    const data = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        phone: phone.value,
        location: location.value,
        address: address.value,
        password: password.value,
        role: 2,

        //role- 1 - Admin, //role- 2 - Customer
    }
    signup(data)
    router.push('/').then(() => {
        router.go(0)
    });
}

</script>

<template>
    <v-container align="center" class="mt-15">
        <v-row>
            <v-col>
                <v-card color="secondary" width="80%">
                    <v-img src="/logo.png" height="150" width="150" class="mt-4"></v-img>
                    <v-card-title class="ma-5">Sign Up</v-card-title>
                    <v-divider></v-divider>
                    <v-form class="ma-8">

                        <v-row>
                            <v-col md ="3">
                                <div> First Name </div>
                            </v-col>
                            <v-col md ="3">
                                <v-text-field v-model="firstname"></v-text-field>
                            </v-col>
                            <v-col md ="3">
                                <div> Last Name </div>
                            </v-col>
                            <v-col md ="3">
                                <v-text-field v-model="lastname"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col md ="3">
                                <div> Email </div>
                            </v-col>
                            <v-col md ="3">
                                <v-text-field v-model="email"></v-text-field>
                            </v-col>
                            <v-col md ="3">
                                <div> Phone Number </div>
                            </v-col>
                            <v-col md ="3">
                                <v-text-field v-model="phone" type="number"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col md ="3">
                                <div> Location </div>
                            </v-col>
                            <v-col md ="3">
                                <v-select :items="['Nairobi', 'Mombasa', 'Kiambu', 'Machakos', 'Kisumu', 'Eldoret', 'Nakuru', 'Kericho']" label="Select your location" v-model="location"></v-select>
                            </v-col>
                            <v-col md ="3">
                                <div> Address </div>
                            </v-col>
                            <v-col md ="3">
                                <v-text-field v-model="address"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col md ="3">
                                <div> Password </div>
                            </v-col>
                            <v-col md ="3">
                                <v-text-field
                                v-model="password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="showPassword ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showPassword = !showPassword"
                                ></v-text-field>
                            </v-col>
                            <v-col md ="3">
                                <div> Confirm Password </div>
                            </v-col>
                            <v-col md ="3">
                                <v-text-field
                                v-model="confirmPassword"
                                :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min, rules.passwordMatch,]"
                                :type="showConfirm ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showConfirm = !showConfirm"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col md ="6">
                                <div><v-btn @click="register()" elevation="4" variant="elevated" block> Sign Up </v-btn></div>
                            </v-col>
                            <v-col md ="6">
                                <div>
                                    Already have an account?
                                    <router-link to="/login">Login</router-link>
                                </div>
                            </v-col>
                        </v-row>


                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>