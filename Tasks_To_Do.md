
Set up the Jenkins server in master or slave architecture
Steps:
1)Setup a Jenkins Server on AWS EC2 instance

Use the Jenkins plugins to perform the computation part on the Docker containers
1)Install Docker/Kubernetes Plugins on Jenkins server

Create Jenkins pipeline script
1)Groovy script 

Use the GIT web hook to schedule the job on check-in or poll SCM
1)GIT Plugin to schedule job upon checkin

Build an image using the artifacts and deploy them on containers
1)Docker file to create image

Remove the container stack after completing the job
