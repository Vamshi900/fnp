import React, { useReducer, useRef } from 'react'
import Loader from '../../Components/Loader'
import ProductCard from '../../Components/ProductCard'
import { pageReducer, productReducer } from './data/reducer';
import { useFetch, useInfiniteScroll, useLazyLoading } from '../../Hooks/customHooks'
import styled from 'styled-components';


const HomeContainer = styled.div`
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 3rem 0rem;
    flex-grow: 1;
`;
const ProductList = styled.div`
display: flex;
-webkit-box-pack: start;
justify-content: center;
flex-wrap: wrap;
width: 100%;
`;
const ListItem = styled.li`
display: inline-block;
    width: calc(24.25%);
    margin: 0px 0.8% 0.8% 0px;`;

const StyledProductCard = styled(ProductCard)`
background-color: #f1f1f1;
width: 100px;
margin: 10px;
text-align: center;
line-height: 75px;
font-size: 30px;
    display: flex;
    min-height: 351px;
    padding: 6px;
    border-radius: 4px;
    margin: 0px 0.8% 0.8% 0px;
    transition: all 0.25s ease-in-out 0s;
    background: rgb(255, 255, 255);`
    ;
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
        content = products.data.map((product, index) =>
            <ProductCard
                product={product}
                id={product.sku + index}
            ></ProductCard>

        )
    }

    return (
        <HomeContainer>

            <ProductList className="cardWrapper">
                {content}
            </ProductList>
            <div id='page-bottom-boundary' style={{ border: '1px solid red' }} ref={bottomBoundaryRef}></div>
        </HomeContainer>
    )
}

export default Home;