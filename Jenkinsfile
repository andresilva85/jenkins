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
            post {
                always {
                    cucumber failedFeaturesNumber: -1, failedScenariosNumber: -1, failedStepsNumber: -1, fileIncludePattern: '**/*.json', jsonReportDirectory: 'cypress/logs', pendingStepsNumber: -1, skippedStepsNumber: -1, sortingMethod: 'ALPHABETICAL', undefinedStepsNumber: -1
                }
            }
        }
    
        stage ('Test') {
            steps {
                 echo 'running regression tests'
                 
            }
        }
    }
    
}
