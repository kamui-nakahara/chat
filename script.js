const canvas=document.getElementById("canvas");
const c=canvas.getContext("2d");
var xhr = new XMLHttpRequest();
xhr.open("POST","https://arwin-new-world.github.io/chat/");
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
