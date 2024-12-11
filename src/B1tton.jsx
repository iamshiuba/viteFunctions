function B1tton() {

    const handleClick = (e) => e.target.textContent = "OUCH! 😖"; // e = event
    
    return(
        <button onDoubleClick={(e) => handleClick(e)}>Click me ❤️</button>
    )
}

export default B1tton