<template>
    <div class="login-container">
        <form action="submit" @submit.prevent>
            <input type="email" placeholder="Email">
            <input type="password" placeholder="Password">
            <input type="submit">
        </form>
        <div class="social-login-conainer">
            <button class="facebook-login">Login With Facebook</button>
            <button class="google-login">Login With Google</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    
}
</script>

<style>

</style>

