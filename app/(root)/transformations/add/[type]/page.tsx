import Buttons from '@/components/buttons';
import { MediaUploader } from '@/components/mediauploader';
import TextField from '@/components/textField';
import { transformationTypes } from '@/constants'
import React, { useState } from 'react'

const TransformationType = ({ params }: { params: { type: string } }) => {

    const transformation = transformationTypes[params.type]
    const [image , setImage] = useState({})

    if (!transformation) {
        return <div>Transformation type not found</div>;
    }

    return (
        <>
            <div className="w-full flex flex-col flex-wrap items-center p-5">
                <div className='text-2xl'>{transformation.title}</div>
                <div>{transformation.subTitle}</div>


                <div>
                    { params.type === "fill"?
                    <TextField placeholder="title" label="Image Title" type={params.type}/> :""
                    }
                    { params.type === "restore"?
                    <TextField placeholder="restore" label="restore" type={params.type}/> :""
                    }
                    { params.type === "remove"?
                    <TextField placeholder="remove" label="remove" type={params.type}/> :""
                    }
                    { params.type === "recolor"?
                    <TextField placeholder="recolor" label="recolor" type={params.type}/> :""
                    }
                    { params.type === "removeBackground"?
                    <TextField placeholder="recolor" label="removeBackground" type={params.type}/> :""
                    }
                </div>

                <div className='py-5'>
                    <MediaUploader type={params.type} />
                </div>

                {/* <div>
                    <Buttons title="Apply transformations" />
                    <br />  <br />
                    <Buttons title="Save Image" />
                </div> */}
            </div>
        </>
    )
}

export default TransformationType