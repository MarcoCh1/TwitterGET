document.getElementById('twitterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    fetch(`/getUserInfo?username=${username}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('userInfo').innerText = JSON.stringify(data);
        });
});
