myApp.controller('CroftController', ['SkillsService', function (SkillsService) {
    console.log('in Croft Controller');

    var vm = this;

    vm.image = SkillsService.skillsObj.images[1];
    console.log('vm.image ->', vm.image);
    
    vm.textFlavor = "High Five Me!";
    vm.buttonFlavor = "Go!";
    vm.highFives = 0;
    vm.counterFlavor = SkillsService.skillsObj.total;

    var croft = SkillsService.skillsObj;
    console.log('croft from SkillsService is ->', croft);

    croft.skill = Math.round(croft.skillGen());
    vm.skill = croft.skill;
    console.log('croft from SkillsService after randomNum is ->', croft);

    vm.receivedFives = function () {
        vm.highFives++;
        console.log('High five received! Character total:', vm.highFives);
    }

    vm.playGame = function () {
        var player = Math.round(croft.skillGen());
        var char = vm.skill;
        var result = SkillsService.playGame(player, char);
        vm.textFlavor = result[0];
        vm.buttonFlavor = result[1];
        vm.counterFlavor = SkillsService.skillsObj.total;
        vm.receivedFives();
    }

    vm.raid = function () {
        vm.theTombRaider = 'How dare you!!';
        console.log('The click clicked!');

    }

}]);