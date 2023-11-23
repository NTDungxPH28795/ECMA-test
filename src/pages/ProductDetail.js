import { products } from "@/data/index.js";

const ProductDetailPage = ({id}) => {
    const product = products.find((product) => product.id === +id);
    if (!product) return "Product not found";
    return `
        ${product.name}
    `;
};
export default ProductDetailPage;