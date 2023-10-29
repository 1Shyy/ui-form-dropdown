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
    }
    else {
        initDiv.classList.add('hidden');
        selected.classList.remove('selected');
        selected.classList.add('hidden');
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
    }
    else {
        initDiv.classList.add('hidden');
        selected.classList.remove('selected');
        selected.classList.add('hidden');
    }
}