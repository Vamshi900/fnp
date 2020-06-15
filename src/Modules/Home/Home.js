import React, { useReducer, useRef } from 'react'
import Loader from '../../Components/Loader'
import ProductCard from '../../Components/ProductCard'
import { pageReducer, productReducer } from './data/reducer';
import { useFetch, useInfiniteScroll, useLazyLoading } from '../../Hooks/customHooks'
import styled from 'styled-components';
import './home.css';

const HomeContainer = styled.div`
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 3rem 0rem;
    flex-grow: 1;
    padding-left: 0;
    padding-right: 0;
`;
const ProductList = styled.div`
display: flex;
-webkit-box-pack: start;
justify-content: center;
flex-wrap: wrap;
width: 100%;
`;


const PageBottomBound = styled.div`
    border: 1px solid #fff;
    height: 10px;
    background: #fff;
    width: 100%;`;

const Error = styled.div`
    color:black;
    margin-top: 10vh;
    `;

function Home() {
    let content = null
    let bottomBoundaryRef = useRef(null);

    const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 })
    const [products, productDispatch] = useReducer(productReducer, { data: [], loading: false, error: false })

    useFetch(pager, productDispatch);
    useLazyLoading('.productCard', products.images)
    useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

    if (products.error) {
        content = <Error>
            There was an error please refresh or try again later.
        </Error>
    }
    if (products.loading) {
        content = <Loader></Loader>
    }

    if (products.data.length > 0) {
        let cards = products.data.map((product, index) =>
            <ProductCard
                product={product}
                id={product.sku + index}
                key={product.sku + index}
            ></ProductCard>

        )
        content = <ProductList className="cardWrapper">
            {cards}
        </ProductList>
    }

    return (
        <HomeContainer>
            {content}
            <PageBottomBound id='page-bottom-boundary' ref={bottomBoundaryRef}></PageBottomBound>
        </HomeContainer>
    )
}

export default Home;