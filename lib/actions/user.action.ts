"use server"

import { connectToDatabase } from "../database/mongoose";
import axios from "axios"

const url = "http://localhost:3000/api/"

export async function UserCredits(userId:string, creditFee : number){
    try {
        await connectToDatabase()
        console.log("connected")
    } catch (error) {
        console.log("something went wrong : ", error)
    }
}

export async function Signup(email : string , password : string){
    try {
        let a = await connectToDatabase()
        console.log("connected to database")

        const res = await axios.post( `${url}signup`, {email : email , password : password})
        console.log(res.data)

    } catch (error) {
        console.log("error fetching api/signup")
    }
}