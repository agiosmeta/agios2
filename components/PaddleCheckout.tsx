// components/PaddleCheckout.tsx
'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
      Paddle: any; // Declare the Paddle object as a global variable
    }

interface PaddleCheckoutProps {
  product: {
    id: number;
    title: string;
    // Add any other properties of the product object
  };
}

const PaddleCheckout = ({ product }: PaddleCheckoutProps) => {
  useEffect(() => {
    Paddle.Setup({ vendor: process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID });
  }, []);

  const openCheckout = () => {
    Paddle.Checkout.open({
      product: product,
      email: user.email, // Make sure 'user' is defined and has an 'email' property
      successCallback: (data) => {
        // Handle successful checkout
        console.log(data);
      },
      closeCallback: () => {
        // Handle checkout close
        console.log('Checkout closed');
      },
    });
  };

  return <button onClick={openCheckout}>Checkout with Paddle</button>;
};

export default PaddleCheckout;
