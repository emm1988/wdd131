const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const delateButton = document.createElement('button');
        li.textContent = input.value;
        delateButton.textContent = '❌';
        li.append(delateButton);
        list.append(li);

        delateButton.addEventListener('click', function() {
        list.removeChild(li);
        input.focus();
        input.value = '';
    });
}
});


