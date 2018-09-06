<template>
    <div class="wrapper">
        <div class="signup-form-container">
            <h1 class="title">Sign Up</h1>
            <div class="login-inputs">
                <form action="submit" @submit.prevent method="POST">
                    <label for="name">Name:</label>
                    <input type="text" placeholder="Name" name="name">
                    <label for="lastName">Last Name:</label>
                    <input type="text" placeholder="Last Name" name="lastName">
                    <label for="username">Username:</label>
                    <input type="text" placeholder="Username" name="username">
                    <label for="email">Email:</label>
                    <input type="Email" placeholder="Email" name="email">
                    <label for="password">Password:</label>
                    <input type="password" placeholder="Password" name="password">
                    <label for="repeatPassword">Repeat Password:</label>
                    <input type="password" placeholder="Repeat Password" name="repeatPassword">
                    <input type="submit" id="submit-button" name="submit">
                </form>
                <div class="social-signup-container">
                    <button class="facebook-login">Sign Up With Facebook</button>
                    <button class="google-login">Sign Up With Google</button>
                </div>
            </div>
            <router-link :to="{name:'Login'}">I already have an account<i class="small material-icons">assignment</i></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    
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