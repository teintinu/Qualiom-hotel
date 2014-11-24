angular.module('tabsDemo2', ['ngMaterial'])
    .controller('AppCtrl', function ($scope) {
        var tabs = [
            {
                title: 'One',
                content: "Tabs will become paginated if there isn't enough room for them."
            },
            {
                title: 'Two',
                content: "You can swipe left and right on a mobile device to change tabs."
            },
            {
                title: 'Three',
                content: "You can bind the selected tab via the selected attribute on the md-tabs element."
            },
            {
                title: 'Four',
                content: "If you set the selected tab binding to -1, it will leave no tab selected."
            },
            {
                title: 'Five',
                content: "If you remove a tab, it will try to select a new one."
            },
            {
                title: 'Six',
                content: "There's an ink bar that follows the selected tab, you can turn it off if you want."
            }
    ];

        $scope.tabs = tabs;
        $scope.selectedIndex = 2;

        $scope.announceSelected = announceSelected;
        $scope.announceDeselected = announceDeselected;

        $scope.addTab = function (title, view) {
            view = view || title + " Content View";
            tabs.push({
                title: title,
                content: view,
                disabled: false
            });
        };

        $scope.removeTab = function (tab) {
            for (var j = 0; j < tabs.length; j++) {
                if (tab.title == tabs[j].title) {
                    $scope.tabs.splice(j, 1);
                    break;
                }
            }
        };

        function announceDeselected(tab) {
            $scope.farewell = 'Goodbye ' + tab.title + '!';
        }

        function announceSelected(tab) {
            $scope.greeting = 'Hello ' + tab.title + '!';
        }

    });