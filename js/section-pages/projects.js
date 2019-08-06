const projectsPage = `
<div class="section">
  ${buildProjects()}
</div>
`;

$(document).ready(() => {
  document.getElementById('projects-page').innerHTML = projectsPage;
});
