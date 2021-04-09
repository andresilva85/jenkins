pipeline {
    agent {
        docker {
            image 'node'
        }
    }
    
    stages {
        stage('Build') {
            steps {
            echo 'building or resolving dependencies'
            sh 'npm install cypress'
            }
        }
    
        stage ('Test') {
            steps {
                 echo 'running regression tests'
                 sh 'npx cypress run'
            }
        }
    }
    
}
