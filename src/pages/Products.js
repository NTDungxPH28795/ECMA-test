import { products } from "@/data";

const ProductsPage = () => {
    console.log(products);
    return `
        <div class="container">
            <div class="row">${products.map((product)=>{
                return `<div class="col">
                    <h3><a href="/product/${product.id}">${product.name}</a></h3>
                    <span>${product.price}</span>
                </div>`
            })}</div>
        </div>
    `
}

export default ProductsPage;