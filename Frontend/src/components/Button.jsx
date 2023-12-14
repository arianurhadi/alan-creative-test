function Button({ children, color = "primary", btnType = "default", className = "", ...props }) {
  let colorClass = "";
  let btnTypeClass = "px-10 py-2";
 
  switch (color) {
    case "success":
      colorClass += "bg-success text-white hover:bg-slate-500";
      break;
    case "outline-danger":
      colorClass += "bg-white border-danger text-danger hover:text-white hover:bg-danger";
      break;
    case "light":
      colorClass += "bg-white text-black hover:bg-slate-200 border-gray-500";
      break;
    default:
      colorClass += "bg-primary text-white hover:bg-slate-500";
      break;
  }

  if (btnType === 'btnIcon') {
    btnTypeClass = 'p-4'
  }

  return (
    <button
      className={`inline-flex border border-transparant rounded-[4px] gap-1 text-center text-sm font-semibold justify-center items-center ${btnTypeClass} ${colorClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
