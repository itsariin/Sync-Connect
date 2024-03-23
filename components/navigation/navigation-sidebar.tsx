import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

import { ModeToggle } from "@/components/mode-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db"

import { NavigationAction } from "./navigation-action";
import { NavigationItem } from "./navigation-item";

//as its a server component that's why async
export const NavigationSidebar = async () => {
    const profile = await currentProfile();
    //if no profile redirect
    if (!profile) {
        return redirect("/");
    }

    const servers = await db.server.findMany({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    })

    return (
        //color to the side bar is here
        //dark:bg-[#1E1F22]
        <div className="space-y-4 flex flex-col items-center h-full
        text-primary w-full dark:bg-[#FBFAF2] py-3" 
        >
           <NavigationAction />
           <Separator 
            className="h-[2px] bg-zinc-300 dark:bg-[#897262]
            rounded-md w-10 mx-auto"
           />
           <ScrollArea className="flex-1 w-full">
                {servers.map((server) => (
                    <div key={server.id} className="mb-4" style={{ color: "black" }}>
                        <NavigationItem 
                            id={server.id}
                            name={server.name}
                            imageUrl={server.imageUrl}
                        />
                    </div>
                ))}
           </ScrollArea>
           <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
                <ModeToggle />
                <UserButton 
                afterSignOutUrl="/"
                appearance={{
                    elements: {
                        avatarBox: "h-[42px] w-[42px]"
                    }
                }}
                />
           </div>
        </div>
    )
}

{/* 
--in Case you wanna show the name and want to change the color of the text to black--
<div key={server.id} style={{ color: "black" }}>
{server.name}
</div> */}