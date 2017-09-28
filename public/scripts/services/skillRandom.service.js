myApp.service('SkillsService', function ($http) {
    console.log('In SkillService');
    var self = this;

    self.skillsObj = {
        images: ['/images/strange.gif', '/images/croft.gif', '/images/dany.gif'],
        total: 0, 
        skillGen: function () {
            return Math.random() * 10;
        }};
    console.log('self.skillsObj ->', self.skillsObj);
    
    self.playGame = function (playerSkill, characterSkill) {
        self.skillsObj.total++;
        if (playerSkill > characterSkill) {
            return ["You Win!!", "Play Again?"];
        } else if (playerSkill === characterSkill) {
            return ["It Was a Draw!!", "Play Again?"];
        } else if (playerSkill < characterSkill) {
            return ["You Lost :(", "Play Again?"];
        }
    }
    // var randomNum = function () {
    //     return Math.random() * 10;
    // }
})