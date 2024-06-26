// import Paddle from '@paddle/paddle-js';
// import Link from "next/link";
// import Script from "next/script";
// import React from "react";
// import { getProductById, getProducts } from "@/components/paddle";

// interface Product {
//   id: number;
//   name: string;
//   base_price: number;
//   // Add any other properties of the product object
// }

// interface ProductPageProps {
//   product: Product;
// }

// const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
//   return (
//     <div className="max-w-6xl mx-auto px-20 py-10">
//       <Script
//         id="paddle"
//         src="https://cdn.paddle.com/paddle/paddle.js"
//         onLoad={() => {
//             Paddle.Initialize({
//               vendor: process.env.VENDOR_ID,
//               // debug: true,
//             });
//           }}
          
//       />

//       <Link href="/">
//         <a className="text-sm text-gray-500">Home</a>
//       </Link>
//       <h2 className="text-xl font-bold">{product.name}</h2>
//       <a
//         href="#!"
//         className="paddle_button mt-2 inline-flex px-3 py-2 border rounded bg-gray-100 shadow-sm"
//         data-product={product.id?.toString()}
//         data-theme="none"
//       >{`Buy for ${product.base_price}`}</a>
//       <div className="mt-3">{JSON.stringify(product, null, 2)}</div>
//     </div>
//   );
// };

// export async function getStaticProps(context: { params: { productId: string } }) {
//   const pid = context.params.productId;
//   const product = await getProductById(pid);

//   return {
//     props: {
//       product,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const products = await getProducts();
//   const paths = products.map((product) => ({ params: { productId: product.id.toString() } }));

//   return {
//     paths,
//     fallback: true, // false or 'blocking'
//   };
// }

// export default ProductPage;
