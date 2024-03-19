"use client";
import { useCartStore } from "@/store";
import { Product } from "@/typings/productTypings";
import { Button } from "./ui/button";
import RemoveFromCart from "./RemoveFromCart";
import { ArrowRight } from "lucide-react";

function AddToCart({ product }: { product: Product }) {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);

  console.log(cart);

  const howmanyInCart = cart.filter(
    (item) => item.meta.sku === product.meta.sku
  ).length;

  console.log("How many in cart: ", howmanyInCart);

  const handleAdd = () => {
    console.log("Adding to Cart", product);
    addToCart(product);
  };

  if (howmanyInCart > 0) {
    return (
      <div className='flex space-x-5 items-center'>
        <RemoveFromCart product={product} />

        <span>{howmanyInCart}</span>
        <Button className='bg-walmart hover:bg-walmart/50' onClick={handleAdd}>
          +
        </Button>
      </div>
    );
  }
  return (
    <Button className='bg-walmart hover:bg-walmart/50' onClick={handleAdd}>
      Add To Cart
      {/* <ArrowRight className='px-.5 text-[12px]' /> */}
    </Button>
  );
}

export default AddToCart;
