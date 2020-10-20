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
            slackSend(channel: "#continuousdelivery", message: "The pipeline ends!", sendAsText: true)
        }
        success 
		{
            slackSend channel: "#continuousdelivery",
                  color: 'good',
                  message: "The pipeline completed successfully."
        }
        unstable 
		{
            slackSend channel: "#continuousdelivery",
                  color: 'warning',
                  message: "The pipeline completed unstable."
        }
        failure 
		{
            slackSend channel: "#continuousdelivery",
                  color: 'danger',
                  message: "The pipeline completed failure."
        }
        changed 
		{
            slackSend channel: "#continuousdelivery",
                  color: 'good',
                  message: "The pipeline completed successfully."
        }
    }
}