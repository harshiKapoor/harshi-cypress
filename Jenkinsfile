    pipeline {
        agent any 
        tools {
            nodejs 'NodeJS' // Replace with your configured NodeJS name
        }
        stages {
            stage('Install Dependencies') {
                steps {
                    sh 'npm install' 
                }
            }
            stage('Run Cypress Tests') {
                steps {
                    sh 'npx cypress run --headless' // Runs tests in headless mode
                }
            }
            
            // Optional: Stage for reporting (e.g., JUnit reports)
            // stage('Publish Test Results') {
            //     steps {
            //         junit 'cypress/results/*.xml' // Adjust path based on your Cypress report configuration
            //     }
            // }
        }
    }