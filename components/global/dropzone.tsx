import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageIcon, ImagesIcon } from "lucide-react";

type Props = {
  onDrop: (files: File[]) => void;
  previewUrl?: string;
  className?: string;
  multiple?: boolean;
};

export const Dropzone = ({
  onDrop,
  previewUrl,
  className,
  multiple = false,
}: Props) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    multiple,
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "group/dropzone bg-muted hover:border-muted-foreground relative flex h-40 w-40 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 transition duration-300",
        className,
      )}
    >
      <input {...getInputProps()} />
      {previewUrl ? (
        <Image
          src={previewUrl}
          alt="Thumbnail Preview"
          fill
          className="rounded-md object-cover"
        />
      ) : isDragActive ? (
        <p className="text-muted-foreground/50 text-sm">
          Drop {multiple ? "images" : "image"} here
        </p>
      ) : (
        <p className="text-muted-foreground/50 px-2 text-center text-sm">
          {multiple ? (
            <ImagesIcon className="size-10" />
          ) : (
            <ImageIcon className="size-10" />
          )}
        </p>
      )}
    </div>
  );
};
