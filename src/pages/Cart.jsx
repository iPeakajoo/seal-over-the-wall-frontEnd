import CartBox from '../components/CartBox';
import CheckedBox from '../components/ui/CheckedBox';
import GiftCard from '../components/GiftCard';
import Questions from '../components/Questions';
import AdBox from '../components/AdBox';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [orderItem, setOrderItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setOrderItem([
      {
        image: [
          'src/assets/images/Products/shirt/espresso/espresso-shirt-black-back.png',
          'src/assets/images/Products/shirt/espresso/espresso-shirt-blue-back.png',
          'src/assets/images/Products/shirt/espresso/espresso-shirt-gray-front.png',
          'src/assets/images/Products/shirt/espresso/espresso-shirt-white-front.png'
        ],
        name: 'More Espresso',
        size: 'M',
        color: 'black',
        productType: 'shirt',
        quantity: 1,
        price: 499
      },
      {
        image: [
          'src/assets/images/Products/shirt/fetch/fetch-shirt-black-front.png',
          'src/assets/images/Products/shirt/fetch/fetch-shirt-blue-front.png',
          'src/assets/images/Products/shirt/fetch/fetch-shirt-gray-front.png',
          'src/assets/images/Products/shirt/fetch/fetch-shirt-white-front.png'
        ],
        name: 'Fetch This',
        size: 'M',
        color: 'white',
        productType: 'shirt',
        quantity: 1,
        price: 299
      },
      {
        image: [
          'src/assets/images/Products/bag/dont/dont-bag-black-front.png',
          'src/assets/images/Products/bag/dont/dont-bag-blue-front.png',
          'src/assets/images/Products/bag/dont/dont-bag-gray-front.png',
          'src/assets/images/Products/bag/dont/dont-bag-white-front.png'
        ],
        name: 'Dont kill my vibe',
        size: 'M',
        color: 'white',
        productType: 'bag',
        quantity: 1,
        price: 299
      },
      {
        image: [
          'src/assets/images/Products/cup/screaming/screaming-cup-black-front.png',
          'src/assets/images/Products/cup/screaming/screaming-cup-blue-front.png',
          'src/assets/images/Products/cup/screaming/screaming-cup-gray-front.png',
          'src/assets/images/Products/cup/screaming/screaming-cup-white-front.png'
        ],
        name: 'Have you try Screaming?',
        size: 'M',
        color: 'black',
        productType: 'cup',
        quantity: 1,
        price: 399
      }
    ]);
  }, []);

  useEffect(() => {
    const fetchCartData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Replace '/api/cart' with your actual API endpoint
        const response = await axios.get('/api/cart/populated/:cartId');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOrderItem(
          data.items.map((item) => {
            const product = item.productId; // The populated Product object
            const selectedColor = item.selectedColor;
            let imageUrl = '';

            if (product && product.color) {
              const colorVariant = product.color.find((c) => c.colorName === selectedColor);
              if (colorVariant && colorVariant.image && colorVariant.image.length > 0) {
                imageUrl = colorVariant.image[0]; // Or handle multiple images as needed
              }
            }

            return {
              imageArray: product?.color.find((c) => c.colorName === selectedColor)?.image || [], // Array of images for the selected color
              name: product?.styleName || '',
              size: item.selectedSize,
              color: selectedColor,
              quantity: item.quantity,
              price: product?.price || 0,
              productId: item.productId._id, // Access the ObjectId
              cartItemId: item._id
            };
          })
        );
        setTotalPrice(data.total);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  if (loading) {
    return <div>Loading cart...</div>;
  }

  if (error) {
    return <div>Error loading cart: {error}</div>;
  }

  return (
    <div className="flex flex-col ">
      <h2 className="text-center text-4xl font-bold mt-[132px]">Cart</h2>

      <div className="flex justify-center  items-center w-full pl-[88px]">
        <div className="w-[1072px] flex justify-between mt-[50px] pb-[25px] border-b-2 border-secondary-light-gray-300"></div>
      </div>
      {orderItem.map((item, index) => (
        <CartBox
          key={item.cartItemId} // Use a unique ID from your cart item
          imageArray={item.image}
          name={item.name}
          size={item.size}
          color={item.color}
          quantity={item.quantity}
          price={item.price}
          productId={item.productId}
          cartItemId={item.cartItemId} // Add a function to trigger updates to the cart on the server
        />
      ))}

      <div className="flex flex-col justify-center items-center w-full mt-[42px] pl-[360px] mb-[72px]">
        <div className="flex w-[800px] mb-[32px]">
          <input
            type="text"
            placeholder="Apply a promo code"
            className="w-[664px] h-[56px] text-center border-2 border-secondary-light-gray-300"
          />
          <button className="w-[120px] h-[56px] ml-[16px] bg-secondary-light-gray-500 text-xl font-semibold hover:scale-105 duration-300 hover:cursor-pointer">
            Apply
          </button>
        </div>
        <div className="grid grid-cols-2 w-[800px] pb-[12px]">
          <p className="font-semibold text-lg">Your savings</p>
          <p className="text-right font-semibold text-lg">0.00 THB</p>
        </div>
        <div className="grid grid-cols-2 w-[800px] pb-[12px]">
          <p className="font-semibold text-lg">Shipping costs</p>
          <p className="text-right font-semibold text-lg">120 THB</p>
        </div>
        <div className="grid grid-cols-2 w-[800px] pb-[12px]">
          <p className="font-semibold text-lg">Tax inclusive</p>
          <p className="text-right font-semibold text-lg">7 %</p>
        </div>
        <div className="grid grid-cols-2 w-[800px] pb-[12px]">
          <p className="font-semibold text-lg">Total</p>
          <p className=" font-semibold text-lg text-right">{totalPrice}</p>
        </div>
        <button className="w-[800px] h-[56px] bg-black font-semibold text-white text-xl hover:scale-105 duration-300 hover:cursor-pointer">
          Check Out
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-[32px] w-[1616px] text-start">Gift Cards</h2>
        <div className="flex mb-[160px] gap-[16px]">
          <GiftCard giftImage="src/assets/images/GFC-500.png" giftName="500" giftPrize="500" />
          <GiftCard giftImage="src/assets/images/GFC-1000.png" giftName="1,000" giftPrize="1,000" />
          <GiftCard giftImage="src/assets/images/GFC-1500.png" giftName="1,500" giftPrize="1,500" />
          <GiftCard giftImage="src/assets/images/GFC-2000.png" giftName="2,000" giftPrize="2,000" />
        </div>
      </div>
      <AdBox />
      <Questions />
    </div>
  );
};
export default Cart;
