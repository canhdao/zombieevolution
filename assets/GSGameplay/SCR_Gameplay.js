cc.Class({
    extends: cc.Component,
	
    properties: {
        zombie: {
            default: null,
            type: cc.Node
        },
    },
	
	selectedZombie: null,
	offsetX: 0,
	offsetY: 0,
	
    onLoad: function() {
        //this.label.string = this.text;
		cc.debug.setDisplayStats(false);
		
		this.node.on('mousedown', this.onMouseDown, this);
		this.node.on('mousemove', this.onMouseMove, this);
		this.node.on('mouseup', this.onMouseUp, this);
    },
	
    update: function(dt) {

    },
	
	onMouseDown: function(event) {
		var pos = event.getLocation();
		if (this.zombie.getBoundingBoxToWorld().contains(pos)) {
			this.selectedZombie = this.zombie;
			this.offsetX = this.selectedZombie.x - pos.x;
			this.offsetY = this.selectedZombie.y - pos.y;
		}
	},
	
	onMouseMove: function(event) {
		if (this.selectedZombie != null) {
			var pos = event.getLocation();
			pos.x += this.offsetX;
			pos.y += this.offsetY;
			
			this.selectedZombie.setPosition(pos);
		}
	},
	
	onMouseUp: function(event) {
		this.selectedZombie = null;
	}
});
