const form = document.querySelector('form');
const studentsList = document.getElementById('students-list');
const skillsValue = document.getElementById('skills-value');

function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('studentName').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value;
    const group = document.querySelector('input[name="group"]:checked').value;
    const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(input => input.value);

    let asteriskEmail = email.replace(/.*/g, '*');
    let asteriskTelephone = telephone.replace(/.*/g, '*');

    let personalDataShown = false;

    let personalDataDiv = document.createElement('div');
    personalDataDiv.classList.add('personal-data');
    personalDataDiv.style.display = 'none';

    let studentItem = document.createElement('div');
    studentItem.classList.add('student-item');

    let showButton = document.createElement('button');
    showButton.textContent = 'Show personal data';

    let emailDisplay = document.createElement('p');
    emailDisplay.textContent = 'Email: ****';

    let phoneDisplay = document.createElement('p');
    phoneDisplay.textContent = 'Telephone: ****';

    studentItem.innerHTML = `
        <h2>${name} ${surname}</h2>
        <p>Age: ${age}</p>
        <p>Telephone: ${asteriskTelephone}</p>
        <p>Email: ${asteriskEmail}</p>
        <p>Skills: ${skills}</p>
        <p>Group: ${group}</p>
        <p>Languages: ${languages.join(', ')}</p>
    `;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete student';

    deleteButton.addEventListener('click', () => {
        studentsList.removeChild(studentItem);

        showDeletionMessage(`${name} ${surname}`);
    });

    studentItem.appendChild(showButton);
    studentItem.appendChild(deleteButton);
    studentItem.appendChild(personalDataDiv);

    studentsList.insertBefore(studentItem, studentsList.firstChild);
    form.reset();

    studentCreatedNow(name, surname);

    showButton.addEventListener('click', () => {
        if (!personalDataShown) {
            personalDataDiv.style.display = 'block';
            showButton.textContent = 'Hide personal data';
            emailDisplay.textContent = `Email: ${email}`;
            phoneDisplay.textContent = `Tel.: ${telephone}`;
        } else {
            personalDataDiv.style.display = 'none';
            showButton.textContent = 'Show personal data';
            emailDisplay.textContent = 'Email: ****';
            phoneDisplay.textContent = 'Tel.: ****';
        }
        personalDataShown = !personalDataShown;
    });
}

function studentCreatedNow(firstName, lastName) {
    let messageSpan = document.createElement('span');
    messageSpan.textContent = `Student created (${firstName} ${lastName})`;
    messageSpan.classList.add('student-created-message');

    studentsList.insertBefore(messageSpan, studentsList.firstChild);

    setTimeout(() => {
        studentsList.removeChild(messageSpan);
    }, 5000);
}

function showDeletionMessage(fullName) {
    let deletionMessageSpan = document.createElement('span');
    deletionMessageSpan.textContent = `Student (${fullName}) successfully deleted.`;
    deletionMessageSpan.classList.add('deletion-message');

    studentsList.insertBefore(deletionMessageSpan, studentsList.firstChild);

    setTimeout(() => {
        studentsList.removeChild(deletionMessageSpan);
    }, 5000);
}

form.addEventListener('submit', handleSubmit);

document.getElementById('skills').addEventListener('input', function () {
    skillsValue.textContent = `Range: ${this.value}`;
});