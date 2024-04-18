declare global {
  interface Window {
    Paddle: PaddleNamespace;
  }
}

interface PaddleNamespace {
  Environment: {
    set: (env: 'sandbox' | 'production') => void;
  };
  Setup: (options: PaddleSetupOptions) => void;
}

interface PaddleSetupOptions {
  vendor: number;
  // Add any other options provided by Paddle.js here
}
