module.exports = function (grunt) {
    // Configuración de Grunt
    grunt.initConfig({
        exec: {
            typescript: '',
        },

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    require: 'ts-node/register'
                },
                src: ['test/**/*.test.ts']
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.registerTask('check', 'exec:typescript');
    grunt.registerTask('test', 'mochaTest');

    // Tarea predeterminada al ejecutar 'grunt' en la línea de comandos
    grunt.registerTask('default', function () {
        // ...
        console.log('Tarea ejecutada');
    });
};
