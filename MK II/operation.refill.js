const operationRefill = {
    run: function(creep) {
        let tower = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (structure) => {
                return structure.structureType == STRUCTURE_TOWER  &&
                    structure.energy < structure.energyCapacity;
            }
        })
        let spawn = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION 
                    || structure.structureType == STRUCTURE_SPAWN) &&
                    structure.energy < structure.energyCapacity;
            }
        })
        if(spawn) {
            if(creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawn, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else if(tower) {
            if(creep.transfer(tower, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(tower, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {
        }
    }
}


module.exports = operationRefill