<script setup>
import {ref, computed} from 'vue'
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const router = useRouter()
const productsStore = useProductsStore()
const product = productsStore.selectedProduct

//cart
const cartStore = useCartStore()
const cart = computed(() => cartStore.cart)
const quantity = ref(1)

const totalPrice = computed(() => {
    const price = Number(product?.price || 0)
    const qty = Number(quantity.value || 0)
    return (price * qty).toFixed(2)
})

const cartTotal = computed(() => {
    return cart.value.reduce((sum, item) => {
        const price = Number(item.price || 0)
        const qty = Number(item.quantity || 0)
        return sum + price * qty
    }, 0)
})

function buy(product){
    cartStore.updateCart({ ...product, quantity: quantity.value })
}

</script>

<template>
    <v-container>
        <v-row>
            <v-col md="2">
                <v-btn icon="mdi-arrow-left" color="primary" to="/products" class="ma-12"></v-btn>
            </v-col>
            <v-col md="10">
                <div class="text-display-medium mb-12 mt-12 text-center">
                    Product Details
                </div>
            </v-col>
            
        </v-row>

        <v-row>
            <v-col md="6">
                <v-card>
                    <v-img class="align-end text-white" height="620" :src="product?.image" ></v-img>
                </v-card>
            </v-col>
            <v-col md="6">
                <v-card height="620" color="primary">
                    <v-card-item>
                        <v-card-title class="mb-4"> {{ product?.name || 'Product not found' }} </v-card-title>
                        <v-chip class="mb-4"> {{ product?.category || 'Unknown category' }} </v-chip>
                            <v-row>
                                <v-col md="4">
                                    <v-rating model-value="4" :size="24" readonly ></v-rating>
                                </v-col>
                                <v-col md="6">
                                    <v-btn color="lime-lighten-2" variant="outlined" density="compact" readonly > In Stock</v-btn>
                                </v-col>
                            </v-row>    
                    <v-card-subtitle>{{ product?.price ?? '0' }}</v-card-subtitle>
                    <v-card-text> 
                        <v-row> 
                            <v-card-actions>
                                <v-col md="10"> Quantity </v-col>
                                <v-col md="10">
                                    <v-number-input v-model="quantity" control-variant="split" density="compact" :min="1" :max="10" > </v-number-input>
                                </v-col>
                            </v-card-actions>
                        </v-row>
                    </v-card-text>
                    </v-card-item>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-card-text>Total: Ksh {{ totalPrice }}</v-card-text>
                            <v-btn elevation="4" variant="elevated" @click="buy(product)"> Add to Cart </v-btn>
                        </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mt-8">
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        Cart Summary
                        <span class="text-subtitle-2 ms-2">({{ cart.length }} items)</span>
                    </v-card-title>
                    <v-card-text>
                        <div v-if="cart.length === 0" class="text-body-2">Your cart is empty.</div>
                        <v-simple-table v-else>
                            <thead>
                                <tr>
                                    <th class="text-left">Product</th>
                                    <th class="text-left">Price</th>
                                    <th class="text-left">Qty</th>
                                    <th class="text-left">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in cart" :key="item.id">
                                    <td>{{ item.name }}</td>
                                    <td>Ksh {{ item.price }}</td>
                                    <td>{{ item.quantity }}</td>
                                    <td>Ksh {{ (item.price * item.quantity).toFixed(2) }}</td>
                                </tr>
                            </tbody>
                        </v-simple-table>
                    </v-card-text>
                    <v-card-actions>
                        <div class="text-h6">Total: Ksh {{ cartTotal.toFixed(2) }}</div>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>