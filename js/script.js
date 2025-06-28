document.addEventListener("DOMContentLoaded", () => {
     const projectSection = document.querySelector("#projects-container");

     fetch("https://api.github.com/users/lindseyfuller/repos?sort=updated&direction=desc")
       .then(response => response.json())
         .then(repos => {
             repos.forEach(repo => {
                 const section = document.createElement("section");
                 section.classList.add("section");

                 section.innerHTML = `
                     <h2>${repo.name}</h2>
                     <p>${repo.description || "No description provided."}</p>
                     <h5><a href="${repo.html_url}" target="_blank">${repo.name}</a></h5>
                 `;

                 projectSection.appendChild(section);
             });
         })
         .catch(error => {
             console.error("Error fetching GitHub repos:", error);
             projectSection.innerHTML += `<p>Could not load repo.</p>`;
         });
});