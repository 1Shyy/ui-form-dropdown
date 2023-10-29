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
        const verticalScrollPx1 = $('#px1').scrollTop();
        const verticalScrollPx2 = $('#px2').scrollTop();
        const verticalScrollPx3 = $('#px3').scrollTop();
        const verticalScrollPx4 = $('#px4').scrollTop();
        var count = $(':checkbox:checked').length;
        if (verticalScrollPx1 > 0) {
                if (count === 0) {
                    if (verticalScrollPx1 < 15 && verticalScrollPx1 > 0) {
                        $('.before').css('display', 'none')                 
                    }
                    else if (verticalScrollPx1 > 14 && verticalScrollPx1 < 30) {
                        $('.before').css('display', 'block')
                        $('.after').css('display', 'block')
                    }
                    if (verticalScrollPx1 > 31) {
                        $('.after').css('display', 'none')
                    }
                } else {
                    if (verticalScrollPx1 < 15) {
                        $('.before').css('display', 'none')
                    }
                    else if (verticalScrollPx1 > 14 && verticalScrollPx1 < 86) {
                        $('.before').css('display', 'block')
                        $('.after').css('display', 'block')
                    }
                    else if (verticalScrollPx1 > 85) {
                        $('.after').css('display', 'none')
                    }
                }
        } else if (verticalScrollPx2 > 0) {
            if (count === 0) {
                if (verticalScrollPx2 < 15 && verticalScrollPx2 > 0) {
                    $('.before').css('display', 'none')                 
                }
                else if (verticalScrollPx2 > 14 && verticalScrollPx2 < 30) {
                    $('.before').css('display', 'block')
                    $('.after').css('display', 'block')
                }
                if (verticalScrollPx2 > 31) {
                    $('.after').css('display', 'none')
                }
            } else {
                if (verticalScrollPx2 < 15) {
                    $('.before').css('display', 'none')
                }
                else if (verticalScrollPx2 > 14 && verticalScrollPx2 < 86) {
                    $('.before').css('display', 'block')
                    $('.after').css('display', 'block')
                }
                else if (verticalScrollPx2 > 85) {
                    $('.after').css('display', 'none')
                }
            }
        } else if (verticalScrollPx3 > 0) {
            if (count === 0) {
                if (verticalScrollPx3 < 15 && verticalScrollPx3 > 0) {
                    $('.before').css('display', 'none')                 
                }
                else if (verticalScrollPx3 > 14 && verticalScrollPx3 < 30) {
                    $('.before').css('display', 'block')
                    $('.after').css('display', 'block')
                }
                if (verticalScrollPx3 > 31) {
                    $('.after').css('display', 'none')
                }
            } else {
                if (verticalScrollPx3 < 15) {
                    $('.before').css('display', 'none')
                }
                else if (verticalScrollPx3 > 14 && verticalScrollPx3 < 86) {
                    $('.before').css('display', 'block')
                    $('.after').css('display', 'block')
                }
                else if (verticalScrollPx3 > 85) {
                    $('.after').css('display', 'none')
                }
            }
        } else if (verticalScrollPx4 > 0) {
            if (count === 0) {
                if (verticalScrollPx4 < 15 && verticalScrollPx4 > 0) {
                    $('.before').css('display', 'none')                 
                }
                else if (verticalScrollPx4 > 14 && verticalScrollPx4 < 30) {
                    $('.before').css('display', 'block')
                    $('.after').css('display', 'block')
                }
                if (verticalScrollPx4 > 31) {
                    $('.after').css('display', 'none')
                }
            } else {
                if (verticalScrollPx4 < 15) {
                    $('.before').css('display', 'none')
                }
                else if (verticalScrollPx4 > 14 && verticalScrollPx4 < 86) {
                    $('.before').css('display', 'block')
                    $('.after').css('display', 'block')
                }
                else if (verticalScrollPx4 > 85) {
                    $('.after').css('display', 'none')
                }
            }
        }

});