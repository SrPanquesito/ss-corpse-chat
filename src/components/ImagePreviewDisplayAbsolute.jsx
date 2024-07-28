import { useRef, useEffect } from 'react';
import { useAbsolute, useDispatchAbsolute } from 'providers/absolute';

export default () => {
    const refWrapper = useRef();
    const { showImagePreviewDisplay, dataImagePreviewDisplay: images } = useAbsolute();
    const dispatchAbsolute = useDispatchAbsolute();

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
          document.removeEventListener("click", handleClickOutside, false);
        };
    }, []);

    useEffect(() => {
        console.log(images);
    }, [images]);

    const handleClickOutside = event => {
        if (refWrapper.current && !refWrapper.current.contains(event.target)) {
            if (refWrapper.current.clientHeight > 0) {
                // Clicked outside and picker is visible in UI
                // dispatchAbsolute({ type: 'imagepreviewdisplay/hide' });
            }
        }
    };

    return (
        <div ref={refWrapper} className="absolute z-50 bottom-14 left-2 md:left-32">
            <div className={`${showImagePreviewDisplay ? `block ` : `hidden `}
                w-auto md:w-auto
                relative
                p-2
                rounded-xl
                shadow-tiny 
                bg-sky-700 
                text-zinc-100 
                shadow-zinc-700
                dark:bg-gray-800
                dark:text-slate-400
                dark:shadow-gray-900
                dark:border
                dark:border-slate-700
                `}>
                    {
                        images && images.length > 0 ? images.map((msg) => (
                            <div className="flex flex-row justify-center items-center">
                                <div style={{backgroundImage: 'url(' + msg + ')'}}
                                    className={`
                                        border
                                        border-sky-200
                                        bg-cover
                                        bg-center 
                                        bg-clip-padding
                                        float-left
                                        rounded-md
                                        w-32 h-32 md:w-32 md:h-32 cursor-pointer 
                                        shadow-button
                                        dark:border-sky-600
                                    `}></div>
                            </div>
                        )) : (
                            <span className="p-3
                                font-normal 
                                text-xs
                                text-slate-300
                                dark:text-gray-400
                            ">
                                Loading images...
                            </span>
                        )
                    }
                    {/* { (imageUrl && content) && (<>
                        <img src={imageUrl} className='md:max-w-md rounded-md'></img>
                        <p className="text-sm pt-2">{content}</p>
                    </>)
                    }
                    { (imageUrl && !content) && <img src={imageUrl} className='md:max-w-md rounded-md'></img> }
                    { (!imageUrl && content) && <p className="text-sm">{content}</p> } */}
            </div>
        </div>
    );
};