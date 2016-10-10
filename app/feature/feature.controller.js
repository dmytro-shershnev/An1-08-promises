(function() {
	"use strict";

	angular
		.module("feature")
		.controller("Feature", Feature);

	function Feature($q, tasksDataService) {
        let $ctrl = this;

        console.log('From controller');

        tasksDataService.getTasks()
            .then(getTasksSuccess, getTasksError, getTasksNotification);

        function getTasksSuccess(tasks) {
            $ctrl.tasks = tasks;
        }

        function getTasksError(reason) {
            console.log(reason);
        }

        function getTasksNotification(msg) {
            console.log(msg);
        }
	}
	
})();
