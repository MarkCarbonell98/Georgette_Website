<template>
    <div>Esta es la Seccion de About</div>
</template>

<script>
export default {
    name: 'Home',
    props: ['isLoggedIn'],
    created() {
        console.log(this.$props);
    }
}
</script>

<style>

</style>
