<script src="https://js.stripe.com/v3/"></script>

<script>
function redirectToCheckoutOne() {
    var stripe = Stripe('pk_test_51LP7WYGzzgXMTNqrdpY7OHCbvvlPqgtYEUZmBJw66X0j5ybqCkcbfXYJ5SfEMmeoCXxEq8Hok5WHl2rBzttayq9b00cV1h6dPP');
    
    document.getElementById("checkout").addEventListener("click", function() {
        stripe.redirectToCheckout({
                lineItems: [{
                    price: 'price_1LP7fRGzzgXMTNqrSvnLR3kO', // Replace with the ID of your price
                    quantity: 1,
                }, ],
                mode: 'payment',
                successUrl: 'https://afaces.tk/success',
                cancelUrl: 'https://afaces.tk/cancel',
            })
            .then(function(result) {
            });
        })
}

function redirectToCheckoutFive() {
    var stripe = Stripe('pk_test_51LP7WYGzzgXMTNqrdpY7OHCbvvlPqgtYEUZmBJw66X0j5ybqCkcbfXYJ5SfEMmeoCXxEq8Hok5WHl2rBzttayq9b00cV1h6dPP');
    
    document.getElementById("checkout").addEventListener("click", function() {
        stripe.redirectToCheckout({
                lineItems: [{
                    price: 'price_1LP7fRGzzgXMTNqrgNuAQoFn', // Replace with the ID of your price
                    quantity: 1,
                }, ],
                mode: 'payment',
                successUrl: 'https://afaces.tk/success',
                cancelUrl: 'https://afaces.tk/cancel',
            })
            .then(function(result) {
            });
        })
}

function redirectToCheckoutTwenty() {
    var stripe = Stripe('pk_test_51LP7WYGzzgXMTNqrdpY7OHCbvvlPqgtYEUZmBJw66X0j5ybqCkcbfXYJ5SfEMmeoCXxEq8Hok5WHl2rBzttayq9b00cV1h6dPP');
    
    document.getElementById("checkout").addEventListener("click", function() {
        stripe.redirectToCheckout({
                lineItems: [{
                    price: 'price_1LP7fQGzzgXMTNqrdiSr61hW', // Replace with the ID of your price
                    quantity: 1,
                }, ],
                mode: 'payment',
                successUrl: 'https://afaces.tk/success',
                cancelUrl: 'https://afaces.tk/cancel',
            })
            .then(function(result) {
            });
        })
}

function redirectToCheckoutFifty() {
    var stripe = Stripe('pk_test_51LP7WYGzzgXMTNqrdpY7OHCbvvlPqgtYEUZmBJw66X0j5ybqCkcbfXYJ5SfEMmeoCXxEq8Hok5WHl2rBzttayq9b00cV1h6dPP');
    
    document.getElementById("checkout").addEventListener("click", function() {
        stripe.redirectToCheckout({
                lineItems: [{
                    price: 'price_1LP7fRGzzgXMTNqrKyjp4Q5d', // Replace with the ID of your price
                    quantity: 1,
                }, ],
                mode: 'payment',
                successUrl: 'https://afaces.tk/success',
                cancelUrl: 'https://afaces.tk/cancel',
            })
            .then(function(result) {
            });
        })
}

function redirectToCheckoutOneHundred() {
    var stripe = Stripe('pk_test_51LP7WYGzzgXMTNqrdpY7OHCbvvlPqgtYEUZmBJw66X0j5ybqCkcbfXYJ5SfEMmeoCXxEq8Hok5WHl2rBzttayq9b00cV1h6dPP');
    
    document.getElementById("checkout").addEventListener("click", function() {
        stripe.redirectToCheckout({
                lineItems: [{
                    price: 'price_1LP7fRGzzgXMTNqr5dXiR0Zu', // Replace with the ID of your price
                    quantity: 1,
                }, ],
                mode: 'payment',
                successUrl: 'https://afaces.tk/success',
                cancelUrl: 'https://afaces.tk/cancel',
            })
            .then(function(result) {
            });
        })
}

</script>

## Please make sure you really want to donate, there is not a refund.
#### Click on any button to proceed
###### please wait a few seconds for the page to be loaded.

<input type="button" id="checkout" onclick = "redirectToCheckoutOne()" value="Donate 1€ to Afaces">
<input type="button" id="checkout" onclick = "redirectToCheckoutFive()" value="Donate 5€ to Afaces">
<input type="button" id="checkout" onclick = "redirectToCheckoutTwenty()" value="Donate 20€ to Afaces">
<input type="button" id="checkout" onclick = "redirectToCheckoutFifty()" value="Donate 50€ to Afaces">
<input type="button" id="checkout" onclick = "redirectToCheckoutOneHundred()" value="Donate 100€ to Afaces">

<div class="paypalbutton">
    <a href="https://paypal.com/paypalme/axelcurros">
        <img border="0" alt="PayPal" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg">
    </a>
</div>