module.exports = function (grunt) {
    // Configuración de Grunt
    grunt.initConfig({
        exec: {
            typescript: 'tsc --noEmit lib/*.ts'
        }
    });
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('check', 'exec:typescript');

    // Tarea predeterminada al ejecutar 'grunt' en la línea de comandos
    grunt.registerTask('default', function () {
        // ...
        console.log('Tarea ejecutada');
    });
};
