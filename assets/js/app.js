document.querySelectorAll('.colors input').forEach(function(input) {
   input.style.backgroundColor = input.value;
});

var request = new XMLHttpRequest();
request.open('GET', 'links.json', true);

request.onerror = function() {
    alert('Ups! Da is wohl was kaputt. Versuche es später erneut!');
};
request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        var data = JSON.parse(this.response);
        data.forEach(function(item) {
            $('.list').append('<div class="item">\
                <a href="'+item.link+'"><div class="title">'+item.title+'</div></a>\
                <div class="description">'+item.description+'</div>\
            </div>');
        });
        var jets = new Jets({
          searchTag: '#jetsSearch',
          contentTag: '.list'
      });
    } else {
        request.onerror();
    }
};
request.send();