import MouseEvent, { useState } from "react"; 

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    // props are input to component
    // useState is Hook will be use to maintain the state. Initialize it with -1
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // JSX - Javascript XML - Converting HTMl into React JS code
    return ( // JSX way of using html wrap inside bracket
        // <> (called Fragment) will allow to wrap multiple html element inside component 
        <>
            <h1>{heading}</h1>
            { items.length === 0 && <p>No item found</p> }
            <ul className="list-group">
                {
                    items.map((item, index) => (
                        <li 
                        className={
                            selectedIndex === index ? "list-group-item active": "list-group-item"
                        } 
                        key={item}
                        onClick={() => { 
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                        >
                        {item}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ListGroup