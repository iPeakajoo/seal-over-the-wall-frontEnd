import React from "react";
import productDataStore from "../../stores/productDataStore";
import ProductCard from "./ProductCard";
import AdsBanner from "./AdsBanner";
import { motion } from "framer-motion";



const itemVariants1 = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};
const ProductList = () => {
  const items = productDataStore((state) => state.items);
  return (
    <section className="p-10 mx-auto my-8 w-404">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-52 gap-y-25">
        {items.map((item, index) => (
          <React.Fragment key={item.productId}>
            <motion.div
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants1}
              className="w-full"
            >
              <ProductCard item={item} />
            </motion.div>
            {index === 7 && (
              <div className="col-span-1 md:col-span-4">
                <motion.div
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants1}
              className="w-full"
            >
                <AdsBanner />
                </motion.div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
