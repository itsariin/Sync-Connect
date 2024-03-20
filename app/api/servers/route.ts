//here we are working on the server creation API
//basically taking the input of the name and image that the user added
//npm i -D @types/uuid

import { v4 as uuidv4 } from "uuid";

import { MemberRole } from "@prisma/client";
import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db"
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{
        const { name, imageUrl } = await req.json();
        const profile = await currentProfile();

        if (!profile) {
            return new NextResponse("Unauthorized", {status: 401});
        }

        //server creation with the inputs here and the unique invitation link is
        //created using uuid 
        const server = await db.server.create({
            data: {
                profileId: profile.id,
                name,
                imageUrl,
                inviteCode: uuidv4(),
                //channel creation
                channels: {
                    create: [
                        { name: "general", profileId: profile.id }
                    ]
                },
                 //members in the server
                 // this MemberRole we are importing from the prisma db
                 // initial member will be assigned as the admin MemberRole.ADMIN
                members: {
                    create: [
                        { profileId: profile.id, role: MemberRole.ADMIN }
                    ]
                }
            }
        });
        //returning the server as o/p
        return NextResponse.json(server);
    } catch (error) {
        console.log("[SERVERS_POST", error);
        return new NextResponse("Internal Error", {status: 500});
    }
}