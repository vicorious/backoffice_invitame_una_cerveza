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
            slackSend(channel: "#continuousdelivery", message: "https://www.nytimes.com", sendAsText: true)
        }
        success 
		{
            slackSend channel: '${SLACK_CHANNEL}',
                  color: 'good',
                  message: "The pipeline completed successfully."
        }
        unstable 
		{
            slackSend channel: '${SLACK_CHANNEL}',
                  color: 'warning',
                  message: "The pipeline completed unstable."
        }
        failure 
		{
            slackSend channel: '${SLACK_CHANNEL}',
                  color: 'danger',
                  message: "The pipeline completed failure."
        }
        changed 
		{
            slackSend channel: '${SLACK_CHANNEL}',
                  color: 'good',
                  message: "The pipeline completed successfully."
        }
    }
}