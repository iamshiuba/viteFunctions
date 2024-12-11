function ProfilePicture() {
    const imageUrl = 'https://avatars.githubusercontent.com/u/168146145?v=4';

    const handleClick = (e) => e.target.style.display = "none";
    
    return (
        <img onClick={(e) => handleClick(e)} src={imageUrl}></img>
    )
}

export default ProfilePicture