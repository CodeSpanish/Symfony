/**
 * Created by Pablo on 30/05/14.
 */

module.exports=function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        concat:{
            options: {separator:';'},
            dist:{
                src:['../jQuery/jquery-1.11.1.min.js','./src/Blogger/BlogBundle/Resources/scripts/blog.js'],
                dest:'../../../../../web/scripts/blog.min.js'
            }
        },
        uglify:{}
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('build',['concat']);
};