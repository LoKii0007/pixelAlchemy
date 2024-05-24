import mongoose from "mongoose";
import GitHubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";
import User from "@/lib/database/model_schema/user.model";

export const Auth = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  callbacks : {
    async signIn({user , account , email , name}:{user : any , account : any , email : any , name : any}){
      if(account.provider == 'github'){

        // connect to database
        await mongoose.connect(process.env.MONGO_URL||"")

        //checking if user exist
        let currentUser = await User.findOne({email : email})
        //creating new user
        if(!currentUser){
          const newUser = new User.create({
            email : email,
            username : name
          })

          await newUser.save()
          user.name = newUser.username
        }else{
          user.name = currentUser.name
        }

        return true
      }
    }
  },
  secret: process.env.NEXTAUTH_SECRET ,

};
