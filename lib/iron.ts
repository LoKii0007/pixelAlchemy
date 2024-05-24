import {SessionOptions} from "iron-session"

export interface SessionData {
    userId? : String;
    username? : String;
    img? : String;
    isPro? : boolean;
    isLoggedIn : boolean
}

export const defaultSession : SessionData = {
    isLoggedIn : false
}

export const sessionOptions : SessionOptions  = {
    cookieName : "practice-sec",
    password : process.env.SECRET_KEY!,
    cookieOptions:{
       httpOnly : true,
       secure : false
    }
}