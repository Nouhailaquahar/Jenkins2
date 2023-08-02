pipeline {
    agent any

    stages {
        stage('Saisir les nombres') {
            steps {
                script {
                    def nombre1 = input(
                        id: 'userInput1',
                        message: 'Veuillez saisir le premier nombre :',
                        parameters: [string(defaultValue: '', description: 'Premier nombre saisi', name: 'NOMBRE1')]
                    )
                    def nombre2 = input(
                        id: 'userInput2',
                        message: 'Veuillez saisir le deuxième nombre :',
                        parameters: [string(defaultValue: '', description: 'Deuxième nombre saisi', name: 'NOMBRE2')]
                    )
                    echo "Le premier nombre saisi est : ${nombre1}"
                    echo "Le deuxième nombre saisi est : ${nombre2}"
                    
                    def somme = nombre1.toDouble() + nombre2.toDouble()
                    echo "La somme des deux nombres est : ${somme}"
                    
                    return [nombre1.toDouble(), nombre2.toDouble()]
                }
            }
        }

        stage('Multiplier les nombres') {
            steps {
                script {
                    def nombres = env.BUILD_PARAMETERS.split(',')
                    def produit = nombres[0].toDouble() * nombres[1].toDouble()
                    echo "Le produit des deux nombres est : ${produit}"
                }
            }
        }
    }
}
