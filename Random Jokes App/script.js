const jokes = document.querySelector('.joke');
const btn = document.getElementById('btn')

const generateJokes = async() => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        // fetching Api with async await
        const url = "https://icanhazdadjoke.com/";
        const res = await fetch(url, setHeader);
        const data = await res.json();
        console.log(data);
        jokes.innerHTML = data.joke;
    }

    catch(error){
        console.log('The error is ${error}');
    }
}

//calling a function 
btn.addEventListener('click' ,generateJokes)
generateJokes();