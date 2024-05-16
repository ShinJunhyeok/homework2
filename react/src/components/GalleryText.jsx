import './GalleryText.scss';

const GalleryText = ({ txt, onChange }) => {
    const { title, desc } = txt;
    return (
        <>
            <div className="text">
                <strong>{title}</strong>
                <p>{desc}</p>
            </div>
        </>
    );
};

export default GalleryText;
