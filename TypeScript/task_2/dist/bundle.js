/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVlBO0lBQUE7SUFVQSxDQUFDO0lBVEcsK0JBQVksR0FBWjtRQUNJLE9BQU8sbUJBQW1CLENBQUM7SUFDL0IsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFDSSxPQUFPLHdCQUF3QixDQUFDO0lBQ3BDLENBQUM7SUFDRCxvQ0FBaUIsR0FBakI7UUFDSSxPQUFPLDJCQUEyQixDQUFDO0lBQ3ZDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFVQSxDQUFDO0lBVEcsOEJBQVksR0FBWjtRQUNJLE9BQU8sdUJBQXVCLENBQUM7SUFDbkMsQ0FBQztJQUNELGdDQUFjLEdBQWQ7UUFDSSxPQUFPLHFCQUFxQixDQUFDO0lBQ2pDLENBQUM7SUFDRCxrQ0FBZ0IsR0FBaEI7UUFDSSxPQUFPLGlCQUFpQixDQUFDO0lBQzdCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzNDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDNUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3hCO1NBQU07UUFDSCxPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7S0FDekI7QUFDTCxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnV29ya2luZyBmcm9tIGhvbWUnO1xuICAgIH1cbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0dldHRpbmcgYSBjb2ZmZWUgYnJlYWsnO1xuICAgIH1cbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0dldHRpbmcgdG8gZGlyZWN0b3IgdGFza3MnO1xuICAgIH1cbn1cblxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0Nhbm5vdCB3b3JrIGZyb20gaG9tZSc7XG4gICAgfVxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnQ2Fubm90IGhhdmUgYSBicmVhayc7XG4gICAgfVxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdHZXR0aW5nIHRvIHdvcmsnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIge1xuICAgIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUZWFjaGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xuICAgIH1cbn1cblxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMjAwKSk7XG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgxMDAwKSk7XG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgnJDUwMCcpKTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=