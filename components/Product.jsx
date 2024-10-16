import Link from "next/link"

const Product = ({product}) => {
  return (
    <div className='bg-white rounded-[6px] overflow-hidden'>

      <img
       src={product.image}
        alt="product"
      />

      <div className="px-[20px]">

      <h3 className='text-[18px] font-semibold h-[80px]'>{product.name}</h3>

      <h1 className='text-center text-main text-[25px] font-bold my-[15px]'>${product.price}</h1>
      <h1 className="text-[18px] font-semibold">Stock: <span className="text-[20px] font-bold">{product.stock}</span></h1>
      <Link 
      href={`/products/${product.id}`}
      className="grid place-items-center w-full h-[40px] text-[18px] font-semibold text-white bg-main my-[20px]"
      >
        More Details
      </Link>
      </div>

    </div>
  )
}

export default Product
