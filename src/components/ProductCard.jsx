import { useState } from "react";
import { Button } from "./ui/button";
import { IoAdd, IoRemove, IoCart, IoCartOutline } from "react-icons/io5";

export const ProductCart = ({ imageUrl, name, price, stock }) => {
  const [cartIcon, setCartIcon] = useState("IoCartOutline");
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleCartButton = () => {
    setCartIcon("IoCart");
    alert("Product added to cart");
  };

  return (
    <div className="p-4 rounded-md border md:max-w-96 flex flex-col gap-4">
      {/* ProductImage */}
      <div className="aspect-square w-full overflow-hidden">
        <img className="w-full" src={imageUrl} alt="product" />
      </div>

      {/* Description */}
      <div>
        <p className="text-md">{name}</p>
        <p className="text-xl font-semibold">
          Rp. {price.toLocaleString("id-ID")}
        </p>
        <p className="text-sm text-muted-foreground">In stock: {stock}</p>
      </div>

      {/* ButtonQuantity */}
      <div className="flex justify-between items-center">
        <Button
          disabled={quantity <= 0}
          size="icon"
          variant="ghost"
          onClick={decrementQuantity}
        >
          <IoRemove className="h-6 w-6" />
        </Button>
        <p className="font-bold">{quantity}</p>
        <Button
          disabled={quantity >= stock}
          size="icon"
          variant="ghost"
          onClick={incrementQuantity}
        >
          <IoAdd className="h-6 w-6" />
        </Button>
      </div>

      {/* Button Cart and Checkout */}
      <div className="flex gap-2">
        <Button onClick={handleCartButton} disabled={!stock}>
          {cartIcon === "IoCartOutline" ? <IoCartOutline /> : <IoCart />}
        </Button>
        <Button onClick="" className="w-full" disabled={!stock}>
          {stock > 0 ? "Check out" : "Out of stock"}
        </Button>
      </div>
    </div>
  );
};
