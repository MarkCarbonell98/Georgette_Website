<template>
    <div class="signup-form-container">
        <form action="submit_user" @submit.prevent>
            <input type="text" placeholder="Name">
            <input type="text" placeholder="Last Name">
            <input type="text" placeholder="Username">
            <input type="Email" placeholder="Email">
            <input type="password" placeholder="Password">
            <input type="password" placeholder="Repeat Password">
            <input type="submit" name="" id="submit-button">
        </form>
        <div class="social-login-conainer">
            <button class="facebook-login">Sign Up With Facebook</button>
            <button class="google-login">Sign Up With Google</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    
}
</script>

<style>

</style>