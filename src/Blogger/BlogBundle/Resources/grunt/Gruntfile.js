/**
 * Created by Pablo on 30/05/14.
 */

module.exports=function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify:{
            my_target:{
                files:{
                    '../../../../../web/scripts/blog.min.js':
                        [
                            '../jQuery/jquery-1.11.1.min.js',
                            '../bootstrap/js/dropdown.js',
                            '../bootstrap/js/collapse.js',
                            '../scripts/blog.js'
                        ]
                }
            }
        },
        less: {
            production:{
                options: {
                    cleancss: true,
                    compress: true,
                    relativeUrls: true
                },
                files:{
                    '../../../../../web/styles/blog.min.css':'../styles/blog.less'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('build',['uglify','less:production']);
};