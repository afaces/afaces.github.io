#### Make sure you really want to donate, there is not a refund.

###### please wait a few seconds for the page to be loaded when any button or image is pressed to proceed.

<div class="paypalbutton">
<input type="button" title="Donate 1€" onclick="location.href='https://buy.stripe.com/8wMg0kfQbfdr22I001';" value="Donate 1€">

<input type="button" title="Donate 15€" onclick="location.href='https://buy.stripe.com/bIY6pK5bx8P3dLqbIK';" value="Donate 5€">

<input type="button" title="Donate 20€" onclick="location.href='https://buy.stripe.com/8wM29u33pfdr0YEeUX';" value="Donate 20€">

<input type="button" title="Donate 50€" onclick="location.href='https://buy.stripe.com/dR6bK48nJ6GVaze3cg';" value="Donate 50€">

<input type="button" title="Donate 100€"  onclick="location.href='https://buy.stripe.com/bIY5lG9rN9T78r6dQW';" value="Donate 100€">
</div>

## To donate through PayPal: 

<div class="paypalbutton">
    <a href="https://paypal.com/paypalme/axelcurros">
        <img border="0" alt="PayPal" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg">
    </a>
</div>

## To donate through cryptocurrency: 

<style>
    tip-button:hover 
        {
        position:relative;
        left: 3px;
        }
    .tip-button:active 
        {
        color:gold;
        }
</style>

#### ApeCoin 

<img id="demo" src="https://img.shields.io/badge/APE%20Adress%3A-0xC429F920caa9D9Fa4b1FAC8e3F247c7fE8Dcfc9C-blue" title="APE address" value="0xC429F920caa9D9Fa4b1FAC8e3F247c7fE8Dcfc9C" onclick="copyData();" />0xC429F920caa9D9Fa4b1FAC8e3F247c7fE8Dcfc9C
<input type="button" title="Copy APE Address to clipboard" onclick="copyData()" onmouseout="outFunc()" value = "Copy">


<textarea id="textArea">0xC429F920caa9D9Fa4b1FAC8e3F247c7fE8Dcfc9C</textarea>

<div class="paypalbutton">
    <img src="assets/ape_wallet_qr.jpg" width="150" height="150" title="APE Wallet QR code" onclick="copyData();" onmouseout="outFunc()"/> 
</div>

#### Ethereum 0xD2592996A462A5C5478fF3AfE09943095ce4C178
[![ETH](https://img.shields.io/badge/Ethereum%20Adress%3A-0xD2592996A462A5C5478fF3AfE09943095ce4C178-blue)]()


<div class="paypalbutton">
    <img src="assets/eth_wallet_qr.jpg" width="150" height="150" />
</div>

<script>

function copyData() {
    var text = document.getElementById("textArea").value;
    var listener = function(ev) {
	 ev.clipboardData.setData("text/plain", text);
	 ev.preventDefault();
    };
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);

    navigator.clipboard.writeText(text.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + text.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
</script>


###### Donate 0.01 ETH

<img class="tip-button" src="https://www.srcmake.com/uploads/5/3/9/0/5390645/donateetherbutton_orig.png" alt="Metamask tip button" style="width:97%;">
<div class="message"></div>

<script>
    var MY_ADDRESS = '0xD2592996A462A5C5478fF3AfE09943095ce4C178'
    var tipButton = document.querySelector('.tip-button')
    
    tipButton.addEventListener('click', function() 
        {
        if (typeof web3 === 'undefined') 
            {
            return renderMessage('<div>You need to install <a href=“https://metmask.io“>MetaMask </a> to use this feature.  <a href=“https://metmask.io“>https://metamask.io</a></div>')
            }
    
        var user_address = web3.eth.accounts[0]
    
        web3.eth.sendTransaction(
            {
            to: MY_ADDRESS,
            from: user_address,
            value: web3.toWei('0.01', 'ether'),
            }, 
            function (err, transactionHash) 
                {
                if (err) return renderMessage('There was a problem!: ' + err.message)
                renderMessage('Thanks for the generosity!!')
            })
        })
    
    function renderMessage (message) 
        {
        var messageEl = document.querySelector('.message')
        messageEl.innerHTML = message
        }
</script>

