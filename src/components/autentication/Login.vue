<template>
    <div class="wrapper">
        <div class="form-container">
            <h1 class="title">Log In</h1>
            <div class="login-container">
                <form action="submit" @submit.prevent>
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Password">
                    <input type="submit">
                </form>
                <div class="social-login-container">
                    <button class="facebook-login">Login With Facebook</button>
                    <button class="google-login">Login With Google</button>
                </div>
                <router-link :to="{name:'SignUp'}">Sign Up<i class="small material-icons">assignment</i></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
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

