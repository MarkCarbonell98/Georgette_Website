<template>
    <footer class="footer">
        <h3>&copy; Georgette Website All Rights Reserved</h3>    
        <ul class="social-media-icons">
            <li><i class="small material-icons">explore</i></li>
            <li><i class="small material-icons">business_center</i></li>
            <li><i class="small material-icons">favorite</i></li>
            <li><i class="small material-icons">directions_run</i></li>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    footer {
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: beige;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .social-media-icons {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .social-media-icons>li {
        margin: 0 8px;
    }
</style>


