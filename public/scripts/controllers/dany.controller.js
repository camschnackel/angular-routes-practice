myApp.controller('DanyController', ['SkillsService', function (SkillsService) {
    console.log('in Dany Controller');
    var vm = this;

    vm.image = SkillsService.skillsObj.images[2];
    vm.textFlavor = "High Five Me!";
    vm.buttonFlavor = "Go!";
    vm.highFives = 0;
    vm.counterFlavor = SkillsService.skillsObj.total;

    var dany = SkillsService.skillsObj;
    console.log('dany from SkillsService is ->', dany);

    dany.skill = Math.round(dany.skillGen());
    vm.skill = dany.skill;
    console.log('dany from SkillsService after randomNum is ->', dany);

    vm.receivedFives = function () {
        vm.highFives++;
        console.log('High five received! Character total:', vm.highFives);
    }

    vm.playGame = function () {
        var player = Math.round(dany.skillGen());
        var char = vm.skill;
        var result = SkillsService.playGame(player, char);
        vm.textFlavor = result[0];
        vm.buttonFlavor = result[1];
        vm.counterFlavor = SkillsService.skillsObj.total;
        vm.receivedFives();
    }

    vm.fire = function () {
        vm.theQueen = 'DRACARYS!!';
        console.log('The click clicked!');
        
    }
}]);