import './GalleryItem.scss';

const GalleryItem = ({ item, onChange }) => {
    const { id, title, thumUrl } = item;
    return (
        <>
            <li onClick={() => onChange(id)}>
                <img src={thumUrl} alt={title} />
            </li>
        </>
    );
};

export default GalleryItem;
