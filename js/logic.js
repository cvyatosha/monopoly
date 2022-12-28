document.querySelectorAll('#test').forEach((e) => {
    e.oninput = () => { 
        let playerProfile = [];

        document.querySelectorAll('#test').forEach((e, i) => {
            playerProfile[i] = e.value;
        });

        window.localStorage.setItem('playerProfile', JSON.stringify(playerProfile));
    };
});

window.onload = () => {
    let playerProfile = JSON.parse(localStorage.getItem('playerProfile'));

    document.querySelectorAll('#test').forEach((e, i) => {
        e.value = playerProfile[i];
    });
}