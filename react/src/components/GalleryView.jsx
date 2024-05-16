import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';
import './GalleryView.scss';

const GalleryView = ({ data, onChange }) => {
    return (
        <>
            <div className="bigview">
                {data.map((item) => (
                    <GalleryBig key={item.id} item={item} />
                ))}

                <GalleryList data={data} onChange={onChange} />
            </div>
        </>
    );
};

export default GalleryView;
