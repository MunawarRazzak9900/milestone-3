document.addEventListener('DOMContentLoaded', function () {
    var generateBtn = document.getElementById('generate-btn');
    var resumeOutput = document.getElementById('resume-output');
    var profilePictureInput = document.getElementById('profilePicture');
    generateBtn.addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skill').value;
        var profilePicture = '';
        if (profilePictureInput.files && profilePictureInput.files[0]) {
            var file = profilePictureInput.files[0];
            profilePicture = URL.createObjectURL(file);
        }
        if (name && email && phone && education && experience && skills) {
            resumeOutput.innerHTML = "\n                <h2>".concat(name, "</h2>\n                <p>Email: ").concat(email, "</p>\n                <p>Phone: ").concat(phone, "</p>\n                ").concat(profilePicture ? "<img src=\"".concat(profilePicture, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            ");
        }
        else {
            resumeOutput.innerHTML = "<p>Please fill out all fields.</p>";
        }
    });
});
