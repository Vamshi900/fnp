import React from 'react'
import { usePersistedState } from '../Hooks/customHooks';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const StyledProductCard = styled.div`
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
            <div className='tag'>
                {props.product.bestSeller ? <span className='bestSeller'>BEST SELLER</span> : null}

                <div onClick={() => { setFav(!isFav) }}>  <FontAwesomeIcon
                    icon={faHeart}
                    onClick={() => setFav(!isFav)}
                /></div>
            </div>
            <a href={`${props.product.landingPage}`} target={'_blank'} className="styledCard">
                <span style={{
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
                </span>
                <div className="p-3">
                    <h3 className="font-bold text-xl mb-3">
                        {props.product.title}

                    </h3>
                    <div className="stylePrice">
                        {
                            props.product.discountPercentage ? <span> ₹ {Math.round(props.product.sellingPrice * ((100 - props.product.discountPercentage) / 100))} </span> : <span>₹  {props.product.sellingPrice}</span>

}
                    </div>
                    {
                        props.product.discountPercentage ? <div className='actualPrice'>₹ {props.product.sellingPrice} </div> : null
                    }
                    {props.product.discountPercentage ? <span className='offer'>{props.product.discountPercentage} % OFF</span> : null}
                    <StarRatings
                        rating={props.product.ratingCount}
                        starRatedColor="yellow"
                        numberOfStars={5}
                        name='rating'
                        starDimension="15px"
                        starSpacing="3px"
                    />
                    <span>{props.product.reviewCount} reviews</span>
                </div>
            </a>
        </StyledProductCard>
    )
}

export default ProductCard