const operationBuild = {
    run: function(creep) {
        let site = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES)
        if(creep.build(site) == ERR_NOT_IN_RANGE) {
            creep.moveTo(site)
        }
    }
}
module.exports = operationBuild