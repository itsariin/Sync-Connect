"use client";

interface FileUploadProps {
    onChange: (Url?: string) => void;
    value: string;
    endpoint: "messageFile" | "serverImage"
}   


export const Fileupload = ({
    onChange,
    value,
    endpoint
}: FileUploadProps) => {
    return (
        <div>
            File Upload Component
        </div>
    )
}