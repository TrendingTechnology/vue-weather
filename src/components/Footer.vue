<template>
    <footer class="container-fluid">
        <nav class="container">
            <div class="text-center text-secondary">
                &copy; {{ year }} rk4bir.github.io
            </div>
        </nav>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    props: {
        year: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
footer {
    padding-top: 40px;
    padding-bottom: 30px;
}
</style>