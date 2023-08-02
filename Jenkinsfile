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
                    
                    env.NOMBRE1 = nombre1.toDouble()
                    env.NOMBRE2 = nombre2.toDouble()
                }
            }
        }

        stage('Calculer la somme') {
            steps {
                script {
                    def somme = env.NOMBRE1 + env.NOMBRE2
                    echo "La somme des deux nombres est : ${somme}"
                    env.SOMME = somme
                }
            }
        }

        stage('Calculer le produit') {
            steps {
                script {
                    def produit = env.NOMBRE1 * env.NOMBRE2
                    echo "Le produit des deux nombres est : ${produit}"
                }
            }
        }
    }
}
