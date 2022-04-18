
var tesc = 0;
var wb = document.getElementById('wb');
var bun = document.getElementById('bun');
var max2 = document.getElementById('max2');
var tp = document.getElementById('tp');

// 时间
function sam() {
  var data = new Date();
  var a = data.getFullYear();
  var b = data.getMonth() + 1;
  b = b < 10 ? '0' + b : b;
  var c = data.getDate();
  c = c < 10 ? '0' + c : c;
  var d = data.getHours();
  d = d < 10 ? '0' + d : d;
  var e = data.getMinutes();
  e = e < 10 ? '0' + e : e;
  return a + '-' + b + '-' + c + '-' + d + ':' + e;

}

// 发布文本
function wbsj() {
  if (wb.value == '') {
    alert('Text cannot be empty');
    return false;
  }
  dtnr();
  wb.value = '';
}

//创造评论
function dtnr(message, date, id) {
  //创造div
  var divda = document.createElement('div');
  divda.className = 'plym';
  max2.appendChild(divda);

  var li = document.createElement('div');
  li.innerHTML = message + '<br><span> Time: ' + date + '</span>';
  divda.appendChild(li)
  //获取删除按钮
  var cs = document.createElement('a');
  cs.href = '#'
  cs.className = 'sc'
  cs.innerHTML = 'Delete'
  divda.appendChild(cs);
  cs.onclick = function () {
    var pd = confirm('Do you want to delete this comment');
    if (pd) {
      fetch(`/api/deleteMessage?id=${id}`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.errcode === 0) {
            window.location.reload()
          }
        })
    }

  }
}

document.onkeydown = function (event) {
  if (event.keyCode == 13) {
    wbsj();
  }
}
