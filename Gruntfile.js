module.exports = function (grunt) {
    grunt.initConfig({
        // Comprobación de sintaxis
        eslint: {
            target: ['lib/*.ts']
        }
    });

    grunt.loadNpmTasks('grunt-eslint');
    grunt.registerTask('check', ['eslint']);

    // Tarea predeterminada al ejecutar 'grunt' en la línea de comandos
    grunt.registerTask('default', function () {
        // ...
        console.log('Tarea ejecutada');
    });
};
