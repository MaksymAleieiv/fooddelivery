import React from 'react'
import './ProductItem.scss'
import ProductTypes from './ProductTypes/ProductTypes'
import { useCartActions } from '../../store/order-slice/useCartActions'

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
                    weight : product.product_type[selectedType].weight,
                    price : product.product_type[selectedType].price 
                },
                category_name: product.category_name,
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
                <ProductTypes productTypes={product.product_type} setSelectedType={setSelectedType} selectedType={selectedType} categoryName={product.category_name}/>
                <button className='add-to-cart-button' onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default React.memo(ProductItem)
