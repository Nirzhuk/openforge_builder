import { useState } from "react";

const Dropdown = ({Icon,name, children}:any) => {
  const [isActive, setIsActive] = useState(false)
  const [open, setOpen] = useState(false)
  return (
    <div>
      <a
        href="#"
        onClick={() => setOpen(!open)}
        className={`flex items-center p-2 mb-2 text-gray-800 bg-gray-200 transition-colors rounded-md dark:text-light hover:bg-gray-300 dark:hover:bg-gray-600 ${(isActive || open) && 'bg-gray-300'} `}
        role="button"
        aria-haspopup="true"
        aria-expanded={(open || isActive) ? true : false}
      >
        {Icon && <Icon/>}
        <span className="ml-2 text-sm"> {name} </span>
        <span aria-hidden="true" className="ml-auto">
          <svg
            className={`w-4 h-4 transition-transform transform ${open ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </a>
      {open && (
      <div className="mt-2 space-y-2 px-7" role="menu" aria-label="Authentication">
        {children}
      </div>)}

    </div>
  )
  return null;
}

export default Dropdown
