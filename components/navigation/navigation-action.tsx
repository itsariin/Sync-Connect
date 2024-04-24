"use client";

import {Plus} from "lucide-react"

import { ActionTootip } from "@/components/action-tooltip";
import { useModel } from "@/hooks/use-model-store"

export const NavigationAction = () => {

    const { onOpen } = useModel();

    return (
        //hover function of letting the member know about plus button is here
        <div>
            <ActionTootip
                side="right"
                align="center"
                label="Add a Nerd server"
            >
                <button onClick={() => onOpen("createServer")} className="group rounded-full w-[48px] h-[48px] bg-[#E7DBCC] hover:bg-emerald-500
                flex items-center">
                    <div className="flex mx-3 items-center justify-center">
                        <Plus 
                            className="transition text-emerald-500 group-hover:text-[#E7DBCC]"
                            size={25}
                        />
                    </div>
                </button>
            </ActionTootip>
        </div>
    )
}

/*
"use client";

import {Plus} from "lucide-react"

export const NavigationAction = () => {
    return (
        <div>
            <button
             className="group flex items-center"
            >
                {/* bg-neutral-700 &&  
                <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover-[16px] 
                transition-all overflow-hidden items-center justify-center bg-backgroung 
                bg-[#E7DBCC] group-hover:bg-emerald-500">
                    <Plus 
                    className="group=hover:text-white transition text-emerald-500"
                    size={25}
                    />
                </div>
            </button>
        </div>
    )
} */
