import {useState} from 'react'
import ItemCard from './ItemCard'

function Items() {
    const [items,setItems]=useState(
        [
            {
              id: 1,
              image: '1',
              name: 'Premium Chicken Thigh Piece (2 Pieces)',
              price: 450,
              oldPrice: 500,
            },
            {
              id: 2,
              image: '2',
              name: 'Premium Chicken Thigh Piece (1 Pieces)',
              price: 275,
              oldPrice: 290,
            },
            {
              id: 3,
              image: '3',
              name: 'Premium Chicken Cubes Piece (2 Pieces)',
              price: 275,
              oldPrice: 290,
            },
            {
              id: 4,
              image: '4',
              name: 'Premium Chicken Thigh Boneless Piece (2 Pieces)',
              price: 450,
              oldPrice: 500,
            },
            {
              id: 5,
              image: '5',
              name: 'Premium Chicken Thigh soup (2 Plate)',
              price: 450,
              oldPrice: 600,
            },
            {
              id: 6,
              image: '6',
              name: 'Premium Chicken Lollipop (2 Pieces)',
              price: 200,
              oldPrice: 300,
            }
          ]
    
    )
  return (
    <section className='w-5/6 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
       { items.map((item) => {
            // return <div key={item.id}>{item.name}</div>
            return <ItemCard key={item.id} item={item} />
        })}
    </section>
  )
}

export default Items