<template>
    <header class="navbar" v-if="visible">
        <h3>Gmail</h3>
        <ul class="navbar-menu">
            <li><a href="/dashboard">Главная</a></li>
            <li><a href="/mail">Почта</a></li>
            <li><a href="#">Войти</a></li>
        </ul>
    </header>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: true
        }
    }
    
}
    </script>

    <style scoped>
    
    </style>  