

## Please make sure you really want to donate, there is not a refund.
#### Click on any button to proceed
###### please wait a few seconds for the page to be loaded.

<script src="https://js.stripe.com/v3/"></script>
<script type="text/javascript">
function redirectToCheckoutOne() {
    var stripe = Stripe('pk_live_51LP7WYGzzgXMTNqrg7ECBiuknWQo4TLUoyYX6NERMhNsr0DmdY7O7znm3vxOSNNvCCil4AfsbSNJPWjQppX7YgF700jrHHNVWZ');
    
    document.getElementById("checkout").addEventListener("click", function() {
        stripe.redirectToCheckout({
                lineItems: [{
                    price: 'price_1LPblJGzzgXMTNqr1aO4jCXi', // Replace with the ID of your price
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
<input type="button" id="checkout" onclick = "redirectToCheckoutOne()" value="Donate 1€ to Afaces">

<script src="https://js.stripe.com/v3/"></script>
<script type="text/javascript">
function redirectToCheckoutFive() {
    var stripe = Stripe('pk_live_51LP7WYGzzgXMTNqrg7ECBiuknWQo4TLUoyYX6NERMhNsr0DmdY7O7znm3vxOSNNvCCil4AfsbSNJPWjQppX7YgF700jrHHNVWZ');
    
    document.getElementById("checkout").addEventListener("click", function() {
        stripe.redirectToCheckout({
                lineItems: [{
                    price: 'price_1LPblJGzzgXMTNqrWBEQtXoJ', // Replace with the ID of your price
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
<input type="button" id="checkout" onclick = "redirectToCheckoutFive()" value="Donate 5€ to Afaces">

<script src="https://js.stripe.com/v3/"></script>
<script type="text/javascript">
function redirectToCheckoutTwenty() {
    var stripe = Stripe('pk_live_51LP7WYGzzgXMTNqrg7ECBiuknWQo4TLUoyYX6NERMhNsr0DmdY7O7znm3vxOSNNvCCil4AfsbSNJPWjQppX7YgF700jrHHNVWZ');
    
    document.getElementById("checkout").addEventListener("click", function() {
        stripe.redirectToCheckout({
                lineItems: [{
                    price: 'price_1LPblJGzzgXMTNqrLPdpAb1q', // Replace with the ID of your price
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
<input type="button" id="checkout" onclick = "redirectToCheckoutTwenty()" value="Donate 20€ to Afaces">

<script src="https://js.stripe.com/v3/"></script>
<script type="text/javascript">
function redirectToCheckoutFifty() {
    var stripe = Stripe('pk_live_51LP7WYGzzgXMTNqrg7ECBiuknWQo4TLUoyYX6NERMhNsr0DmdY7O7znm3vxOSNNvCCil4AfsbSNJPWjQppX7YgF700jrHHNVWZ');
    
    document.getElementById("checkout").addEventListener("click", function() {
        stripe.redirectToCheckout({
                lineItems: [{
                    price: 'price_1LPblJGzzgXMTNqrw2kNK7Od', // Replace with the ID of your price
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
<input type="button" id="checkout" onclick = "redirectToCheckoutFifty()" value="Donate 50€ to Afaces">

<script src="https://js.stripe.com/v3/"></script>
<script type="text/javascript">
function redirectToCheckoutOneHundred() {
    var stripe = Stripe('pk_live_51LP7WYGzzgXMTNqrg7ECBiuknWQo4TLUoyYX6NERMhNsr0DmdY7O7znm3vxOSNNvCCil4AfsbSNJPWjQppX7YgF700jrHHNVWZ');
    
    document.getElementById("checkout").addEventListener("click", function() {
        stripe.redirectToCheckout({
                lineItems: [{
                    price: 'price_1LPblKGzzgXMTNqruyXcvpTn', // Replace with the ID of your price
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
<input type="button" id="checkout" onclick = "redirectToCheckoutOneHundred()" value="Donate 100€ to Afaces">

<div class="paypalbutton">
    <a href="https://paypal.com/paypalme/axelcurros">
        <img border="0" alt="PayPal" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg">
    </a>
    <form action="https://www.paypal.com/donate" method="post" target="_top">
 <!-- Identify your business so that you can collect the payments. -->
 <input type="hidden" name="business" value="axelfernandezcurros@gmail.com">
 <!-- Specify details about the contribution -->
 <input type="hidden" name="no_recurring" value="0">
 <input type="hidden" name="item_name" value="Afaces music">
 <input type="hidden" name="item_number" value="Make a donation">
 <input type="hidden" name="currency_code" value="EUR">
 <!-- Display the payment button. -->
 <input type="image" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" alt="Donate">
 <img alt="" width="1" height="1" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" >
</form>
</div>