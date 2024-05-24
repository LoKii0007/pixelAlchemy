import User from "@/lib/database/model_schema/user.model";
import { NextRequest } from "next/server";

export async function POST(req : NextRequest){
    const body = await req.json()

    const email = body.email
    const password = body.password

    let user = await User.findOne({email : email})
    if(!user || password !== user.password){
        return Response.json({msg : "email or pass wrong"})
    }

    return Response.json({msg : "logged in"})
}