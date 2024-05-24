import User from "@/lib/database/model_schema/user.model";
import { NextRequest } from "next/server";
// const bcrypt = require('bcryptjs')
import bcrypt from "bcryptjs"

export async function  POST(req : NextRequest){

    const JWT_SCRET = 'hello'
    const body = await req.json()

    // finding errors

    // extracting data
    const email = body.email
    const password = body.password

    // checking if user exists
    let user = await User.findOne({email : email})
    if(user){
        return Response.json({error:"user already exists"})
    }

    //hashing
    var salt = bcrypt.genSaltSync(10)
    var secPass = bcrypt.hashSync(password , salt)
    console.log("hashed ", secPass)

    //creating user
    user = await User.create({
        email : email,
        password : password
    })

    return Response.json({msg : "created user"})

}