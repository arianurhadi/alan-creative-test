import { forwardRef } from "react";

const Input = forwardRef(({ error, className = "", ...props }, ref) => {
  return (
    <>
      <input ref={ref}
        className={`px-2 py-1 w-full border rounded-sm ${error ? 'border-danger' : 'border-gray-300'} ${className}`}
        {...props}
      />
      {error && <div className="text-danger text-sm">{error.type}</div>}
    </>
  );
}
)

export default Input;
