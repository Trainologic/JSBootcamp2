import { AppModule } from '../../app/app.module';

AppModule.directive('ngRightClick', [function () {
    return {
        restrict: 'A',
        scope: {
            ngRightClick: '&'
        },
        link: function (scope: any, element, attrs) {
            element[0].addEventListener('contextmenu', function (e) {
                console.log(attrs);
                scope.ngRightClick({ $event: e });
                scope.$apply();
                e.preventDefault();
            });
        }
    }
}]
)