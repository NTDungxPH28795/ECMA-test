import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import AboutPage from "./pages/About";
import HomePage from "./pages/Home";

import { render, router } from "./utilities";
import ProductsPage from "./pages/Products";
import NotFoundPage from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetail";
import { data } from "autoprefixer";

router.on('/', ()=> render(HomePage, app));
router.on('/about', ()=> render(AboutPage, app));
router.on('/product', ()=> render(ProductsPage, app));
router.on("/product/:id", (params) => render(()=>ProductDetailPage(data), app));
router.notFound(()=> render(NotFoundPage, app))

router.resolve();