<template>
    <div class="navbar-container">
        <nav class="navbar">
            <img src="@/assets/apple-logo.png" alt="" class="logo">
            <ul class="nav-links-container">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Videos</a></li>
            </ul>
            <ul class="login-links-container">
                <li><router-link :to="{name: 'Login'}">Login</router-link><i class="small material-icons">assignment</i></li>
                <li><router-link :to="{name: 'SignUp'}">Sign Up</router-link><i class="small material-icons">assignment_ind</i></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            
            }
    }

}
</script>

<style scoped>
    .navbar-container {
        display: block;
        background-color: gainsboro;
        padding: 15px;
        height: 100px;
    }

    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .logo{
        height: 100px;
        width: 200px;
    }

    .nav-links-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        list-style-type: none;
    }

    .login-links-container>li {
        display: flex;
    }

    .login-links-container>li>i {
        margin: 0 4px;
    }

    i {
        color: orange;
    }

    .login-links-container{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        list-style-type: none;
    }

    ul>li {
        margin: 0 8px;
    }

</style>


