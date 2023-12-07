import React, {useState} from "react";

function TestForm(){
    const [counter, setCounter] = useState(0)
    const [inputValue, setInputValue] = useState("")

    function handleSubmit(e){
        e.preventDefault()

        const newNumber = counter + inputValue.length

        setCounter(newNumber)
        setInputValue("")
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button>Click Me!</button>
            </form>
        <p>{counter}</p>
        </div>
    )
}

export default TestForm;



// Add a controlled form that includes:
// A text input
// A button with the text of “Click Me!”
// A paragraph that has a counter that starts at 0
// When they input text in the text field and submit it, the text input should reset. At the same time the counter should increment based on the word length.
// The counter will continue to increment based on word length and will never reset back to zero. So for example: if the student typed in hi and submitted 3 times, the counter would be at 6.