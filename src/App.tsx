import { useState } from "react";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup"; // Importing Message component
import Message from "./components/Message";

const handleSelectItem = (item: string) => {
  console.log(item)
}

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "Japan"];
  // passing items and heading. Its called props that are input from parent to child component
  // onSelectItem callback function: is way of passing input from child to parent component

  // Show alert when clicked on button, for this use useState Hook (data change over time)
  // if alertVisible then render Message component
  // setAlertVisibility will show hide message box
  const [alertVisible, setAlertVisibility] = useState(false)

  return <div>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>

    {
      alertVisible &&
      <Message onClose={() => setAlertVisibility(false)}>
        Hello <span>Word</span>
      </Message>
    }

    <Button color="primary" onClick={() => setAlertVisibility(true)}>
      My Button
    </Button>
    </div> // Injecting Message component
}

export default App;