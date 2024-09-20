

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (window.paypal) {
    window.paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '10.00'  // The amount for the transaction
            }
          }]
        });
      },
      onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
          alert('Transaction completed by ' + details.payer.name.given_name);
          // Handle payment success logic
        });
      },
      onError: function (err) {
        console.error('PayPal Error:', err);
      }
    }).render('#paypal-button-container');
  }
});
</script>
<template>
  <div>
    <div id="paypal-button-container"></div>
  </div>
</template>