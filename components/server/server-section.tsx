"use client"
import { ChannelType, MemberRole } from "@prisma/client";

import { ServerWithMembersWithProfiles } from "@/types";
import { ActionTootip } from "../action-tooltip";
import { Plus, Settings } from "lucide-react";
import { useModel } from "@/hooks/use-model-store";

interface ServerSectionProps {
    label: string;
    role?: MemberRole;
    sectionType: "channels" | "members";
    channelType?: ChannelType;
    server?: ServerWithMembersWithProfiles;
};

export const ServerSection = ({
    label,
    role,
    sectionType,
    channelType,
    server,
}: ServerSectionProps) => {
    const { onOpen } = useModel();

    return (
        <div className="flex items-center justify-between py-2">
            <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-[#897262]">
                {label}
            </p>
            {role !== MemberRole.GUEST && sectionType === "channels" && (
                <ActionTootip label="Create Channel" side="top">
                    <button 
                    onClick={() => onOpen("createChannel", { channelType })}
                    className="text-zinc-500 hover:text-zinc-600 dark:text-[#897262] dark:hover:text-[#897262]/500 transition">
                        <Plus className="h-4 w-4"/>
                    </button>
                </ActionTootip>
            )}
            {role === MemberRole.ADMIN && sectionType === "members" && (
                <ActionTootip label="Manage Members" side="top">
                <button 
                onClick={() => onOpen("members", { server })}
                className="text-zinc-500 hover:text-zinc-600 dark:text-[#897262] dark:hover:text-[#897262]/500 transition">
                    <Settings className="h-4 w-4"/>
                </button>
            </ActionTootip>
            )}
        </div>
    )
}