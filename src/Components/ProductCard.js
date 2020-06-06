import React from 'react'
import { Link } from 'react-router-dom'
import { usePersistedState } from '../Hooks/customHooks';

function ProductCard(props) {
    const [isFav, setFav] = usePersistedState(props.id, false)
    return (

        <div className="border mb-4 rounded overflow-hidden">
            {/* <Link to={`/products/${props.product.sku}`}> */}
            <div style={{
                'backgroundImage': `url('${props.product.imgSrc}')`,
                'height': '120px',
                'width': '120px'

            }}
                className="w-full h-64 bg-blue bg-cover"
            >
            </div>
            {/* </Link> */}
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    <Link to={`/products/${props.product.sku}`}>
                        {props.product.title}
                    </Link>
                </h3>
                <div className="font-bold mb-3">
                    $ {props.product.sellingPrice}
                </div>
                {/* <div className="mb-3">
                    {props.product.description}
                </div> */}
                {/* <Link
                    to={`/products/${props.product.sku}`}
                    className="bg-blue-500 text-white p-2 flex justify-center w-full"
                >
                    View
                </Link> */}
                <a href={`${props.product.landingPage}`}
                    to={`${props.product.landingPage}`}
                    className="bg-blue-500 text-white p-2 flex justify-center w-full"
                >
                    View
                </a>
                <div>{props.product.sku}</div>

                <div>{props.id}</div>
                <div onClick={() => { setFav(!isFav) }}> favorite ` ${isFav} ggg`</div>

            </div>
        </div>
    )
}

export default ProductCard