const url = 'https://script.google.com/macros/s/AKfycbxeaQQhfsoEE_gEIb9KZJQtwJOJlnNrBmO_FkXPmiD38EGEWFOZw5RcJ5z5QRTnkT3uiw/exec'

const answer = document.querySelector('.answer')
const answerBtn = document.querySelector('#answer')


async function sendPostRequest(data) {

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Response:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Пример использования:
const postData = {
    id: '123',
    user: 'John Doe',
    question: 'What is the meaning of life?',
    answer: '42'
};
sendPostRequest(postData);



async function sendGetRequest(params) {
    const url = 'https://script.google.com/macros/s/AKfycbw-2N7QOqWid_8UOv3qZIxLwYDPnrqy-YgPk82z648Zv-ZKSI57hzmd58WGslQ3hOOipw/exec';

    try {
        const response = await fetch(`${url}?${new URLSearchParams(params)}`, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Response:', result);
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Пример использования для получения строки по ID:
const getParamsById = { id: '123' };
sendGetRequest(getParamsById).then(data => {
    console.log('Data by ID:', data);
});

// Пример использования для получения всех строк для определенного пользователя:
const getParamsByUser = { user: 'John Doe' };
sendGetRequest(getParamsByUser).then(data => {
    console.log('Data by User:', data);
});


// Пример использования:
const getParams = {
    id: '123',
    user: 'John Doe',
    question: 'What is the meaning of life?',
    answer: '42'
};
sendGetRequest(getParams);



async function fetchAllData() {
    const url = 'https://script.google.com/macros/s/AKfycbw-2N7QOqWid_8UOv3qZIxLwYDPnrqy-YgPk82z648Zv-ZKSI57hzmd58WGslQ3hOOipw/exec';

    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('All Data:', result);
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Пример использования:
fetchAllData().then(data => {
    // Вы можете использовать данные здесь
    console.log(data);
});
