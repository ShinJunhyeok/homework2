import GalleryItem from './GalleryItem';
import './GalleryList.scss';

const GalleryList = ({ data, onChange }) => {
    return (
        <>
            <ul className="list">
                {data.map((item) => (
                    <GalleryItem key={item.id} item={item} onChange={onChange} />
                ))}
            </ul>
        </>
    );
};

export default GalleryList;
