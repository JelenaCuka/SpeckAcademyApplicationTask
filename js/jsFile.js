$(function () {
    setAppendItemListener();

});

function setAppendItemListener() {
    $('#listAlati li').click(function () {
        var new_list_item = '<li>' + $(this).text() + '</li>';
        $("#listToolbox").prepend(new_list_item);
        setRemoveItemListener();

    }
    );
}

function setRemoveItemListener() {
    $('#listToolbox li').click(function () {
        $(this).remove();
    }
    );
}

