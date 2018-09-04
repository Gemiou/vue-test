<template>
    <div>
        <div class="container">
            <div class="row">
                {{portfolioStocks}}
        <app-stock v-for="stock in portfolioStocks" :info="stock" :key="stock.id"></app-stock>
            </div>
        </div>
    </div>
</template>

<script>
    import Stock from '../portfolio/Stock.vue'
    export default {
        name: "Portfolio",
        components: {
            appStock:Stock
        },
        computed: {
            portfolioStocks() {
                return this.$store.getters.portfolioStocks;
            }
        }
    }
</script>

<style scoped>

</style>