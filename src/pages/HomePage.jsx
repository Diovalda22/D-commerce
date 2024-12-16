import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductCart } from "../components/ProductCard";
import product1Img from "../assets/images/jacket-raincoat.jpg";
import product2Img from "../assets/images/black-coat-jacket.jpg";

const HomePage = () => {
  const productRaw = [
    {
      imageUrl: product1Img,
      name: "Multicolored jacket/raincoat",
      price: 100000,
      stock: 10,
    },
    {
      imageUrl: product2Img,
      name: "Black Coat Jacket",
      price: 200000,
      stock: 0,
    },
  ];

  const products = productRaw.map((product) => {
    return (
      <ProductCart
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        stock={product.stock}
      />
    );
  });

  return (
    <>
      <main className="max-w-screen-md mx-auto p-4 mt-8">
        <div className="pb-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
            Become a trend-setter with us.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Dio-commerce provides you with the finest clothings and ensures your
            confidence throughout your days
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">{products}</div>
      </main>
    </>
  );
};

export default HomePage;
