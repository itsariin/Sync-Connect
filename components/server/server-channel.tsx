"use client"
import { ChannelType, Channel, MemberRole, Server } from "@prisma/client";
import { Edit, Hash, Lock, Mic, Trash, Video } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ActionTootip } from "@/components/action-tooltip";
import { useModel } from "@/hooks/use-model-store";

interface ServerChannelProps {
    channel: Channel;
    server: Server;
    role?: MemberRole;
}

const iconMap = {
    [ChannelType.TEXT]: Hash,
    [ChannelType.AUDIO]: Mic,
    [ChannelType.VIDEO]: Video
}

export const ServerChannel = ({
    channel,
    server,
    role
}: ServerChannelProps) => {
    const { onOpen } = useModel();
    const params = useParams();
    const router = useRouter();

    // Check if channel and channel type are defined
    const Icon = channel && channel.type ? iconMap[channel.type] : null;

    // Render null if Icon is not defined
    if (!Icon) {
        return null;
    }

    return (
        <button
            onClick={() => {}}
            className={cn(
                "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-[#CDB597]/50 transition mb-1",
                params?.channel === channel.id && "bg-zinc-700/20 dark:bg-zinc-700"
            )}
        >
            <Icon className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400"/>
            <p
                className={cn(
                    "line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
                    params?.channel === channel.id && "text-primary dark:text-zinc-200 dark:group-hover:text-white"
                )}
            >
                {channel.name}
            </p>
            {channel.name !== "general" && role !== MemberRole.GUEST && (
                <div className="ml-auto flex items-center gap-x-2">
                    <ActionTootip label="Edit">
                        <Edit className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-black transition"/>
                    </ActionTootip>
                    <ActionTootip label="Trash">
                        <Trash 
                        onClick={() => onOpen("deleteChannel", { server, channel })}
                        className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-black transition"/>
                    </ActionTootip>
                </div>
            )}
            {channel.name === "general" && (
                <Lock 
                    className="ml-auto w-4 h-4 text-zinc-500 dark:text-zinc-400"
                />
            )}
        </button>
    )
}
