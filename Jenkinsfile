pipeline {
    agent any

    stages {
        stage('Saisir les nombres') {
            steps {
                script {
                    def nombre1 = input(
                        echo "=== ÉTAPE SAISIR LES NOMBRES ==="
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
                    
                    echo "=== AFFICHAGE DE LA SOMME ==="
                    def somme = nombre1.toDouble() + nombre2.toDouble()
                    echo "La somme des deux nombres est : ${somme}"
                    
                    echo "=== AFFICHAGE DE LA MULTIPLICATION ==="
                    def produit = nombre1.toDouble() * nombre2.toDouble()
                    echo "Le produit des deux nombres est : ${produit}"
                }
            }
        }
    }
}
