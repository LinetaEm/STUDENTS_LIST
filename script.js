const students = [
    {
        name: "John",
        surname: "Doe",
        age: 22,
        telephone: "123456",
        email: "email@email.com",
        skills: "9",
        group: "FEU 1 gr.",
        languages: ["English", "Spanish"]
    },
    {
        name: "Kristina",
        surname: "Rait",
        age: 33,
        telephone: "6543210",
        email: "email@email.lt",
        skills: "7",
        group: "FEU 2 gr.",
        languages: ["JavaScript, Java, HTML, CSS"]
    },
    {
        name: "Bob",
        surname: "Johnson",
        age: 44,
        telephone: "555-555-5555",
        email: "email@email.ee",
        skills: "2",
        group: "FEU 3 gr.",
        languages: ["Java, CSS"]
    },
    {
        name: "Tomas",
        surname: "Brown",
        age: 55,
        telephone: "111-222-3333",
        email: "email@email.sk",
        skills: "5",
        group: "FEU 4 gr.",
        languages: ["HTML, CSS"]
    },
    {
        name: "Eva",
        surname: "Horn",
        age: 66,
        telephone: "777-888-9999",
        email: "email@email.bg",
        skills: "10",
        group: "FEU 5 gr.",
        languages: ["HTML"]
    }
];

function populateStudentData() {
    const studentsList = document.getElementById('students-list');

    students.forEach(student => {
        const studentItem = document.createElement('div');
        studentItem.classList.add('student-item');

        studentItem.innerHTML = `
            <h2>${student.name} ${student.surname}</h2>
            <p>Age: ${student.age}</p>
            <p>Telephone: ${student.telephone}</p>
            <p>Email: ${student.email}</p>
            <p>Skills: ${student.skills}</p>
            <p>Group: ${student.group}</p>
            <p>Languages: ${student.languages.join(', ')}</p>
        `;

        studentsList.appendChild(studentItem);
    });
}

window.addEventListener('load', populateStudentData);



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
                    phoneDisplay.textContent = `Telephone: ${telephone}`;
                } else {
                    personalDataDiv.style.display = 'none';
                    showButton.textContent = 'Show personal data';
                    emailDisplay.textContent = 'Email: ****';
                    phoneDisplay.textContent = 'Telephone: ****';
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
