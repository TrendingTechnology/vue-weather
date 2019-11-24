<template>
    <header class="container-fluid">
        <nav class="container">
            <h1 class="text-center text-info">
                Quick Weather<br>
                <small class="text-secondary">- powered by Vue.js</small>
            </h1>
        </nav>
        <hr>
    </header>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style scoped>
    header {
        margin: 0px !important;
        padding: 0px !important;
    }
    small {font-size: 12px; font-weight: normal !important}
</style>