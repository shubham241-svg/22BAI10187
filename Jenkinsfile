pipeline {
    agent any  // Run on any available agent

    stages {
        // Stage 1: Build Docker images
        stage('Build') {
            steps {
                echo 'Building Docker images...'
                sh 'docker build -t backend-image .'
                sh 'docker build -t frontend-image -f Dockerfile.frontend .'
            }
        }

        // Stage 2: Run tests
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'  // Add your test commands here
            }
        }

        // Stage 3: Push Docker images to Docker Hub
        stage('Push') {
            steps {
                echo 'Pushing Docker images to Docker Hub...'
                sh 'docker tag backend-image your-dockerhub-username/backend-image'
                sh 'docker push your-dockerhub-username/backend-image'
                sh 'docker tag frontend-image your-dockerhub-username/frontend-image'
                sh 'docker push your-dockerhub-username/frontend-image'
            }
        }

        // Stage 4: Deploy to Kubernetes
        stage('Deploy') {
            steps {
                echo 'Deploying to Kubernetes...'
                sh 'kubectl apply -f kubernetes/backend-deployment.yaml'
                sh 'kubectl apply -f kubernetes/backend-service.yaml'
                sh 'kubectl apply -f kubernetes/frontend-deployment.yaml'
                sh 'kubectl apply -f kubernetes/frontend-service.yaml'
            }
        }
    }

    // Post-build actions
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}