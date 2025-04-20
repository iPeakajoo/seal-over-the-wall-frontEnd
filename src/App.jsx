import AppRoutes from "./routes/AppRoutes"
import Checkout from "./pages/checkout/CheckOut"
import CheckoutSummary from "./pages/checkout/CheckoutSummary"
import CheckoutButton from "./components/CheckoutButtonCard"
import CheckoutAddress from "./components/CheckoutAddressCard"
import CheckoutShippingCard from "./components/CheckoutShippingCard"
import CheckoutCard from "./components/CheckoutCardCard"
import CheckoutShipping from "./pages/checkout/CheckoutShipping"
import CheckoutPaymentCard from "./pages/checkout/CheckoutPaymentCard"
import Success from "./pages/Success"
import CheckoutPaymentQR from "./pages/checkout/CheckoutPaymentQR"




const App = () => {
  return (
   <div>
    {/* <AppRoutes /> */}
    {/* <CheckoutSummary/> */}
    {/* <Checkout/> */}

    <div>
      {/* <CheckoutPaymentCard/> */}
      {/* <CheckoutPaymentQR/> */}
      {/* <Success/> */}
      <CheckoutShipping/>
      {/* <CheckoutShippingCard method="Fastest Delivery" methodPrice={150}/> */}
      {/* <CheckoutCard cardNumber='1234 5678 9101 1112' expire="02/27"/> */}
      {/* <CheckoutAddress className="outline-1" name='Teeramaet' address='49/547 Sammakorn Nimitmai Bangkok 10510 Thailand' tel='089-482-1873'></CheckoutAddress> */}
      {/* <CheckoutButton currentStep = "payment" orderValue={5000} />
      <button className="btn btn:hover">Test</button> */}
    </div>
    </div>

  )

}

export default App
