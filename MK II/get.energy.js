const getEnergy = {
    run: function(creep) {
        let storage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: s => s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] > 100
        });
        let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: s => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 100
        });
        let source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
        if(storage) {
            if (creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(storage);
            }
        }
        else if(container) {
            if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(container);
            }
        }
        else if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }
    }
}

module.exports = getEnergy