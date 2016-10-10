(function() {
	"use strict";

	angular
		.module("feature")
		.controller("Feature", Feature);

	function Feature($q, tasksDataService) {
        let $ctrl = this;

        console.log('From controller');

        // tasksDataService.getTasks()
        //     .then(getTasksSuccess, getTasksError, getTasksNotification);

        // tasksDataService.getTasksNew()
        //     .then(getTasksSuccess)
        //     .catch(getTasksError)
        //     .finally(getTasksComplete);

        // tasksDataService.getUsers()
        //     .then(getUsersSuccess)
        //     .catch(getTasksError)
        //     .finally(getTasksComplete);

        let tasksPromise = tasksDataService.getTasksNew();
        let usersPromise = tasksDataService.getUsers();

        $q.all([tasksPromise, usersPromise, $q.when(10)])
            .then(getAllSuccess)
            .then(process10)
            .catch(getTasksError)
            .finally(getTasksComplete);

        function getTasksSuccess(tasks) {
            $ctrl.tasks = tasks;
        }

        function getUsersSuccess(users) {
            $ctrl.users = users;
        }

        function getAllSuccess(data) {
            $ctrl.tasks = data[0];
            $ctrl.users = data[1];
            console.log(data[2]);
            return data[2];
        }

        function process10(data) {
            console.log(`Process ten: ${data}`);
        }

        function getTasksError(reason) {
            console.log(reason);
        }

        function getTasksNotification(msg) {
            console.log(msg);
        }

        function getTasksComplete() {
            console.log('Promise is completed.')
        }
	}
	
})();
