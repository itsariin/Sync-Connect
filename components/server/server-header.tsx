"use client"

import { MemberRole, Server } from "@prisma/client";
import { ServerWithMembersWithProfiles } from "@/types";

import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut, PlusCircle, Settings, Trash, UserPlus, Users } from "lucide-react";
import { useModel } from "@/hooks/use-model-store";


interface ServerHeaderProps {
    server: ServerWithMembersWithProfiles;
    role?: MemberRole;
};

export const ServerHeader = ({
    server,
    role
}: ServerHeaderProps) => {
    const { onOpen } = useModel();

    const isAdmin = role === MemberRole.ADMIN;
    const isModerator = isAdmin || role === MemberRole.MODERATOR;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className="focus:outline-none"
                asChild   
            >
                <button
                    className="w-full text-md font-semibold px-3 flex items-center h-12 
                    border-neutral-200 dark:border-[#897262] border-b-2
                    hover:bg:-zinc-700/10 dark:hover:bg-[#FFFFFF]/40 transition"
                >
                    {server.name}
                    <ChevronDown className="h-5 w-5 ml-auto"/>
                </button>

            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-56 text-xs font-medium text-black ark:text-neutral-400 space-y-[2px]"
            >
                {isModerator && (
                //dark:text-indigo-400
                    <DropdownMenuItem 
                        onClick={() => onOpen("invite", { server })}
                        className="text-indigo-600 dark:text-[#4ECB71] px-3 py-2 text-sm cursor-pointer"
                    >
                        Invite people
                        <UserPlus className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {isAdmin && (
                //dark:text-indigo-400
                    <DropdownMenuItem 
                    onClick={() =>onOpen ("editServer", { server })}
                    className="dark:text-white px-3 py-2 text-sm cursor-pointer"
                    >
                        Server Settings
                        <Settings className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {isAdmin && (
                //dark:text-indigo-400
                    <DropdownMenuItem 
                    onClick={() => onOpen("members", { server })}
                    className="dark:text-white px-3 py-2 text-sm cursor-pointer"
                    >
                        Manage Members
                        <Users className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {isModerator && (
                //dark:text-indigo-400
                    <DropdownMenuItem 
                    onClick={() => onOpen("createChannel")}
                    className="dark:text-white px-3 py-2 text-sm cursor-pointer"
                    >
                        Create Channel
                        <PlusCircle className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {isModerator && (
                    <DropdownMenuSeparator />
                )}
                {isAdmin && (
                //dark:text-indigo-400
                    <DropdownMenuItem 
                    onClick={() => onOpen("deleteServer", {server})}
                    className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
                    >
                        Delete Server
                        <Trash className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {!isAdmin && (
                //dark:text-indigo-400
                    <DropdownMenuItem
                    onClick={() => onOpen("leaveServer", { server })}
                    className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
                    >
                        Leave Server
                        <LogOut className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}