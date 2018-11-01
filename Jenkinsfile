pipeline {
    agent any
    stages {
	stage('backend-build') { 
		steps{
			  dir('./'){	
			sh 'docker build -t backend .'
			sh 'docker run --name backend  -d -p 8000:8000 backend'
		}
		}
	}
        stage('frontend-build') { 
            steps {
                dir('./frontend'){	
			sh 'docker build -t frontend .'
			sh 'docker run --name frontend -d -p 8010:8010 frontend'
		}

            }
        }stage('frontend-build-2') { 
            steps {
                dir('./'){	
			sh 'docker-compose up'
			
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
