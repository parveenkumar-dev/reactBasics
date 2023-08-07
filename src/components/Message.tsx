import { ReactNode } from "react";

interface Props {
    children: ReactNode, // using children prop we can pass html to component
    onClose: () => void
}

function Message({children, onClose} :Props) { // Function Component

    // JSX - Javascript XML - Converting HTMl into JS code
    return (
        <div className="alert alert-primary alert-dismissible">
            {children}
            <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Message;