var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var reporter = require("gulp-protractor-cucumber-html-report");


//gulp.task('webdriver', webdriver_update);

gulp.task("execute",function () {
        return gulp
        .src(['features/*.feature'])
        .pipe(protractor({
                configFile: "conf.js",
                'debug': true,
                'autoStartStopServer': true
            }))
        .on('error', function(e) { console.log(e); });
    });

gulp.task("report", function () {
    gulp.src("reports/results.json")
        .pipe(reporter({
            dest: "reports"
        }));
});
