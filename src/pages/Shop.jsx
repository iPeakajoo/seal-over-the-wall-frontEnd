import ProductList from "../components/productPage/ProductList"
import FilterLeftSidebar from "../components/productPage/FilterLeftSidebar";
import BreadcrumbTop from "../components/mainMenu/BreadcrumbTop";

const Shop = () => {
  return (
    <>
    <div className="mt-25 mb-4 pl-10">
    <BreadcrumbTop />
    </div>
    
    <div class="flex flex-col justify-center items-center">
      <h5 class="text-[32px] font-bold text-[#2639A1]">New Arrivals</h5>
      <div class="flex justify-center items-center my-8 gap-8 text-xl text-black">
        <p>T-shirt</p> 
        <p>cup</p>
        <p>bags</p>
      </div>
      {/* <div class="flex justify-center items-center  gap-4  text-gray-400">
        <span class=" font-semibold">1</span>
        <span>2</span>  
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </div> */}
    </div>
    <FilterLeftSidebar />
    <ProductList />
    </>
  )
}
export default Shop