import React from 'react'
import { usePersistedState } from '../Hooks/customHooks';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import { BestSeller, FavIcon, Tag, CardImage, Content, DiscountPercent, OfferWrapper, ActualPrice, Reviews, CardTitleText } from './ProductCard.styled';

const StyledProductCard = styled.div`
 position:relative;
 background-color: #f1f1f1;
flex: 0 1 calc(25% - 1em);
    padding: 6px;
    border-radius: 4px;
    margin: 0px 0.8% 0.8% 0px;
    transition: all 0.25s ease-in-out 0s;
    @media (min-width: 40em) {
        &.card {
           max-width: calc(30% -  1em);
           flex: 0 1 calc(30% - 1em);
        }
\    }
    
    @media (min-width: 60em) {
        &.card {
            max-width: calc(25% - 1em);
        }
    }    
   `;


function ProductCard(props) {
    const [isFav, setFav] = usePersistedState(props.id, false)
    return (
        <StyledProductCard className='card'>
            <Tag className='tag'>
                {props.product.bestSeller ? <BestSeller className='bestSeller'>BEST SELLER</BestSeller> : null}

                <FavIcon onClick={() => { setFav(!isFav) }} isFav={isFav}>  <FontAwesomeIcon
                    icon={faHeart}
                    onClick={() => setFav(!isFav)}
                /></FavIcon>
            </Tag>
            <a href={`${props.product.landingPage}`} rel="noopener noreferrer" target={'_blank'} className="styledCard">
                <CardImage style={{
                    'backgroundImage': `url('${props.product.imgSrc}')`,
                    'display': 'flex',
                    'flexDirection': 'column',
                    'WebkitBoxPack': 'end',
                    'justifyContent': 'flex-end',
                    'width': '100%',
                    'lineHeight': 0,
                    'position': 'relative',
                    'height': '100px'
                }}
                    className="w-full h-64 bg-blue bg-cover"
                >
                </CardImage>
                <Content className="p-3">
                    <CardTitleText className="font-bold text-xl mb-3">
                        {props.product.title}

                    </CardTitleText>
                    <div className="stylePrice">
                        {
                            props.product.discountPercentage ? <span> ₹ {Math.round(props.product.sellingPrice * ((100 - props.product.discountPercentage) / 100))} </span> : <span>₹  {props.product.sellingPrice}</span>

                        }
                    </div>
                    <OfferWrapper>
                        {props.product.discountPercentage ? <DiscountPercent className='offer'>{props.product.discountPercentage} % OFF</DiscountPercent> : null}
                        {
                            props.product.discountPercentage ? <ActualPrice className='actualPrice'>₹ {props.product.sellingPrice} </ActualPrice> : null
                        }
                    </OfferWrapper>



                    <StarRatings
                        rating={props.product.ratingCount}
                        starRatedColor="yellow"
                        numberOfStars={5}
                        name='rating'
                        starDimension="15px"
                        starSpacing="3px"

                    />
                    <Reviews>{props.product.reviewCount} reviews</Reviews>
                </Content>
            </a>
        </StyledProductCard>
    )
}

export default ProductCard