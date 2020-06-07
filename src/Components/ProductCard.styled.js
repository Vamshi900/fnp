import styled from 'styled-components';


export const BestSeller = styled.div`
float: left;
    background: #00994f;
    font-size: 12px;
    padding: 0 5px;
    border-bottom-right-radius: 5px;
`;

export const Tag = styled.div`
position: absolute;
    z-index: 2;
    width: 100%;
`;

export const FavIcon = styled.div`
float: right;
    margin-right: 15px;
    color: green;
    margin-top: 3px`;



export const CardImage = styled.div`
    background-size: cover;
    height:100px;
    `;

    export const Content =styled.div`
    text-align: center;
    color: #000;`;

    export const DiscountPercent = styled.span`
    font-size:12px;
    margin-right:10px;
    color : #00994f;
    font-weight:bold;
    `;
    export const ActualPrice = styled.span`
    text-decoration: line-through;
    `;
    export const OfferWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;`;
    
    export const Reviews = styled.span`
    margin-left:10px
    `;
   export const CardTitleText = styled.h3`
   
   font-size:15px
   margin: 0;`;

