var dragAndDrop = {
    limit: 40,
    count: 0,
    init: function() {
        this.dragula();
        this.eventListeners();
    },

    eventListeners: function() {
        this.dragula.on('drop', this.dropped.bind(this));
    },
    dragula: function() {
        this.dragula = dragula([document.querySelector('#dragula_left'), document.querySelector('#dragula_right')], {
            copy: true
        });

        this.dragula = dragula([document.querySelector('#dragula_right')], {
            removeOnSpill: true
        });
    },

    canMove: function() {
        return this.count < this.limit;
    },

    dropped: function(el) {
        this.count++;
    }
};
dragAndDrop.init();
