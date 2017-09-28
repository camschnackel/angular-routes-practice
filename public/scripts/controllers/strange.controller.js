myApp.controller('StrangeController', ['SkillsService', function (SkillsService) {
    console.log('in Strange Controller');

    var vm = this;

    vm.image = SkillsService.skillsObj.images[0];
    vm.textFlavor = "High Five Me!";
    vm.buttonFlavor = "Go!";
    vm.highFives = 0;
    vm.counterFlavor = SkillsService.skillsObj.total;

    var strange = SkillsService.skillsObj;
    console.log('strange from SkillsService is ->', strange);
    
    strange.skill = Math.round(strange.skillGen());
    vm.skill = strange.skill;
    console.log('strange from SkillsService after randomNum is ->', strange);

    vm.receivedFives = function () {
        vm.highFives++;
        console.log('High five received! Character total:', vm.highFives);
    }

    vm.playGame = function (){
        var player = Math.round(strange.skillGen());
        var char = vm.skill;
        var result = SkillsService.playGame(player, char);
        vm.textFlavor = result[0];
        vm.buttonFlavor = result[1];
        vm.counterFlavor = SkillsService.skillsObj.total;
        vm.receivedFives();
    }

    vm.spell = function () {
        vm.theChosenOne = 'I\'ve come to bargain!!';
        console.log('The click clicked!');

    }
    
}]);