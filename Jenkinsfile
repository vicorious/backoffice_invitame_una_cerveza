pipeline 
{
    agent { docker { image 'node:12.16.1' } }
	
	environment 
	{
        SLACK_CHANNEL    = '#continuousdelivery'
    }
    stages 
	{
        stage('Build') 
		{
            steps 
			{
                sh 'npm --version'
				sh 'npm install'
            }
        }
		stage('Test') 
		{
            steps 
			{
                echo 'No hay test. Paila'
            }
        }
    }
	post 
	{
        always 
		{
            slackSend channel: '${SLACK_CHANNEL}',
                  color: 'good',
                  message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
            deleteDir() /* clean up our workspace */
        }
        success 
		{
            slackSend channel: '${SLACK_CHANNEL}',
                  color: 'good',
                  message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
        }
        unstable 
		{
            slackSend channel: '${SLACK_CHANNEL}',
                  color: 'bad',
                  message: "The pipeline ${currentBuild.fullDisplayName} completed unstable."
        }
        failure 
		{
            slackSend channel: '${SLACK_CHANNEL}',
                  color: 'bad',
                  message: "The pipeline ${currentBuild.fullDisplayName} completed failure."
        }
        changed 
		{
            slackSend channel: '${SLACK_CHANNEL}',
                  color: 'good',
                  message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
        }
    }
}