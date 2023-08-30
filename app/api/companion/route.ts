import prismadb from "@/lib/prismadb"
import { currentUser } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try{
        const body = await req.json()
        const user = await currentUser()
        const { src, name, description, instructions, seed, categoryId } = body

        if(!user || !user.id || !user.firstName){
            return new NextResponse("Unauthorized", {status:401})
        }

        if (!src || !name || !description || !instructions || !seed || !categoryId) {
            return new NextResponse("Missing requireed fields", {status:400})
        }

        //todo: check for subscription
        const companion = await prismadb.companion.create({
            data: {
                categoryId,
                userId: user.id,
                userName: user.firstName,
                src,
                name,
                description,
                instructions,
                seed
            }
        })

        return NextResponse.json(companion)
    } catch(err){
        console.log("[COMPANION_POST", err)
        return new NextResponse("Internal Error", {status: 500})
    }
}