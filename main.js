$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown(700);
    });

    $('#btn-cancelar').click(function(){
        $('form').slideUp(200);
    });

    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        
        const novoItem = $('<li style="display: none;"></li>');
        const checkbox = $('<input type="checkbox" class="checkbox">');

        novoItem.append(checkbox);
        novoItem.append(novaTarefa);

        $('ul').append(novoItem);

        novoItem.fadeIn(600);

        $('#nova-tarefa').val('');
    });

    $('ul').on('change', '.checkbox', function() {
        const item = $(this).parent();
        if (this.checked) {
            item.css('text-decoration', 'line-through');
        } else {
            item.css('text-decoration', 'none');
        }
    });
});