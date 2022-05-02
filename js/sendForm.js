function sendForm() {
    const   body = document.querySelector('body'),
            modal = document.querySelector('.modal'),
            form = document.querySelector('.contacts__form');
    const   usrname = form.querySelector('input[name=name]'),
            tel = form.querySelector('input[name=tel]'),
            guests = form.querySelector('input[name=guests]'),
            closeBtn = document.getElementById('modal-close-btn'),
            nameTitle = document.querySelector('.user-name');

    function openModal(name) {
        modal.style.display = 'flex';
        body.style.overflow = "hidden";
        nameTitle.textContent = `${name}!`;
    }


    function closeModal() {
        modal.style.display = 'none';
        body.style.overflow = "";
    }


    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains("modal")) {
            closeModal();
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const sendObj = {
            name: usrname.value, 
            tel: tel.value, 
            guests: guests.value
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json()) 
            .then((json) => {
                openModal(json.name);
            })
            .finally(() => {
                form.reset();
            });
    });
}
sendForm();