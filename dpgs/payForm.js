function validateForm() {
    // Get form elements
    const cardNumber = document.getElementById('card-number');
    const expirationDate = document.getElementById('expiration-date');
    const cvv = document.getElementById('cvv');
    const billingAddress = document.getElementById('billing-address');
  
    // Card Number Validation
    if (!cardNumber.value.match(/^\d{16}$/)) {
      alert('Please enter a valid 16-digit card number.');
      return false;
    }
  
    // Expiration Date Validation
    const [month, year] = expirationDate.value.split('/');
    if (month < 1 || month > 12 || year < 23) {
      alert('Please enter a valid expiration date (MM/YY).');
      return false;
    }
  
    // CVV Validation
    if (!cvv.value.match(/^\d{3}$/)) {
      alert('Please enter a valid 3-digit CVV.');
      return false;
    }
  
    // Billing Address Validation (Optional, adjust based on requirements)
    if (billingAddress.value.trim() === '') {
      alert('Please enter a valid billing address.');
      return false;
    }
  
    // Additional security considerations:
    // - Use a library like jQuery Validate for more advanced validation rules.
    // - Implement server-side validation to prevent client-side manipulation.
    // - Consider using a payment gateway like Stripe or PayPal for secure payment processing.
  
    return true;
  }