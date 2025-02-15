rnd=$RANDOM
grp=ng-adv-$rnd
loc=westeurope
aks=foodcluster-$rnd
ns=foodapp-staging

# Install kubectl command line client locally:
# az aks install-cli

# Create resource group:

az group create -n $grp -l $loc

# Create AKS cluster:

az aks create -g $grp -n $aks --node-count 1 --generate-ssh-keys 

# Get credentials for the Kubernets cluster:

az aks get-credentials -g $grp -n $aks

# Get a list of cluster nodes:

kubectl get nodes

# Create a namespace

kubectl create namespace $ns

# Apply the yaml - Make sure you uploaded foodapi.yaml to CloudShell

kubectl apply -f $ui --namespace $ns

# Get some metadata
kubectl get deployment $app -n $ns

kubectl get pods -n $ns

kubectl get pods -l app=foodapi -n $ns

# Get the serive IP and use it on the assigned port
kubectl get service $app -n $ns

# port taken from yaml
# ie: http://20.93.247.200:8081