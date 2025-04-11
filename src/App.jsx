import AppRoutes from "./routes/AppRoutes"
import Checkout from "./pages/checkout/CheckOut"
import CheckoutSummary from "./pages/checkout/CheckoutSummary"
import CheckoutButton from "./components/CheckoutButton"

const App = () => {
  return (
   <div>
    <AppRoutes />
    {/* <CheckoutSummary/> */}

    <div class = "w-[1072px] mt-44">
      <CheckoutButton currentStep = "payment" orderValue={50} />
    </div>
    </div>
    
  )
}
export default App