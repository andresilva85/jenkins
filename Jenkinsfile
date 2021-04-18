pipeline {
    agent {
        docker {
            image 'andresilva85/automacaojenkins'
        }
    }
    
    stages {
        stage('Build') {
            steps {
            echo 'building or resolving dependencies'
            sh 'npm install cypress'
            sh 'npx cypress run'
            }
        }
    
        stage ('Test') {
            steps {
                 echo 'running regression tests'
                 
            }
        }
    }
    
}
