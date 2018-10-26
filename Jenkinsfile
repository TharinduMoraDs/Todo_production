pipeline {
    agent any
    stages {
	stage('backend') { 
		steps{
			  dir('./'){	
			sh 'docker build -t $USER/backend .'
			sh 'docker run --name backend  -d -p 8000:8000 backend'
		}
		}
	}
        stage('frontend') { 
            steps {
                dir('./frontend/src/app'){	
			sh 'docker build -t $USER/frontend .'
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
