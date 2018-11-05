const operationCommand = {
    run: function(room) {
        //finds if room should have spawns, extentions, and towers refilled
        let refill = room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION 
                    || structure.structureType == STRUCTURE_SPAWN
                    || structure.structureType == STRUCTURE_TOWER) &&
                    structure.energy < structure.energyCapacity;
            }
        })
        if (refill != 0) {
            room.memory.needsRefill = true;
        }
        else {
            room.memory.needsRefill = false;
        }
        //finds if the room needs construction
        let constructionSites = room.find(FIND_CONSTRUCTION_SITES);
        if(constructionSites.length > 0) {
            room.memory.needsConstruction = true;
        }
        else {
            room.memory.needsConstruction = false;
        }
    }
}
module.exports = operationCommand