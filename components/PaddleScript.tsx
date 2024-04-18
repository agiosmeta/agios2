import Script from 'next/script';

export const PaddleScript = () => (
  <Script
    src="https://cdn.paddle.com/paddle/paddle.js"
    onLoad={() => {
      initPaddle();
    }}
  />
);

const initPaddle = () => {
  if (typeof window !== 'undefined' && window.Paddle) {
    if (process.env.NEXT_PUBLIC_PADDLE_SANDBOX === 'true') {
      window.Paddle.Environment.set('sandbox');
    }
    window.Paddle.Setup({ vendor: Number(process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID) });
  } else {
    console.error('Paddle.js script did not load correctly.');
  }
};
