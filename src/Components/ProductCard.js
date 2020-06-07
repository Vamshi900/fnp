import React from 'react'
import { usePersistedState } from '../Hooks/customHooks';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import { BestSeller, FavIcon, Tag, CardImage, Content } from './ProductCard.styled';

const StyledProductCard = styled.div`
 position:realtive;
 background-color: #f1f1f1;
flex: 0 1 calc(25% - 1em);
    padding: 6px;
    border-radius: 4px;
    margin: 0px 0.8% 0.8% 0px;
    transition: all 0.25s ease-in-out 0s;
    calc(25% - 1em)
   `;


function ProductCard(props) {
    const [isFav, setFav] = usePersistedState(props.id, false)
    return (
        <StyledProductCard>
            <Tag className='tag'>
                {props.product.bestSeller ? <BestSeller className='bestSeller'>BEST SELLER</BestSeller> : null}

                <FavIcon onClick={() => { setFav(!isFav) }}>  <FontAwesomeIcon
                    icon={faHeart}
                    onClick={() => setFav(!isFav)}
                /></FavIcon>
            </Tag>
            <a href={`${props.product.landingPage}`} target={'_blank'} className="styledCard">
                <CardImage style={{
                    'backgroundImage': `url('${props.product.imgSrc}')`,
                    'display': 'flex',
                    'flex-direction': 'column',
                    '-webkit-box-pack': 'end',
                    'justify-content': 'flex-end',
                    'width': '100%',
                    'line-height': 0,
                    'position': 'relative',
                    'height': '100px'
                }}
                    className="w-full h-64 bg-blue bg-cover"
                >
                </CardImage>
                <Content className="p-3">
                    <h3 className="font-bold text-xl mb-3">
                        {props.product.title}

                    </h3>
                    <div className="stylePrice">
                        {
                            props.product.discountPercentage ? <span> ₹ {Math.round(props.product.sellingPrice * ((100 - props.product.discountPercentage) / 100))} </span> : <span>₹  {props.product.sellingPrice}</span>

                        }
                    </div>
                    <div>
                        {props.product.discountPercentage ? <span className='offer'>{props.product.discountPercentage} % OFF</span> : null}
                        {
                            props.product.discountPercentage ? <span className='actualPrice'>₹ {props.product.sellingPrice} </span> : null
                        }
                    </div>



                    <StarRatings
                        rating={props.product.ratingCount}
                        starRatedColor="yellow"
                        numberOfStars={5}
                        name='rating'
                        starDimension="15px"
                        starSpacing="3px"
                    />
                    <span>{props.product.reviewCount} reviews</span>
                </Content>
            </a>
        </StyledProductCard>
    )
}

export default ProductCard