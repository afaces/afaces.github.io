<script src="https://js.stripe.com/v3/"></script>

<script>
    var stripe = Stripe('pk_test_51LP7WYGzzgXMTNqrdpY7OHCbvvlPqgtYEUZmBJw66X0j5ybqCkcbfXYJ5SfEMmeoCXxEq8Hok5WHl2rBzttayq9b00cV1h6dPP');

    document.getElementById("checkout").addEventListener("click", function() {
        stripe.redirectToCheckout({
          lineItems: [
            {
            price: 'price_1LP7fQGzzgXMTNqrdiSr61hW', // Replace with the ID of your price
            quantity: 1,
          },
        ],
        mode: 'payment',
        successUrl: 'https://afaces.tk/success',
        cancelUrl: 'https://afaces.tk/cancel',
        })
        .then(function (result){

        });
    })
</script>

## Please make sure you really want to donate, there is not a refund.
#### Click the next button to proceed

<input type = "button" id = "checkout" onclick = "redirectToCheckout()" value = "Donate 20€ to Afaces">