function apply() {
    let elem = document.getElementById('apply')
    elem.classList.toggle('hidden')
    elem.classList.toggle('dropdown')
}

function checkboxes(text, clas) {
    var initDiv = document.getElementById('init_div'),
        selected = document.getElementById('selected'),
        child = document.getElementById(clas),
        count = $(':checkbox:checked').length;   
    
    if (count > 0) {
        initDiv.innerHTML = count
        initDiv.classList.remove('hidden');
        initDiv.classList.add('init_div');
        selected.classList.remove('hidden');
        selected.classList.add('selected');
        $('.tab-content ul').css('max-height', '236px')
    }
    else {
        initDiv.classList.add('hidden');
        selected.classList.remove('selected');
        selected.classList.add('hidden');
        $('.tab-content ul').css('max-height', '292px')
    }
    if (child.checked) {
        var newDiv = $("<div>");
        newDiv.attr("class", 'select_block ' + clas);
        $(".selected").append(newDiv);
        var newDiv2 = $("<div>");
        newDiv2.text(text)
        newDiv2.attr("class", 'selected_text');
        var newDiv3 = $("<div>");
        newDiv3.attr("class", 'selected_btn');
        newDiv3.attr("onclick", "deleteItem('"+ clas + "')");
        $("." + clas).append(newDiv2);
        $("." + clas).append(newDiv3);
        
        
    } else {
        $("." + clas).detach();
    }
    clas = ""
}

function deleteItem(clas) {
    var initDiv = document.getElementById('init_div'),
        selected = document.getElementById('selected');
    $("." + clas).detach();
    document.getElementById(clas).checked = false;
    var count = $(':checkbox:checked').length;
    if (count > 0) {
        console.log('1')
        initDiv.innerHTML = count
        initDiv.classList.remove('hidden');
        initDiv.classList.add('init_div');
        selected.classList.remove('hidden');
        selected.classList.add('selected');
        $('.tab-content ul').css('max-height', '236px')
    }
    else {
        initDiv.classList.add('hidden');
        selected.classList.remove('selected');
        selected.classList.add('hidden');
        $('.tab-content ul').css('max-height', '292px')
    }
}

$('.tab-content ul').scroll(function() {
        const verticalScrollPx = $('.tab-content ul').scrollTop();
        var count = $(':checkbox:checked').length;
        console.log(verticalScrollPx)
                if (count === 0) {
                    if (verticalScrollPx < 15) {
                        $('.before').css('display', 'none')
                        
                    }
                    else if (verticalScrollPx > 14 && verticalScrollPx < 30) {
                        $('.before').css('display', 'block')
                        $('.after').css('display', 'block')
                        console.log('1')
                    }
                    if (verticalScrollPx > 31) {
                        $('.after').css('display', 'none')
                    }
                } else {
                    if (verticalScrollPx < 15) {
                        $('.before').css('display', 'none')
                    }
                    else if (verticalScrollPx > 14 && verticalScrollPx < 86) {
                        $('.before').css('display', 'block')
                        $('.after').css('display', 'block')
                    }
                    else if (verticalScrollPx > 85) {
                        $('.after').css('display', 'none')
                    }
                }
});