import style from './ImageCard.module.css';

const ImageCard = ({ urls, alt_description, openModal }) => {
    return (
        <li className={style.item}>
            <div>
                <img src={urls.small} alt={alt_description} onClick={() => openModal(urls, alt_description)} />
            </div>
        </li>
    )
}
export default ImageCard