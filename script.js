document.getElementById('voteForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from reloading

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();

  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  const checkEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  checkEligibility
    .then(message => alert(message))
    .catch(error => alert(error));
});
