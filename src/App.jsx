import AppRoutes from "./routes/AppRoutes"
import Checkout from "./pages/checkout/CheckOut"
import CheckoutSummary from "./pages/checkout/CheckoutSummary"
import CheckoutButton from "./components/CheckoutButton"
import CheckoutAddress from "./components/CheckoutAddress"
import CheckoutShipping from "./components/CheckoutShipping"




const App = () => {
  return (
   <div>
    {/* <AppRoutes /> */}
    {/* <CheckoutSummary/> */}

    <div class = "w-[1072px] mt-44">
      <CheckoutShipping method="Fastest Delivery"/>
      {/* <CheckoutAddress className="outline-1" name='Teeramaet' address='49/547 Sammakorn Nimitmai Bangkok 10510 Thailand' tel='089-482-1873'></CheckoutAddress> */}
      {/* <CheckoutButton currentStep = "payment" orderValue={5000} /> */}
    </div>
    </div>

  )
}
export default App
