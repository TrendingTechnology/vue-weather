<template>
    <footer class="container-fluid bg-info">
        <nav class="container">
            <div class="text-center text-light pt-3 pb-3">
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
