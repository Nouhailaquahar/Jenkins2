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
                        message: 'Veuillez saisir le deuxieme nombre :',
                        parameters: [string(defaultValue: '', description: 'DeuxiÃ¨me nombre saisi', name: 'NOMBRE2')]
                    )
                    echo "Le premier nombre saisi est : ${nombre1}"
                    echo "Le deuxiÃ¨me nombre saisi est : ${nombre2}"
                    
                    def somme = nombre1.toDouble() + nombre2.toDouble()
                    echo "La somme des deux nombres est : ${somme}"
                    
                    def produit = nombre1.toDouble() * nombre2.toDouble()
                    echo "Le produit des deux nombres est : ${produit}"
                }
            }
        }
    }
}
