export SSHPASS=$SSH_PASS
sshpass -e ssh $SSH_CONN $PROJECT_PATH/deploy.sh