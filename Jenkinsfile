pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
            echo 'building or resolving dependencies'
            }
        }
    
        stage ('Test') {
            steps {
                 echo 'running regression tests'
                 sh 'sudo apt-get install -y nodejs'
                 sh 'npx cypress run'
            }
        }
    }
    
}
