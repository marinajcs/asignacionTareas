module.exports = function (grunt) {
    // Configuración de Grunt
    grunt.initConfig({
        exec: {
            typescript: 'tsc --noEmit --target es6 lib/*.ts test/*.ts',
            mochaTest: 'mocha --require ts-node/register test/**/*.test.ts"' 
        },
        
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.registerTask('check', 'exec:typescript');
    grunt.registerTask('test', 'exec:mochaTest');

    // Tarea predeterminada al ejecutar 'grunt' en la línea de comandos
    grunt.registerTask('default', function () {
        // ...
        console.log('Tarea ejecutada');
    });
};
