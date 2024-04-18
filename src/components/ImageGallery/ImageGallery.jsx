import ImageCard from "../ImageCard/ImageCard";
import style from './ImageGallery.module.css'

const ImageGallery = ({ images, openModal }) => {
    return (
        <ul className={style.list}>
            {images.map(({ id, urls, alt_description }) => (
                <ImageCard key={id} urls={urls} alt_description={alt_description} openModal={openModal} />
            )
            )}
        </ul>
    )
}
export default ImageGallery