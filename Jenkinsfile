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
                    
                    script {
                        // Utiliser writeFile pour stocker les nombres dans un fichier
                        writeFile file: 'nombres.txt', text: "${nombre1}\n${nombre2}"
                    }
                }
            }
        }

        stage('Calculer la somme') {
            steps {
                script {
                    // Lire les nombres à partir du fichier
                    def nombres = readFile('nombres.txt').trim().split('\n')
                    def somme = nombres[0].toDouble() + nombres[1].toDouble()
                    echo "La somme des deux nombres est : ${somme}"
                    
                    // Stocker la somme dans une variable d'environnement
                    env.SOMME = somme
                }
            }
        }

        stage('Calculer le produit') {
            steps {
                script {
                    // Lire les nombres à partir du fichier
                    def nombres = readFile('nombres.txt').trim().split('\n')
                    def produit = nombres[0].toDouble() * nombres[1].toDouble()
                    echo "Le produit des deux nombres est : ${produit}"
                }
            }
        }
    }
}
