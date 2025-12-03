document.addEventListener("DOMContentLoaded", function () {
    // Il tuo codice qui
    const dataList = [
        { id: 1, nome: "Element 1", descrizione: "Description for element 1", url: 'https://google.it' },
        { id: 2, nome: "Element 2", descrizione: "Description for element 2", url: 'https://amazon.it' },
        { id: 3, nome: "Element 3", descrizione: "Description for element 3", url: 'https://ansa.it' }
    ];

    const container = document.getElementById('list');

    dataList.forEach(element => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
        <h3>${element.nome}</h3>
        <p>${element.descrizione}</p>
        <p><a href="${element.url}" target="_blank">${element.url}</a></p>
      `;
        container.appendChild(div);
    });
});

