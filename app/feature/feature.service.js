(function() {
    "use strict";

    angular
        .module("feature")
        .factory("tasksDataService", tasksDataService);

    function tasksDataService($q, $timeout) {
        let tasks = [
            {"id": "1", "action": "Estimate", "description": "Description of the task", "done": "false", "userId": "1", "userName": "Alan", "deadline": "2015-05-30", "priority": "1", "estimation": "3"}, 
            {"id": "2", "action": "Create...", "done": "false", "userId": "2", "userName": "Bella"}, 
            {"id": "3", "action": "Update...", "done": "false", "userId": "3", "userName": "Vardan"}, 
            {"id": "4", "action": "Delete...", "done": "false", "userId": "4", "userName": "Galiia"}, 
            {"id": "5", "action": "Deploy", "done": "false", "userId": "5", "userName": "Dmitriy"}
        ];

        return {
            getTasks
        };

        function getTasks() {
            let def = $q.defer();

            $timeout(() => {
                let flag = true;

                if (flag) {
                    def.notify('Start...');
                    def.notify('Almost finish...');
                    def.notify('Finish');
                    def.resolve(tasks);
                } else {
                    def.reject('Error tasks');
                }

            }, 200);

            return def.promise;
        }
    }

})();
