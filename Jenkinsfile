pipeline {
    agent any
    stages {
        stage('Checkout Source') {
            steps {
                git branch: 'main', url: 'https://github.com/Drilonnol/test1.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    echo "Building Docker image"
                    bat 'docker build -t "drilonnol/nodeapp" .'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo "Simulating a test pass"
                    bat 'echo "Test passed"'
                }
            }
        }
        stage('Deploy') {
            steps {
                       kubernetesDeploy(
    configs: 'deployment.yaml,service.yaml',
    kubeconfigId: 'kubernetes'
)
            }
        }
    }
}
