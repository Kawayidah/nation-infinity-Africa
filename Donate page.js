function showPaymentSection() {
    const method = document.getElementById('payment-method').value;

    // Hide all sections first
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    if (method === 'paypal') {
        document.getElementById('paypal-section').classList.remove('hidden');
        initPayPalButton(); // Initialize PayPal button
    }
    // Other payment section logic can be added here...
}

function initPayPalButton() {
    const paypalButtonContainer = document.getElementById('paypal-button-container');
    
    // Clear any previous buttons
    paypalButtonContainer.innerHTML = '';

    // Render the PayPal button
    paypal.Buttons({
        createOrder: function(data, actions) {
            const amount = document.getElementById('paypal-amount').value;
            const currency = document.getElementById('paypal-currency').value;

            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: amount,
                        currency_code: currency
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                showMessage(`Payment of ${details.purchase_units[0].amount.value} ${details.purchase_units[0].amount.currency_code} completed by ${details.payer.name.given_name}.`);
            });
        },
        onCancel: function(data) {
            showMessage('Payment was cancelled.');
        },
        onError: function(err) {
            console.error(err);
            showMessage('An error occurred during the payment process.');
        }
    }).render(paypalButtonContainer); // Render the PayPal button
}

function showMessage(message) {
    const messageContainer = document.getElementById('message');
    messageContainer.innerHTML = message;
    messageContainer.classList.remove('hidden');
}
function showPaymentSection() {
    const method = document.getElementById('payment-method').value;

    // Hide all sections first
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    if (method === 'paypal') {
        document.getElementById('paypal-section').classList.remove('hidden');
        initPayPalButton(); // Initialize PayPal button
    } else if (method === 'mobile') {
        document.getElementById('mobile-money-section').classList.remove('hidden');
    } else if (method === 'bank') {
        document.getElementById('bank-transfer-section').classList.remove('hidden');
    }
}

function copyBankDetails() {
    const bankDetails = `Account Name: Nation Infinity Africa\nAccount Number: 09999336999\nBank: DFCCU Bank`;
    navigator.clipboard.writeText(bankDetails)
        .then(() => {
            alert('Bank details copied to clipboard!');
        })
        .catch(err => {
            console.error('Error copying text: ', err);
        });
}