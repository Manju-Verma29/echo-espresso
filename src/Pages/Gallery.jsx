import { galleryData } from '../assets/gallery/galleryData';

export default function Gallery() {
  return (
    <>
        <article className='pl-2 py-8'>
            <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pr-2 md:gap-3 lg:gap-4'>
                {galleryData.map((img) => (
                    <div key={img.id}>
                    <img src={img.src}/>
                    </div>
                ))}
            </div>  
        </article>
    </>
  )
}
