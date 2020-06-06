import React, { useReducer, useRef } from 'react'
import Loader from '../../Components/Loader'
import ProductCard from '../../Components/ProductCard'
import { pageReducer, productReducer } from './data/reducer';
import { useFetch, useInfiniteScroll, useLazyLoading } from '../../Hooks/customHooks'


function Home() {
    let content = null
    let bottomBoundaryRef = useRef(null);

    const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 })
    const [products, productDispatch] = useReducer(productReducer, { data: [], loading: false, error: false })

    useFetch(pager, productDispatch);
    useLazyLoading('.productCard', products.images)
    useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

    if (products.error) {
        content = <div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }
    if (products.loading) {
        content = <Loader></Loader>
    }

    if (products.data.length > 0) {
        console.log(products)
        content = products.data.map((product, index) =>
            <div key={product.sku + index} className="productCard">
                <ProductCard
                    product={product}
                    id={product.sku + index}
                />
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl mb-3">
                Best Sellers
            </h1>
            <div className="md:flex flex-wrap md:-mx-3">
                {content}
            </div>
            <div id='page-bottom-boundary' style={{ border: '1px solid red' }} ref={bottomBoundaryRef}></div>
        </div>
    )
}

export default Home;