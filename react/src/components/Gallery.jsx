import GalleryView from './GalleryView';
import GalleryText from './GalleryText';
import imgData from '../assets/api/imgData';
import './Gallery.scss';
import { useState } from 'react';

const Gallery = () => {
    const [data, setData] = useState(imgData);
    const [txt, setTxt] = useState(data[0]);
    const onChange = (idx) => {
        setTxt(data.find((item) => item.id === idx));
        setData(
            data.map((item) =>
                item.id === idx ? { ...item, isShow: true } : { ...item, isShow: false }
            )
        );
    };

    return (
        <>
            <div className="wrap">
                <GalleryView data={data} onChange={onChange} />
                <GalleryText txt={txt} />
            </div>
        </>
    );
};

export default Gallery;
