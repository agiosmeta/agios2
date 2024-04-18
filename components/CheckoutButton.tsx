import React from 'react';

declare global {
  interface Window {
    Paddle: any;
  }
}

interface CheckoutButtonProps {
  userEmail: string;
}

const CheckoutButton = ({ userEmail }: CheckoutButtonProps) => {
  const productIds = ['pro_01hvkkv164kpxjmaq0s9vb2r9x', 'pro_01hvcx3fcwmw146qzvfy438yzx']; // Replace with your actual product IDs

  const handleCheckout = () => {
    if (window.Paddle) {
      window.Paddle.Checkout.open({
        product: productIds,
        email: userEmail,
        // Add any other options required by Paddle.js
      });
    } else {
      console.error('Paddle.js script did not load correctly.');
    }
  };

  return <button onClick={handleCheckout}>Checkout</button>;
};

export default CheckoutButton;
