const roleBasic = {
    run: function(creep) {
        const getEnergy = require('get.energy')
        const operationRefill = require('operation.refill')
        const operatioBuild = require('operation.build')
        if(creep.carry.energy === 0){
            creep.memory.working = false;
        }
        else if(creep.carry.energy === creep.carryCapacity){
            creep.memory.working = true;
        }
        if (creep.memory.working) {
            (creep.room.memory.needsRefill)
            if (creep.room.memory.needsRefill) {
                //refills extensions, towers, and spawns
                operationRefill.run(creep);
            }
            else if (creep.room.memory.needsConstruction) {
                //builds construction sites
                operatioBuild.run(creep)
            }
            else {
                //upgrades room controller
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }

        else {
            getEnergy.run(creep);
        }
    }
}

module.exports = roleBasic