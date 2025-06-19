const fileInput = document.getElementById('fileInput');
const fileNameDisplay = document.getElementById('fileName');
const fileContentDisplay = document.getElementById('fileContent');

fileInput.addEventListener('change', function () {
  const file = this.files[0];

  if (file) {
    fileNameDisplay.textContent = `Selected File: ${file.name}`;

    if (file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = function (e) {
        fileContentDisplay.textContent = e.target.result;
      };
      reader.readAsText(file);
    } else {
      fileContentDisplay.textContent = "Preview available only for .txt files.";
    }
  } else {
    fileNameDisplay.textContent = '';
    fileContentDisplay.textContent = '';
  }
});
