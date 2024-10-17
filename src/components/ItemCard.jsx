import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import '../components/ItemCard.css'
// import bookmark from '../assets/bookmark.png'
import share from '../assets/blob.png'

function ItemCard({ item }) {
  const images = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6,
  };

  return (
    <div  className='rounded-lg overflow-hidden shadow-lg duration-100 relative p-3.5'>{/* hover:scale-110 */}
         
         <span className='absolute text-sm text-white m-1 p-1 offer '>10% Offer</span>
         <br />
         <br />
         <span className='absolute text-white text-sm bg-amber-700 rounded-full w-8 h-8 m-1 non'>NonVeg</span>
         <span  className='absolute text-white right-4 m-1  text-sm bg-amber-700 rounded-full '>
            <img src={share} className='w-7' alt="shareIcon" />
         </span>
        <div>
        <img className='rounded' src={images[item.image]} alt={item.name} />
        
       {/* <img className='rounded' src={require(`../assets/${item.images}.jpeg`)} alt={item.name} /> */}
    </div>
      
      <div className=''>
        <span className='text-sm'>{item.name}</span>
        <br />
        <div className='flex justify-center'>
        <span className='weight m-1  font-bold text-sm'>500 Gm</span>
        <span className='m-1 price font-bold text-sm '>₹{item.price}</span>
        <span className='m-1 line-through opacity-50 text-sm'>₹{item.oldPrice}</span></div>
      </div>
      <div className='flex'>
        <button className='bookmark rounded-md m-1'>
        {/* <span><img src={bookmark} className='rounded h-8 p-1 w-auto' alt='bookmark icon'/></span> */}
        <span class="material-symbols-outlined rounded h-8 p-1 w-auto">bookmark</span>
        </button>
        <button className='add text-white rounded m-1 w-40'>
            Add
        </button>
        
      </div>
      <p className='w-full text-center text-sm m-1 opacity-70'>Free Delivery</p>
    </div>
  );
}

export default ItemCard;
