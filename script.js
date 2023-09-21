document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const studentsList = document.querySelector("#students-list");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const studentName = document.querySelector("#studentName").value;
        const age = document.querySelector("#age").value;
        const telephone = document.querySelector("#telephone").value;
        const email = document.querySelector("#email").value;
        const skills = document.querySelector("#skills").value;
        const group = document.querySelector('input[name="group"]:checked').value;
        const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(input => input.value);


        const studentItem = document.createElement("div");
        studentItem.className = "student-item";
        studentItem.innerHTML = `
        <div>
        <h2>${studentName.value} ${surname.value}</h2>
            <p>Age: ${age}</p>
            <p>Tel: ${telephone}</p>
            <p>Email: ${email}</p>
            <p>IT skills: ${skills}/10</p>
            <p>Group: ${group}</p>
            <p>Languages of interest: ${languages.join(", ")}</p>
        </div>`;
        studentsList.insertBefore(studentItem, studentsList.firstChild);
        form.reset();

    });
});
