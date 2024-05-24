"use client"

import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import { useEffect, useState } from 'react';
import { dataUrl, getImageSize } from '@/lib/utils';
import toast from 'react-hot-toast';

export const MediaUploader = ({ type }: { type: string }) => {

    const [publicId, setPublicId] = useState(null)
    const [image, setImage] = useState<{ secureURL?: string }>()

    function onErrorHandler() {
        toast.error('something wrong happened')
    }

    function onSuccessHandler(result: any) {
        console.log("sjdhcdhjd", result)
        setImage((prev: any) => ({
            ...prev,
            publicId: result?.info?.public_id,
            width: result?.info?.width,
            height: result?.info?.height,
            secureURL: result?.info?.secure_url
        }))
        toast.success('uploaded successfully')
    }

    useEffect(() => {
        console.log(image)
    }, [image])

    return (
        <CldUploadWidget
            uploadPreset="app_imagnify"
            options={{ multiple: false, resourceType: "image" }}
            onSuccess={onSuccessHandler}
            onError={onErrorHandler}
        >
            {({ open }) => {
                return <>
                    {image?.secureURL ?
                        <div className='flex '>
                            <div className="transformed mx-5">
                                <div className='text-center'> Original Image </div>

                                <div className=' my-3 p-5 w-[30vw] h-[20vw] flex justify-center items-center rounded-2xl border-2'>
                                    <CldImage
                                        width={getImageSize(type, image, "width")}
                                        height={getImageSize(type, image, "height")}
                                        src={image?.secureURL || ""}
                                        alt="image"
                                        sizes={"(max-width:767px) 100vw, 50vw "}
                                        placeholder={dataUrl as PlaceholderValue}
                                    >
                                    </CldImage>
                                </div>
                            </div>

                            <div className="original text-center">
                                transformed Image
                                <img src="" alt="original image" />
                            </div>
                        </div> :
                        <></>
                    }

                    <div onClick={() => open()} className=' cursor-pointer p-5 w-[30vw] h-[20vw] flex justify-center items-center rounded-2xl border-2'>
                        upload image
                    </div>
                </>

            }}
        </CldUploadWidget>
    )
}