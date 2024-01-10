var additemId = 0;
function addtocart(item) {
    additemId += 1;
    var selecteditem = document.createElement('div');
    selecteditem.classList.add('cartImg');
    selecteditem.setAttribute('id', additemId);
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var label = document.createElement('div');
    label.innerText = item.children[2].children[0].innerText;
    var select = document.createElement('span');
    select.innerText = item.children[2].children[1].innerText;
    label.append(select);
    var delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('onclick', 'del(' + additemId + ')');
    var cartItems = document.getElementById('title');
    selecteditem.append(img);
    selecteditem.append(title);
    selecteditem.append(label);
    cartItems.append(selecteditem);
}
function del(item) {
    document.getElementById(item).remove();
}