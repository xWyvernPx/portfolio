echo $1

if [[ ! -e "$1" ]]; then
        echo 'Please enter path of env file of product(param 1)' >&2
        exit;
fi
if [[ ! -e "$2" ]]; then
        echo 'Please enter path of env file of docker(param 2)' >&2
        exit;
fi



source $1
source $2
docker build $DOCKER_IMAGE_NAME . 

docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD
docker tag $DOCKER_IMAGE_NAME $DOCKERHUB_USERNAME/$DOCKER_IMAGE_NAME
docker push $DOCKERHUB_USERNAME/$DOCKER_IMAGE_NAME
