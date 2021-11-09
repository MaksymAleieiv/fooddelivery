import React from 'react'
import './ProductItem.scss'
import ProductTypes from './ProductTypes/ProductTypes'
import { useCartActions } from '../../store/cart-slice/useCartActions'

function ProductItem({product}) {
    const { addItem } = useCartActions()

    const [selectedType, setSelectedType] = React.useState(0)

    const addToCart = () => {
        addItem(
            {
                photo : product.photo,
                name : product.name,
                id : product.id,
                description: product.description,
                selected_type : {
                    weight : product.product_type[selectedType].weight + 'g',
                    price : product.product_type[selectedType].price 
                },
                quantity: 1
            }
        )
    }

    return (
        <div className='product-item'>
            <div className='product-item__image-container'>
                <img src={product.photo} className='product-item__image' alt={product.name}/>
                <div className='description-hover'>
                    <p>
                        {product.description}
                    </p>
                </div>
            </div>
            <div className='product-info'>
                <div className='product-info__name'>
                    {product.name}
                </div>
                <ProductTypes productTypes={product.product_type} setSelectedType={setSelectedType} selectedType={selectedType}/>
                <button className='add-to-cart-button' onClick={addToCart}>В корзину</button>
            </div>
        </div>
    )
}

export default React.memo(ProductItem)