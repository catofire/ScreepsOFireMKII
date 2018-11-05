module.exports = function() {
	StructureSpawn.prototype.spawnCustomCreep =
		function(energy, roleName){
			var nBodyParts = Math.floor(energy / 200);
			var body = [];
			var newName = roleName + Game.time
			for (let i = 0; i < nBodyParts; i++) {
				body.push(WORK);
			}
			for (let i = 0; i < nBodyParts; i++) {
				body.push(CARRY);
			}
			for (let i = 0; i < nBodyParts; i++) {
				body.push(MOVE);
			}
			this.spawnCreep(body, newName, {memory: {role: roleName}})
    };
};