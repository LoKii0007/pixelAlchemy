import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const Auth = {
  providers : [
    CredentialsProvider({
      name : 'Email',
      credentials :{
          username : {label : "username", placeholder : "username", type:"text"},
          password : {label : "password", placeholder : "password", type:"password"},
      },
      async authorize(credentials: any){
          return {
              id : "user1",
              name:"loki"
          }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET|| ""
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET|| ""
    })
  ]
  
}
