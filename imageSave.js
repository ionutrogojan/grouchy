const saveBtn = document.querySelector('#save');
// const canvas = document.querySelector('#canvas');
saveBtn.addEventListener('click', saveImage);

function saveImage(){
    canvas.toBlob((blob) => {
        const a = document.createElement('a');
        document.body.append(a);
        a.download = 'grouchy.png';
        a.href = URL.createObjectURL(blob);
        a.click();
        document.body.remove(a);
    })
}