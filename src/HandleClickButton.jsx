function HandleClickButton() {

    const handleClick = (e) => e.target.textContent = "OUCH! 😖"; // e = event
    
    return(
        <button onDoubleClick={(e) => handleClick(e)}>Click me ❤️</button>
    )
}

export default HandleClickButton;