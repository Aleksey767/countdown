const requestURL = 'https://jsonplaceholder.typicode.com/comments' //ajax запрос происходит
const inputValue = document.querySelector('.form-input');  // на этот free сайт
const buttonClose = document.querySelector('.popup__btn');
const buttonCloseWrong = document.querySelector('.popup__btn-wrong');
const popUp = document.querySelector('.modal');
const popUpWrong = document.querySelector('.modal-wrong');
const sendButton = document.querySelector('.btn');

function sendRequest(method, url, body = null) {

    const headers = {
        'Content-type': 'application/json'
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {                         // если запрос зарезолвился
        if (response.ok) {
            buttonClose.addEventListener('click', function (e) {
                popUp.style.display = 'none';
            })
            popUp.style.display = 'block';
            return response.json()
        }
        return response.json().then(          //если сервер вернул ошибку
            error => {
                const e = new Error('Something went wrong, please reload the page and try again.')
                e.data = error;
                throw e
            })
    })
}

const body = {
    email: inputValue.value
}

sendButton.addEventListener('click', function (e) {        //слушаем кнопку отправки формы
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (inputValue.value !== '' && inputValue.value.match(pattern)) {
        e.preventDefault();
        body.email = inputValue.value;
        sendRequest('POST', requestURL, body)
            .then(data => console.log(data))
            .catch(err => console.log(err))

    } else {                                                        //ошибка в случае некорректного мейла
        e.preventDefault();
        popUpWrong.style.display = 'block';
        buttonCloseWrong.addEventListener('click', function (e) {
            popUpWrong.style.display = 'none';
        })
    }
})




