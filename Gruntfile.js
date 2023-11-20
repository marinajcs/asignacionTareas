module.exports = function (grunt) {
    // Configuración de Grunt
    grunt.initConfig({
        exec: {
            typescript: 'tsc --noEmit lib/*.ts'
        },

        jasmine: {
            src: 'lib/*.js',
            options: {
                specs: 'test/*.js',
            }
        }
    });
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('check', 'exec:typescript');
    grunt.registerTask('test', ['jasmine'])

    // Tarea predeterminada al ejecutar 'grunt' en la línea de comandos
    grunt.registerTask('default', function () {
        // ...
        console.log('Tarea ejecutada');
    });
};
