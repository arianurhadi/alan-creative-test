import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useCallback } from "react";
import InputLabel from "./InputLabel";
import { useDropzone } from "react-dropzone";

const InputFile = forwardRef(({ error, onDrop = () => {}, ...props }, ref) => {
  const handleDrop = useCallback((acceptedFiles) => {
    onDrop(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ handleDrop });
  return (
    <>
      <div {...getRootProps({ className:"h-[200px] border border-gray-300 rounded-sm w-full bg-gray-100 flex justify-center items-center text-gray-400 cursor-pointer hover:bg-slate-200" })}>
        <input {...getInputProps({...props})}/>
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
            <div className="text-center">
                <FontAwesomeIcon className="text-2xl" icon={faCloudUpload} />
                <p>Drag and drop file here or click</p>
            </div>
        )}
      </div>
      {error && <div className="text-danger text-sm">{error.type}</div>}
    </>
  );
})

export default InputFile;
