pipeline {
    agent any

    environment {
        GITHUB_REPO = 'nitrophenol/jenkins'
        DOCKERHUB_REPO = 'nitrophenol/jenkins'
    }

    stages {
        stage('Checkout') {
            steps {
                // Pull the source code from GitHub repository
                checkout($class: 'GitSCM', 
                    branches: [[name: '*/main']], 
                    userRemoteConfigs: [[url: "https://github.com/${GITHUB_REPO}.git"]])
            }
        }

        stage('Dockerize') {
            steps {
                // Build a Docker image with the "latest" tag
                script {
                    docker.build("${DOCKERHUB_REPO}:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                // Push the Docker image to Docker Hub
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        docker.image("${DOCKERHUB_REPO}:latest").push()
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
