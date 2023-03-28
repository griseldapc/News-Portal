import Link from "next/link";

const Card = ({ product}) => {
  return (
    <>
      <div
        class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
        style={{ backgroundPosition: "50%;" }}
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <img src={product.thumbnail} class="w-full" />
        <Link href={`/products/${product.id}`} key={product.id}>
          <div
            class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          >
            <div class="absolute top-0 left-0 m-6">
              <span class="text-white bg-blue-500 rounded-full px-4 py-2 text-xs font-bold">
                {product.category}
              </span>
            </div>
            <div class="flex justify-start items-end h-full">
              <div class="text-white m-6">
                <h5 class="font-bold text-lg mb-3">{product.title}</h5>
                <p>
                  <small>
                    Published <u>{product.pubDate}</u> by {product.author}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
