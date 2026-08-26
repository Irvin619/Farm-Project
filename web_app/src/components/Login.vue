<script setup>
import { ref } from 'vue'
import { useAuth } from '../services/auth'
import { useRouter } from "vue-router";
const router = useRouter();

const { checkCredentials } = useAuth()

const rules = {
    required: value => !!value || 'Required.', // checks if the value is not empty(if statement)
    min: v => v.length >= 8 || 'Min 8 characters', // checks if the value is not empty(if statement)
    passwordMatch: () => password == confirmPassword || 'Passwords must match' //function to check matching passwords
  }

//data models
const email = ref(null)
const password = ref(null)
const showPassword = ref(false)

function login()
{
    const data = {
        email: email.value,
        password: password.value,
    }

    checkCredentials(data)
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
                    <v-card-title class="ma-5">Login</v-card-title>
                    <v-divider></v-divider>
                    <v-form class="ma-8">
                        <v-row>
                            <v-col md ="4">
                                <div> Email </div>
                            </v-col>
                            <v-col md ="4">
                                <v-text-field v-model="email"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col md ="4">
                                <div> Password </div>
                            </v-col>
                            <v-col md ="4">
                                <v-text-field
                                v-model="password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="showPassword ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showPassword = !showPassword"
                                ></v-text-field>
                            </v-col>                            
                        </v-row>

                        <v-row>
                            <v-col md ="6">
                                <div><v-btn @click="login()" elevation="4" variant="elevated" block> Login </v-btn></div>
                            </v-col>
                            <v-col md ="6">
                                <div>
                                    New user?
                                    <router-link to="/signup">Create an account</router-link>
                                </div>
                            </v-col>
                        </v-row>

                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>