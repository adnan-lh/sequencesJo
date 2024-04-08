//creat card info from data
// add card to the page
function creatCard(n) {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = 'card';
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    if (n == 1) { one(cardBody) }
    else { cardBody.innerHTML = "فارغ" }
    const cancel = cancelfun();
    cardBody.appendChild(cancel);
    card.appendChild(cardBody);
    document.getElementById('card-info').appendChild(card);
}

function cancelfun() {
    const cancel = document.createElement('button');
    cancel.className = 'btn-primary';
    cancel.innerHTML = 'cancel';
    cancel.onclick = () => {
        document.getElementById('card-info').removeChild(card);
    }
    return cancel;
}

function one(cardBody) {
    return cardBody.innerHTML =
        `<img src="./images/LOGO Y 6 TR.png" alt="logo" class="image card-img-top" />
    <h1 class="card-title">تطوير : محمد عدنان الحموي <h1>
    <a href="https://www.youtube.com/channel/UCVJfQQVmEenKx2B4yRtgiSA" style="color: #FF0000;" >Youtube</a>  <a href="https://github.com/" style="color: black;">Github</a>`;
}

// export default addSequencesToArray;