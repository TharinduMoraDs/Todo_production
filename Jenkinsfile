pipeline {
    agent any
    stages {
	stage('backend-build') { 
		steps{
			  dir('.'){	
			sh 'docker build -t backend:1.0 .'
			sh 'docker run --name backend  -d -p 8000:8000 backend'
		}
		}
	}
        stage('frontend-build') { 
            steps {
                dir('./frontend/src/app'){	
			sh 'docker build -t frontend:1.1 .'
			sh 'docker run --name frontend -d -p 8010:8010 frontend'
		}

            }
        }
	stage('Test') { 
		steps{
			sh 'echo Test steps runs here'
		}
	}
    }
}
