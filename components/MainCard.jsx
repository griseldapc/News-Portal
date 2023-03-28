import Link from "next/link";

const Card = ({product}) => {
  return (
    
      <div className="relative ">
        <div className="min-w-4/5   rounded-md  shadow-lg  text-black-50 mx-auto overflow-hidden   ">
        <Link href={`/products/${product.id}`}>
          <img
            src={product.thumbnail}
            alt=""
            className="w-full object object-center h-72 bg-gray-500"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-5">
            <span className="block text-xs font-medium tracking-widest uppercase text-white">
              {product.category}
            </span>
            <h2 className="text-xl font-semibold tracking-wide truncate line-3 text-white">
              {product.title}
            </h2>
          
            <p className="text-white">{product.pubDate}</p>
          </div>
          </Link>
        </div>
      </div>
    
  );
};

export default Card;
