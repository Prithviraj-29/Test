document.getElementById('fetchNameButton').addEventListener('click', fetchRandomName);

function fetchRandomName() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          console.log(data.results[0].name)
            const name = data.results[0].name;
            const gender = data.results[0].gender;
            const fullName = `${name.title} ${name.first} ${name.last} ${gender}`;
            document.getElementById('randomName').textContent = fullName;
        })
        .catch(error => {
            console.error('Error fetching random name:', error);
            document.getElementById('randomName').textContent = 'Failed to fetch name.';
        });
}
