import React from 'react'
import PreviewCategoryMenu from '../PreviewCategoyMenu/PreviewCategoryMenu'
import './styles.scss'

function TopPositionsTable() {
    
    const categoriesTop = [
        {
        name : 'Pizza',
        products : [
            {
                'photo' : 'https://images.freeimages.com/images/premium/previews/1378/13789798-pizza-isolated-on-white-background.jpg',
                'name' : 'Пицца с сыром',
                'id' : 1,
                'discount' : 0,
                'category_name' : 'pizza',
                'manufacturer' : {
                    'name' : 'Kartowka'
                },
                'product_type' : [
                    {
                    'weight' : 300,
                    'price' : 60
                    },
                    {
                    'weight' : 400,
                    'price' : 80
                    },
                    {
                    'weight' : 300,
                    'price' : 60
                    },
                    {
                    'weight' : 400,
                    'price' : 80
                    },
                ],
                'description' : 'pizza, description, description, description, description, description, description, description, description'
            },{
                'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                'name' : 'Пицца с соплями',
                'id' : 2,
                'discount' : 0,
                'category_name' : 'pizza',
                'manufacturer' : {
                    'name' : 'Kartowka'
                },
                'product_type' : [
                    {
                    'weight' : 300,
                    'price' : 60
                    },
                    {
                    'weight' : 300,
                    'price' : 60
                    },
                    {
                    'weight' : 400,
                    'price' : 80
                    },
                ],
                'description' : 'pizza description'
              },{
                'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                'name' : 'Пицца с соплями',
                'id' : 3,
                'discount' : 0,
                'category_name' : 'pizza',
                'manufacturer' : {
                    'name' : 'Kartowka'
                },
                'product_type' : [
                    {
                    'weight' : 300,
                    'price' : 60
                    }
                ],
                'description' : 'pizza description'
              },{
                'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                'name' : 'Пицца с соплями',
                'id' : 4,
                'discount' : 0,
                'category_name' : 'pizza',
                'manufacturer' : {
                    'name' : 'Kartowka'
                },
                'product_type' : [
                    {
                    'weight' : 300,
                    'price' : 60
                    }
                ],
                'description' : 'pizza description'
              },{
                'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                'name' : 'Пицца с соплями',
                'id' : 5,
                'discount' : 0,
                'category_name' : 'pizza',
                'manufacturer' : {
                    'name' : 'Kartowka'
                },
                'product_type' : [
                    {
                    'weight' : 300,
                    'price' : 60
                    }
                ],
                'description' : 'pizza description'
              },{
                'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                'name' : 'Пицца с соплями',
                'id' : 6,
                'discount' : 0,
                'category_name' : 'pizza',
                'manufacturer' : {
                    'name' : 'Kartowka'
                },
                'product_type' : [
                    {
                    'weight' : 300,
                    'price' : 60
                    }
                ],
                'description' : 'pizza description'
              },{
                'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                'name' : 'Пицца с соплями',
                'id' : 7,
                'discount' : 0,
                'category_name' : 'pizza',
                'manufacturer' : {
                    'name' : 'Kartowka'
                },
                'product_type' : [
                    {
                    'weight' : 300,
                    'price' : 60
                    }
                ],
                'description' : 'pizza description'
              },{
                'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                'name' : 'Пицца с соплями',
                'id' : 8,
                'discount' : 0,
                'category_name' : 'pizza',
                'manufacturer' : {
                    'name' : 'Kartowka'
                },
                'product_type' : [
                    {
                    'weight' : 300,
                    'price' : 60
                    }
                ],
                'description' : 'pizza description'
              },{
                'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                'name' : 'Пицца с соплями',
                'id' : 9,
                'discount' : 0,
                'category_name' : 'pizza',
                'manufacturer' : {
                    'name' : 'Kartowka'
                },
                'product_type' : [
                    {
                    'weight' : 300,
                    'price' : 60
                    }
                ],
                'description' : 'pizza description'
              }
            ]
        },
        {
            name : 'Sushi',
            products : [
                {
                    'photo' : 'https://images.freeimages.com/images/premium/previews/1378/13789798-pizza-isolated-on-white-background.jpg',
                    'name' : 'Пицца с сыром',
                    'id' : 1,
                    'discount' : 0,
                    'category_name' : 'pizza',
                    'manufacturer' : {
                        'name' : 'Kartowka'
                    },
                    'product_type' : [
                        {
                        'weight' : 300,
                        'price' : 60
                        },
                        {
                        'weight' : 400,
                        'price' : 80
                        },
                        {
                        'weight' : 300,
                        'price' : 60
                        },
                        {
                        'weight' : 400,
                        'price' : 80
                        },
                    ],
                    'description' : 'pizza description'
                },{
                    'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                    'name' : 'Пицца с соплями',
                    'id' : 2,
                    'discount' : 0,
                    'category_name' : 'pizza',
                    'manufacturer' : {
                        'name' : 'Kartowka'
                    },
                    'product_type' : [
                        {
                        'weight' : 300,
                        'price' : 60
                        },
                        {
                        'weight' : 300,
                        'price' : 60
                        },
                        {
                        'weight' : 400,
                        'price' : 80
                        },
                    ],
                    'description' : 'pizza description'
                },{
                    'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                    'name' : 'Пицца с соплями',
                    'id' : 3,
                    'discount' : 0,
                    'category_name' : 'pizza',
                    'manufacturer' : {
                        'name' : 'Kartowka'
                    },
                    'product_type' : [
                        {
                        'weight' : 300,
                        'price' : 60
                        }
                    ],
                    'description' : 'pizza description'
                },{
                    'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                    'name' : 'Пицца с соплями',
                    'id' : 4,
                    'discount' : 0,
                    'category_name' : 'pizza',
                    'manufacturer' : {
                        'name' : 'Kartowka'
                    },
                    'product_type' : [
                        {
                        'weight' : 300,
                        'price' : 60
                        }
                    ],
                    'description' : 'pizza description'
                },{
                    'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                    'name' : 'Пицца с соплями',
                    'id' : 5,
                    'discount' : 0,
                    'category_name' : 'pizza',
                    'manufacturer' : {
                        'name' : 'Kartowka'
                    },
                    'product_type' : [
                        {
                        'weight' : 300,
                        'price' : 60
                        }
                    ],
                    'description' : 'pizza description'
                },{
                    'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                    'name' : 'Пицца с соплями',
                    'id' : 6,
                    'discount' : 0,
                    'category_name' : 'pizza',
                    'manufacturer' : {
                        'name' : 'Kartowka'
                    },
                    'product_type' : [
                        {
                        'weight' : 300,
                        'price' : 60
                        }
                    ],
                    'description' : 'pizza description'
                },{
                    'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                    'name' : 'Пицца с соплями',
                    'id' : 7,
                    'discount' : 0,
                    'category_name' : 'pizza',
                    'manufacturer' : {
                        'name' : 'Kartowka'
                    },
                    'product_type' : [
                        {
                        'weight' : 300,
                        'price' : 60
                        }
                    ],
                    'description' : 'pizza description'
                },{
                    'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                    'name' : 'Пицца с соплями',
                    'id' : 8,
                    'discount' : 0,
                    'category_name' : 'pizza',
                    'manufacturer' : {
                        'name' : 'Kartowka'
                    },
                    'product_type' : [
                        {
                        'weight' : 300,
                        'price' : 60
                        }
                    ],
                    'description' : 'pizza description'
                },{
                    'photo' : 'https://i.pinimg.com/originals/4b/02/52/4b0252776c222f74527e84ea3ab9c075.jpg',
                    'name' : 'Пицца с соплями',
                    'id' : 9,
                    'discount' : 0,
                    'category_name' : 'pizza',
                    'manufacturer' : {
                        'name' : 'Kartowka'
                    },
                    'product_type' : [
                        {
                        'weight' : 300,
                        'price' : 60
                        }
                    ],
                    'description' : 'pizza description'
                }
                ]
        }
    ]

    return (
        <div className='pad'>
            <div className='top-positions-greetings'>
                <h2>Top positions</h2>
                <p>The assortment of Fooddelivery includes rolls, sushi, sets and drinks for every taste. We recommend that you definitely try the top positions of our menu!</p>
            </div>
            {categoriesTop.map(categoryTop => (
                <PreviewCategoryMenu categoryTop={categoryTop} />
            ))}
        </div>
    )
}

export default TopPositionsTable