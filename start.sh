### DEPLOY PORTFOLIO

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
echo $PORT
CID=$(docker ps --filter "publish=$FE_PORT" --format '{{.ID}}')
echo $CID
if [ ! -z "$CID" ]; then
	docker kill $CID && docker rm $CID 
fi
CID=$(docker ps --filter "publish=$BE_PORT" --format '{{.ID}}')
echo $CID
if [ ! -z "$CID" ]; then
	docker kill $CID && docker rm $CID
fi

docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD
docker pull $DOCKERHUB_USERNAME/$DOCKER_IMAGE_NAME
docker run -p 3000:3000 -p 2506:2506  $DOCKERHUB_USERNAME/$DOCKER_IMAGE_NAME --env-file "$1"
