async function pictures() {
    try {
        showLoader();
        const res = await fetch('https://dog.ceo/api/breeds/image/random/20')
        if (!res.ok) {
            throw new Error("Что-то пошло не так!")
        }
        const data = await res.json()
        if (data) {
            const arrUrl = data.message
            displayPictures(arrUrl)
        }
    } catch (e) {
        console.error(e)
    }finally{
        hideLoader()
    }
}

function displayPictures(massif) {
    const box = document.querySelector('.img-box')
    for (let i = 0; i < massif.length; i++) {
        let img = document.createElement('img')
        img.style.display = "block"
        img.style.width = "100px"
        img.style.height = "100px"
        img.src = massif[i]
        box.appendChild(img)
    }
}

document.querySelector('.btn').addEventListener('click', (event) => {
    pictures()
})

function showLoader() {
    document.querySelector('.img-box__loader').style.display = "flex";
}

function hideLoader() {
    document.querySelector('.img-box__loader').style.display = "none";
}

