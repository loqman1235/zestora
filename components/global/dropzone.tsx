import { useDropzone } from "react-dropzone";
import Image from "next/image";

type Props = {
  onDrop: (files: File[]) => void;
  previewUrl?: string;
};

export const Dropzone = ({ onDrop, previewUrl }: Props) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    multiple: false,
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className="flex h-40 w-40 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-gray-50 hover:border-gray-500"
    >
      <input {...getInputProps()} />
      {previewUrl ? (
        <Image
          src={previewUrl}
          alt="Thumbnail Preview"
          width={160}
          height={160}
          className="rounded-md object-cover"
        />
      ) : isDragActive ? (
        <p className="text-sm text-gray-700">Drop the image here</p>
      ) : (
        <p className="px-2 text-center text-sm text-gray-500">
          Drag & drop or click to upload
        </p>
      )}
    </div>
  );
};
