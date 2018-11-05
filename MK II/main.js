const roleBasic = require('role.basic')
const operationSpawn = require('operation.spawn')
const operationCommand = require('operation.command')
module.exports.loop = function () {
    for(let name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            ('Clearing non-existing creep memory:', name);
        }
    }
    //runs creeps
    for(let creepName in Game.creeps) {
        let creep = Game.creeps[creepName];
        if (creep.memory.role == 'basic') {
            roleBasic.run(creep);
        }
    }
    //runs rooms
    for(let roomName in Game.rooms) {
        let room = Game.rooms[roomName];
        if(room.controller.level > 0) {
            operationSpawn.run(room);
            operationCommand.run(room);
        }
    }
};