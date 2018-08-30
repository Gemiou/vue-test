<template>
    <div>
        <div class="container">
            <div class="row">
                <app-stock v-for="stock in stocks" :info="stock" :key="stock.id"></app-stock>
            </div>
        </div>
    </div>
</template>

<script>
import Stock from "../stocks/Stock.vue";

export default {
  name: "Stocks",
    data() {
        return {
            findArray: ['b','c','a']
        }
    },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  },
  components: {
    appStock: Stock
  },
    methods: {

    },
};
</script>

<style scoped>
</style>
