document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    generateBtn.addEventListener('click', () => {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skill') as HTMLTextAreaElement).value;

        let profilePicture = '';
        if (profilePictureInput.files && profilePictureInput.files[0]) {
            const file = profilePictureInput.files[0];
            profilePicture = URL.createObjectURL(file);
        }

        if (name && email && phone && education && experience && skills) {
            resumeOutput.innerHTML = `
                <h2>${name}</h2>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                ${profilePicture ? `<img src="${profilePicture}" alt="Profile Picture" class="profilePicture">` : ''}
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
            `;
        } else {
            resumeOutput.innerHTML = `<p>Please fill out all fields.</p>`;
        }
    });
});
