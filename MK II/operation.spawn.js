const operationSpawn = {
    run: function(room) {
        require('prototype.spawn')(); 
        if (room.controller.level != 0) {
            let spawns = room.find(FIND_MY_SPAWNS);
            if (spawns.length == 1) {
                let creepsInRoom = room.find(FIND_MY_CREEPS);
                let basicsNeeded = 10;
                let energy = room.energyAvailble
                let numberOfBasics = _.sum(creepsInRoom, (c) => c.memory.role == 'basic');
                if(basicsNeeded > numberOfBasics) {
                    spawns[0].spawnCustomCreep(200, 'basic');
                }
            }
        }
    }
}

module.exports = operationSpawn