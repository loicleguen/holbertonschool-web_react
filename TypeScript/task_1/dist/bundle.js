/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
console.log(printTeacher("John", "Doe"));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWlCQSxJQUFNLFlBQVksR0FBeUIsVUFBQyxTQUFpQixFQUFFLFFBQWdCO0lBQzNFLE9BQU8sVUFBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFLLFFBQVEsQ0FBRSxDQUFDO0FBQ2pELENBQUMsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUV0QixJQUFNLFNBQVMsR0FBYztJQUMzQixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsZUFBZSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQztBQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRlYWNoZXIge1xuICAgIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcbiAgICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIERpcmVjdG9ycyBleHRlbmRzIFRlYWNoZXIge1xuICAgIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xuICAgIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZztcbn1cblxuY29uc3QgcHJpbnRUZWFjaGVyOiBwcmludFRlYWNoZXJGdW5jdGlvbiA9IChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIGAke2ZpcnN0TmFtZS5jaGFyQXQoMCl9LiAke2xhc3ROYW1lfWA7XG59O1xuXG5jb25zdCB0ZWFjaGVyMzogVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGZhbHNlLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgY29udHJhY3Q6IGZhbHNlLFxufTtcbmNvbnNvbGUubG9nKHRlYWNoZXIzKTtcblxuY29uc3QgZGlyZWN0b3IxOiBEaXJlY3RvcnMgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcbiAgbnVtYmVyT2ZSZXBvcnRzOiAxNyxcbn07XG5jb25zb2xlLmxvZyhkaXJlY3RvcjEpO1xuXG5jb25zb2xlLmxvZyhwcmludFRlYWNoZXIoXCJKb2huXCIsIFwiRG9lXCIpKTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=