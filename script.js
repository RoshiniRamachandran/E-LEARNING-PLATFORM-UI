let progress = localStorage.getItem("progress") || 0;

function markCompleted() {
  progress = 100;
  localStorage.setItem("progress", progress);
  alert("Lesson marked as completed!");
}

if (document.getElementById("progressFill")) {
  document.getElementById("progressFill").style.width = progress + "%";
  document.getElementById("progressText").innerText =
    progress + "% Completed";
}
