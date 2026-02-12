const ImageReader = ({ setInput }) => {
    let handleImageReader = (e) => {
        const file = e.target.files[0];
        
        if (file) {
            setInput((prev) => ({
                ...prev,
                imageFile: file,
            }))
            const reader = new FileReader();
            reader.onload = () => {
                setInput((prev) => ({
                    ...prev,
                    imagePreview: reader.result,
                }))
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form action="" encType='multipart/form-data'>
            <input type="file" name="billImage" onChange={(e) => { handleImageReader(e) }} id='imageReader' accept='.jpg,.jpeg,.png,.webp' required />
        </form>
    )
}

export default ImageReader