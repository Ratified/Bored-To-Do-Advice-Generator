const button = document.querySelector('#btn');
const advice = document.querySelector('#advice');
const category = document.querySelector('#category');

async function fetchActivity() {
    try {
        button.addEventListener('click', async () => {
            try {
                const response = await fetch('https://www.boredapi.com/api/activity/');
                const data = await response.json();
                advice.innerHTML = data.activity;
                category.innerHTML = data.type;
            } catch (error) {
                console.log(error);
            }
        });
    } catch (error) {
        console.log(error);
   }
}

fetchActivity()

