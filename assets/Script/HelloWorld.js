cc.Class({
    extends: cc.Component,
/*
    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },
*/
    onLoad: function () {
        //this.label.string = this.text;
		cc.debug.setDisplayStats(false);
    },

    update: function (dt) {

    },

});
