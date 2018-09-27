<template>
    <div class="wrapper">
        <div class="form-container">
            <h1 class="title">Log In</h1>
            <div class="login-container">
                <form action="submit" @submit.prevent="login()">
                    <input type="email" placeholder="Email" v-model="email">
                    <input type="password" placeholder="Password" v-model="password">
                    <input type="submit">
                </form>
                <p class="red-text center" v-if="feedback">{{this.feedback}}</p>
                <div class="social-login-container">
                    <button class="facebook-login">Login With Facebook</button>
                    <button class="google-login">Login With Google</button>
                </div>
                <router-link :to="{name:'SignUp'}">Don't you have an account yet ? Sign Up<i class="small material-icons">assignment</i></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'Login',
    data() {
        return {
            email: null,
            password: null,
            feedback: null,
            isLoggedIn: null, 
        }
    },
    methods: {
        login() {
            if(this.email && this.password) {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(cred => {
                    console.log(firebase.auth().currentUser);
                    this.$router.push({name: 'Home'});
                }).catch(err => {
                    this.feedback = err.message;
                })
            } else {
                this.feedback = 'Please enter all fields';
            }
        }
    },
    created() {
        console.log(this.$router);
    }
}
</script>

<style scoped>
    .title {
        text-align: center;
    }

    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .login-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .login-inputs {
        display: flex;
        flex-direction: row;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    a {
        display: flex; 
    }

</style>

