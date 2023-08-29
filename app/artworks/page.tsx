
import Image from 'next/image'
import Artwork from 'public/web.images/Live Laugh Love Series.jpg'
import  {getProducts} from '@/sanity/sanity-utils'
import Link from 'next/link';

type Props = {
  params: {product: string}
}



export default async function artworks ({params}: Props) {
  const slug = params.product;
  const artworks = await getProducts();
  
  return (
    <div>
      <div className='flex justify-center my-12 font-extralight text-3xl'>
        <h1>SOUL PIECES</h1>
      </div>    
      <div className='flex justify-between gap-20 mt-20 mb-44  '>
        <div className='flex flex-1 flex-col justify-center items-center gap-20'>
          <h1 className='text-4xl font-normal mb-10'>Abundance</h1>
          <p className='flex justify-center items-center font-extralight text-3xl px-14 text-center'>
            My art is born out of the zeal for perfection both in skill, expression and devotion to create positive changes in the world. 
            I draw inspiration from life experiences and everything that sparks a feeling of necessity.
          </p>
        </div>
        <div className='flex flex-col flex-1 gap-20 items-center justify-center'>
          <Image src={Artwork} alt='artwork' className= 'w-full h-auto object-cover'/>
        </div>
      </div>      
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
        {products.map((product) => (
          <Link key={product._id} href={`/products/${product.slug}`} className="group text-sm">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
              <Image
                src={product.image}
                alt={product.name}
                width={0}
                height={0}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-4 font-medium">{product.name}</h3>
            <p className="mt-2 font-medium">{product.price}</p>
          </Link>
        ))}
      </div>         
    </div>
  );
}

