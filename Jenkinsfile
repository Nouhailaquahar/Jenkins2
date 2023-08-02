pipeline {
    agent any

    stages {
        stage('Saisir un nombre') {
            steps {
                script {
                    def nombreSaisi = input(
                        id: 'userInput',
                        message: 'Veuillez saisir un nombre :',
                        parameters: [string(defaultValue: '', description: 'Nombre saisi par l\'utilisateur', name: 'NOMBRE_SAISI')]
                    )
                    echo "Le nombre saisi est : ${nombreSaisi}"
                    return nombreSaisi.toDouble()
                }
            }
        }

        stage('Doubler le nombre') {
            steps {
                script {
                    def nombreDouble = env.NOMBRE_SAISI.toDouble() * 2
                    echo "Le nombre doublé est : ${nombreDouble}"
                    return nombreDouble
                }
            }
        }

        stage('Afficher le résultat') {
            steps {
                script {
                    def resultat = env.NOMBRE_DOUBLE
                    echo "Le résultat est : ${resultat}"
                }
            }
        }
    }
}
