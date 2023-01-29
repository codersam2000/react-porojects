import Header from "../componants/Header";
import ProductCard from "../componants/ProductCard";
import { useFetch } from "../hooks/useHook";
const Home = ()=>{
    const {data:products, isLoading, error} = useFetch(`http://localhost:8080/product`,[]);
    return(
        <div>
            <Header />
            <div class="page-banner">
                <div class="page-banner__details">
                    <div class="page-banner__details__title">
                        <h1>Our E-commerce Website</h1>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="container">
                    <div class="section__head">
                        <div class="product__details__title">
                            <h2>
                                All Products
                            </h2>
                        </div>
                    </div>
                    <div class="section__content">
                    {isLoading && <div>Loding..........</div>}
                    {error && <div>{error}</div>}
                        <div class = "grid three">
                            {products?.map(product => (
                                <ProductCard key={product.id} product={product}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;