<template>
    <div class="wrapper">
        <div class="signup-form-container">
            <h1 class="title">Sign Up</h1>
            <div class="login-inputs">
                <form action="submit" @submit.prevent="signup()">
                    <label for="name">Name:</label>
                    <input type="text" placeholder="Name" name="name" v-model="name">
                    <label for="lastName">Last Name:</label>
                    <input type="text" placeholder="Last Name" name="lastName" v-model="lastName">
                    <!-- <label for="username">Username: * (optional)</label> -->
                    <!-- <input type="text" placeholder="Username" name="username" v-model="username"> -->
                    <label for="email">Email:</label>
                    <input type="Email" placeholder="Email" name="email" v-model="email">
                    <label for="password">Password:</label>
                    <input type="password" placeholder="Password" name="password" v-model="password">
                    <label for="repeatPassword">Repeat Password:</label>
                    <input type="password" placeholder="Repeat Password" name="repeatPassword" v-model="repeatedPassword">
                    <input type="submit" id="submit-button" name="submit">
                    <p v-if="feedback" class="red-text center">{{this.feedback}}</p>
                    <p v-if="verificationFeedback" class="green-text center">{{this.verificationFeedback}}</p>
                </form>
                <div class="social-signup-container">
                    <button class="facebook-login">Sign Up With Facebook</button>
                    <button class="google-login" @click.prevent="googleSignUp">Sign Up With Google</button>
                </div>
            </div>
            <router-link :to="{name:'Login'}">I already have an account<i class="small material-icons">assignment</i></router-link>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import slugify from 'slugify'
import db from '@/firebase/init'
export default {
    name: 'SignUp',
    data() {
        return {
            email: null,
            password: null,
            repeatedPassword: null, 
            name: null, 
            lastName: null,
            slug: null,
            feedback: null,
            verificationFeedback: null, 
            verifiedUser: null,
        }
    },
    methods: {
        signup() {
            if(this.email && this.password && this.repeatedPassword && this.name && this.lastName) {
                if (this.password !== this.repeatedPassword) {
                    this.feedback = 'Your passwords do not match';
                } else {
                    this.slug = slugify(this.name + ' ' + this.lastName + ' ' + this.email, {
                        replacement: '-',
                        remove: /[$*_+`~.()'"!\-:@]/g,
                        lower: true
                    });
                    let nameRef = db.collection('users').doc(this.slug);
                    nameRef.get().then(doc => {
                        if(doc.exists) {
                            this.feedback = 'The given user already exists';
                        } else {
                            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                            .then(cred => {
                                nameRef.set({
                                    name: this.name,
                                    lastName: this.lastName,
                                    email: this.email, 
                                    user_id: cred.user.uid,
                                });
                            }).then(() => {
                                const user = firebase.auth().currentUser;
                                const actionCodeSettings = {
                                    url: 'http://localhost:8080/',
                                    handleCodeInApp: true,
                                };
                                firebase.auth().useDeviceLanguage();
                                firebase.auth().sendSignInLinkToEmail(this.email, actionCodeSettings)
                                .then(() => {
                                    this.feedback = null;
                                    this.verificationFeedback = 'The link was successfully sent, please check your email';
                                    window.localStorage.setItem('emailForSignIn', this.email);
                                }).catch(err => {
                                    console.log(err);
                                    this.feedback = err.message;
                                });
                                // console.log(firebase.auth().currentUser);
                                // this.$router.push({name: 'Home'});
                            }).catch(err => {
                                console.log(err);
                                this.feedback = err.message;
                            });
                        }
                    })
                }
            } else {
                this.feedback = 'You must enter all fields';
            }
        },
        googleSignUp() {
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().useDeviceLanguage();
            firebase.auth().signInWithPopup(provider).then(res => {
                const token = res.credential.accessToken;
                const user = res.user;
                this.$router.push({name: 'Home'});
            }).catch(err => {
                this.feedback = err.message;
            })
        },
    },
    
}
</script>

<style scoped> 

    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .signup-form-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 35px;
    }

    .login-inputs {
        display: flex;
        flex-direction: column;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    form>input,
    form>label {
        margin: 3px;
    }

    a {
        display: flex; 
    }

</style>