rnd=$RANDOM
grp=ng-adv-$rnd
loc=westeurope
app=foodui
img="arambazamba/foodui"

az group create -n $grp -l $loc

# List existing containers:

az container list

# Create container:

az container create -g $grp -l $loc -n $app --image $img --cpu 1 --memory 1 --dns-name-label foodapp --port 80