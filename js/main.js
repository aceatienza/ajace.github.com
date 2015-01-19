(function(){
    Trello.authorize({
        interactive:false,
        success: buildLists()
    });

    function buildLists() {
        // TODO: retrieve board_id programmatically
        var rLists = "boards/54b2cb012998f2c337122a5f/lists";

        var $statusBoard = $('.status-board');

        Trello.get(rLists, function(lists) {
            $.each(lists, function (i, list){
                var $divList = $('<div class="list"></div>');
                $divList.append('<div class="list-header text-center">' + list.name + '</div>');

                var $divCards = $('<div class="cards"></div>');

                Trello.get('lists/' + list.id + '/cards', function(e){
                    $.each(e, function(index, el) {
                        $divCards.append('<button class="btn btn-info">' + el.name + '</button>');
                    });
                });

                $divList.append($divCards);
                $statusBoard.append($divList);          
            });
        });
    };    
})();
