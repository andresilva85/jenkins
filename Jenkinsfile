pipeline {
    agent {
        docker {
           image 'cypress/base'
        }
    }
    
    stages {
        stage('Build') {
            steps {
            echo 'building or resolving dependencies'
            sh 'npx cypress run'
        }
    
        stage ('Test') {
            steps {
                 echo 'running regression tests'
                 
            }
        }
    }
    
}
