import { Auth } from "@/app/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(Auth)

export const GET = handler
export const POST = handler