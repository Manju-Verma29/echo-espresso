import { galleryData } from '../assets/gallery/galleryData';

export default function Gallery() {
  return (
    <>
        <article className='bg-amber-100 pl-5 py-8'>
            <div className='grid grid-cols-4 gap-8 bg-amber-100'>
                {galleryData.map((img) => (
                    <div key={img.id}>
                    <img src={img.src} className=' ' />
                    </div>
                ))}
            </div>  
        </article>
    </>
  )
}
