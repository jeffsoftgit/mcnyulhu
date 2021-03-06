angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    }).state('app.viewissue', {
        views: {
            app: {
                controller: 'app_viewissue',
                templateProvider: function (app) {
                    return app.templateProvider('app.viewissue');
                }
            }
        }
    }).state('app.namelist', {
        views: {
            app: {
                controller: 'app_namelist',
                templateProvider: function (app) {
                    return app.templateProvider('app.namelist');
                }
            }
        }
    }).state('app.issueadvance', {
        views: {
            app: {
                controller: 'app_issueadvance',
                templateProvider: function (app) {
                    return app.templateProvider('app.issueadvance');
                }
            }
        }
    }).state('app.google', {
        views: {
            app: {
                controller: 'app_google',
                templateProvider: function (app) {
                    return app.templateProvider('app.google');
                }
            }
        }
    }).state('app.reportissue', {
        views: {
            app: {
                controller: 'app_reportissue',
                templateProvider: function (app) {
                    return app.templateProvider('app.reportissue');
                }
            }
        }
    });
});