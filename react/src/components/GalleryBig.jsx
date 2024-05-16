import './GalleryBig.scss';
const GalleryBig = ({ item }) => {
    const { title, bigUrl, isShow } = item;
    return (
        <>
            <div className={isShow ? 'bigImg on' : 'bigImg'}>
                <h2>{title}</h2>
                <img src={bigUrl} alt={title} />
            </div>
        </>
    );
};

export default GalleryBig;
