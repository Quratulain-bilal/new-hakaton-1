"use strict";
function toggleSkillsDetails() {
    const skillsContent = document.getElementById("skills-details");
    if (skillsContent) {
        skillsContent.classList.toggle("hidden");
    }
}
