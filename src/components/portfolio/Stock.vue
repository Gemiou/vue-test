<template>

    <div class="col-md-6 mt-3">
        <b-card :title="info.name"
                :sub-title="info.stockPrice.toString()">
            <p>Quantity:{{info.quantity}}</p>
            <b-form-input v-model="quantity" step="1" type="number" min="0"
                          placeholder="Enter your Quantity"></b-form-input>
            <hr>
            <!--<b-button @click="buy" :disabled="quantity <= 0 || quantity > info.price">Buy</b-button>-->
        </b-card>
    </div>

</template>

<script>
    export default {
        name: "Stock",
        props: {
            info: {
                type: Object
            }
        },
        data() {
            return {
                name: "NAME",
                price: "Price",
                quantity: 0
            };
        },
        created: function () {

        }

    };
</script>

<style scoped>
</style>
