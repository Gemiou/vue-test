<template>
    <div id="app">
        <app-header></app-header>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./components/shared/Header.vue";

    export default {
        name: "app",
        data() {
            return {
                msg: "Welcome to Your Vue.js App"
            };
        },
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('initStock')
        }
    };
</script>

<style lang="scss">
</style>
