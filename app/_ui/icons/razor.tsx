import * as React from "react"
const Razor = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 24 24"
    >
        <g stroke="fill-accent" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19.531 15.141 2.79 18.093a1 1 0 0 0-.812 1.159l.174.985a1 1 0 0 0 1.158.81l16.742-2.951a1 1 0 0 0 .811-1.159l-.173-.985a1 1 0 0 0-1.159-.81ZM22 20l-2-2M4 2l9.192 9.192-2.121 2.122L4.707 6.95C3.293 5.535 3.293 4.828 3.293 4.12 3.293 3.414 4 2 4 2ZM4 2l9 9 4.5 4.5" />
        </g>
    </svg>

)
export default Razor
