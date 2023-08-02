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
                    echo "Les nombres saisis sont : ${nombre1} et ${nombre2}"
                    return [nombre1.toDouble(), nombre2.toDouble()]
                }
            }
        }

        stage('Calculer la somme') {
            steps {
                script {
                    def somme = env.NOMBRE1 + env.NOMBRE2
                    echo "La somme est : ${somme}"
                    return somme
                }
            }
        }

        stage('Afficher le résultat') {
            steps {
                script {
                    def resultat = env.SOMME
                    echo "Le résultat est : ${resultat}"
                }
            }
        }
    }
}
