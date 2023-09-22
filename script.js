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

    const studentItem = document.createElement('div');
    studentItem.classList.add('student-item');

    studentItem.innerHTML = `
        <h2>${name} ${surname}</h2>
        <p>Age: ${age}</p>
        <p>Telephone: ${telephone}</p>
        <p>Email: ${email}</p>
        <p>Skills: ${skills}</p>
        <p>Group: ${group}</p>
        <p>Languages: ${languages.join(', ')}</p>
    `;

    studentsList.insertBefore(studentItem, studentsList.firstChild);

    form.reset();
}

form.addEventListener('submit', handleSubmit);

document.getElementById('skills').addEventListener('input', function () {
    skillsValue.textContent = `Range: ${this.value}`;
});
