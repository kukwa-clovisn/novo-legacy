<script setup>
const cart_items = ref([
  {
    id: 1,
    title: "Novo legacy vip yearly membership",
    price: 449,
  },
  {
    id: 2,
    title: "Novo legacy vip monthly membership",
    price: 70,
  },
  {
    id: 3,
    title: "Novo legacy vip monthly membership",
    price: 100,
  },
]);

const tPrice = ref(0);

onMounted(() => {
  for (let i = 0; i < cart_items.value.length; i++) {
    tPrice.value = tPrice.value + cart_items.value[i].price;
  }
});
</script>
<template>
  <div class="cart-container">
    <div class="wrapper">
      <div class="px-4 py-2 border-b border-gray-200">
        <h2 class="font-semibold text-gray-800">Shopping Cart</h2>
      </div>
      <div class="flex flex-col divide-y divide-gray-200">
        <div
          v-for="item in cart_items"
          :key="item.id"
          class="flex items-center py-4 px-6"
        >
          <img
            class="w-16 h-16 object-cover rounded"
            src="/novo-logo.jpg"
            alt="Product Image"
          />
          <div class="ml-3">
            <h3 class="text-gray-900 font-semibold">{{ item.title }}</h3>
            <p class="text-gray-700 mt-1">${{ item.price }}</p>
          </div>
          <button
            class="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            Remove
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between px-6 py-3 bg-gray-100">
        <h3 class="text-gray-900 font-semibold">Total: ${{ tPrice }}</h3>
        <button
          class="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cart-container {
  width: 100vw;
  height: fit-content;
  padding-top: 18vh;
  padding-bottom: 5vh;

  .wrapper {
    width: 80%;
    height: fit-content;
    margin: auto;
  }
}
</style>
