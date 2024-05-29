const apiUrl = 'https://script.google.com/macros/s/AKfycbxeaQQhfsoEE_gEIb9KZJQtwJOJlnNrBmO_FkXPmiD38EGEWFOZw5RcJ5z5QRTnkT3uiw/exec';

document.getElementById('sendForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  const params = {
    id: document.getElementById('sendId').value,
    user: document.getElementById('sendUser').value,
    question: document.getElementById('sendQuestion').value,
    answer: document.getElementById('sendAnswer').value
  };
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    const result = await response.json();
    document.getElementById('sendResults').innerText = JSON.stringify(result);
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('sendResults').innerText = 'Ошибка отправки данных';
  }
});

document.getElementById('getForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  const params = {};
  const id = document.getElementById('getId').value;
  const user = document.getElementById('getUser').value;

  if (id) {
    params.id = id;
  } else if (user) {
    params.user = user;
  }

  if (!params.id && !params.user) {
    document.getElementById('getResults').innerText = 'Пожалуйста, введите ID или User';
    return;
  }

  try {
    const response = await fetch(`${apiUrl}?${new URLSearchParams(params)}`, {
      method: 'GET'
    });
    const result = await response.json();
    document.getElementById('getResults').innerText = JSON.stringify(result);
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('getResults').innerText = 'Ошибка получения данных';
  }
});

document.getElementById('getAllBtn').addEventListener('click', async function () {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET'
    });
    const result = await response.json();
    document.getElementById('getAllResults').innerText = JSON.stringify(result);
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('getAllResults').innerText = 'Ошибка получения данных';
  }
});