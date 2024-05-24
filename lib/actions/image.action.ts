import User from "../database/model_schema/user.model";
import { connectToDatabase } from "../database/mongoose";
import Image from "../database/model_schema/image.model";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function addImage({userId, image, path}:{userId : any, image : any, path:any}){
    try {
        await connectToDatabase()

    const author = await User.findById(userId)

    if(!author){
        throw new Error("user not found")
    }

    const newImage = await Image.create({
        ...image,
        author : author._id
    })

    revalidatePath(path)
    return JSON.parse(JSON.stringify(newImage))
    } catch (error) {
        return JSON.parse(JSON.stringify({error: error}))
    }
}

//update
export async function updateImage({userId, image, path}:{userId : any, image : any, path:any}){
    try {
        await connectToDatabase()
        
        const imageToUpdate =await Image.findById(image._id)

        if(!imageToUpdate || imageToUpdate.author.toHexString()!== userId){
            throw new Error("unauthorized ir image not found")
        }

        const updatedImage = await Image.findByIdAndUpdate(imageToUpdate._id, image, {new : true})

        revalidatePath(path)
        return JSON.parse(JSON.stringify(updatedImage))
    } catch (error) {
        return JSON.parse(JSON.stringify({error: error}))
    }
}

//delete
export async function deleteImage({imageId}:{imageId : any}){
    try {
        await connectToDatabase()

        await Image.findByIdAndDelete(imageId)
        return JSON.parse(JSON.stringify({msg:"image deleted"}))
    } catch (error) {
        return JSON.parse(JSON.stringify({error: error}))
    } finally{
        redirect("/")
    }
}

//get images
// export async function getImage({userId, image, path}:{userId : any, image : any, path:any}){
//     try {
//         await connectToDatabase()

//     revalidatePath(path)
//     return JSON.parse(JSON.stringify(newImage))
//     } catch (error) {
//         return JSON.parse(JSON.stringify({error: error}))
//     }
// }