"use client";

import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    Paddle: any;
  }
}

interface CheckoutButtonProps {
  userEmail: string;
  productId: string;
}

const CheckoutButton = ({ userEmail, productId }: CheckoutButtonProps) => {
  const [paddleLoaded, setPaddleLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPaddleLoaded(true);
    }
  }, []);

  const handleCheckout = () => {
    if (paddleLoaded && window.Paddle) {
      window.Paddle.Checkout.open({
        product: productId,
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
