System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Card;
    return {
        setters:[],
        execute: function() {
            Card = (function () {
                function Card(set, card1, card2) {
                    this.set = set;
                    this.card1 = card1;
                    this.card2 = card2;
                }
                return Card;
            }());
            exports_1("Card", Card);
        }
    }
});
//# sourceMappingURL=card.model.js.map