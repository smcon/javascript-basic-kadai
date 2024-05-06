const btn = document.getElementById('btn');

const text = document.getElementById('text');

function handleClick() {
  text.textContent = 'ボタンをクリックしました';
}

setTimeout(() => {
btn.addEventListener('click', handleClick);
}, 2000);