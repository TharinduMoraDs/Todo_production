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
			sh 'docker --restart unless-stopped -v /var:/app/public -e NODE_ENV="production" -e run MONGODB_URI="mongodb://mongo:27071/todo" --link mongo:mongo --name frontend -d -p 8010:8010 frontend'
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
