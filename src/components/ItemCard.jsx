import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import '../components/ItemCard.css'
// import bookmark from '../assets/bookmark.png'
// import share from '../assets/blob.png'
import share from '../assets/share.png'

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
    <div className="m-3">
    <div  className='rounded-lg overflow-hidden boxcard max-w-sm relative p-3.5 hover:scale-105 duration-200'>{/* hover:scale-110 */}
         
         <p className='absolute text-sm text-white top-1 p-1 m-0 offer '>10% Offer</p>
         <br />
        <div className="">
          <p className='z-10 absolute text-white text-xs bg-orange-500 rounded-full w-8 h-8 pt-1.5 m-1 non'>NonVeg</p>
         
         <span  className='z-10 absolute right-0 m-1 size-10 rounded-full '>
         <button><img src={share} className='w-7 rounded-full' alt="shareIcon" /></button>
         </span>
        </div>
         
        <div>
        <img className='rounded hover:scale-95 duration-200 z-0' src={images[item.image]} alt={item.name} />
        
       {/* <img className='rounded' src={require(`../assets/${item.images}.jpeg`)} alt={item.name} /> */}
    </div>
      
      <div className='justify-center'>
        <p className='text-sm '>{item.name}</p>
        <div className='w-fit  mx-auto flex rounded-md
          hover:cursor-pointer hover:scale-105 duration-200
            p-0.5 text-xs bg-yellow-100 m-1 justify-center text-slate-600'>
          <p className='flex text-xs rating px-1'>
            <span className=' flex text-amber-600'>4.5 
            <img className='w-3 h-3 ml-1 mr-1.5' src='https://cdn-icons-png.flaticon.com/512/956/956100.png'/>
            </span><p>
              256 People Ordered(In 1 Month) 
            </p>
          </p>
            </div>
        <div className='flex justify-center'>
        <span className='weight m-1  font-bold text-sm'>500 Gm</span>
        <span className='m-1 price font-bold text-sm '>₹{item.price}</span>
        <span className='m-1 line-through font-bold opacity-50 text-sm'>₹{item.oldPrice}</span></div>
      </div>
      <div className='flex'>
        <button className='bookmark rounded-md m-1'>
        {/* <span><img src={bookmark} className='rounded h-8 p-1 w-auto' alt='bookmark icon'/></span> */}
        <span class="material-symbols-outlined rounded h-8 p-1 w-auto book">bookmark</span>
        </button>
        <button className='add text-white  rounded m-1 w-full'>
            Add
        </button>
        
      </div>
      <p className='w-full text-center text-sm m-1 opacity-70'>Free Delivery</p>
    </div>
    </div>
  );
}

export default ItemCard;
