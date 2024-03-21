postData = document.querySelector("#post-data")

const getPosts = async () => {
    const getData = await fetch("https://jsonplaceholder.typicode.com/posts")

    try {
        const data = await getData.json()
        console.log(data)

        data.forEach(item => {
            const postElement = document.createElement('div')
            postElement.innerHTML = `
                <li><strong>${item.title}</strong></li>
                <li>${item.body}</li>
                <hr>
            `
            postData.appendChild(postElement);
        })
    } catch (error) {
        console.log(error)

    }
}
