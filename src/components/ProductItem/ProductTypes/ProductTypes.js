import React from 'react'
import './ProductTypes.scss'

function ProductTypes({productTypes, setSelectedType, selectedType, categoryName}) {
    return (
        <div className='item-types'>
            {productTypes.map((type, index) => (
                <div key={'type_' + index}>
                    <button className={`types__weight ${index === selectedType ? 'active' : ''}`} onClick={() => setSelectedType(index)}>{type.weight}{categoryName === 'drinks' ? 'l' : 'g'}</button>
                    <div className='types_price'>
                        {type.price} 
                        <span> $</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductTypes
