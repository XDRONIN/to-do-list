# Deploying the To-Do List Application on Minikube

This guide provides step-by-step instructions on how to deploy the to-do list application on a local Minikube cluster.

## Prerequisites

Before you begin, make sure you have the following tools installed on your local machine:
- [**Minikube**](https://minikube.sigs.k8s.io/docs/start/): For running a local Kubernetes cluster.
- [**kubectl**](https://kubernetes.io/docs/tasks/tools/install-kubectl/): The Kubernetes command-line tool.
- [**Docker**](https://docs.docker.com/get-docker/): For building and pushing the application image.

## Steps

### 1. Build and Push the Docker Image

First, you need to build the Docker image of the application and push it to a container registry like Docker Hub.

1.  **Build the image:**
    Navigate to the root of the project directory and run the following command. Replace `your-dockerhub-username` with your Docker Hub username.

    ```bash
    docker build -t your-dockerhub-username/react-todo-app:latest .
    ```

2.  **Push the image:**
    Push the image to Docker Hub. Make sure you are logged in to Docker Hub (`docker login`).

    ```bash
    docker push your-dockerhub-username/react-todo-app:latest
    ```

### 2. Update the Application Deployment

Open the `app-deployment.yaml` file and replace the placeholder `your-dockerhub-username/react-todo-app:latest` with the name of the image you just pushed.

```yaml
# app-deployment.yaml
...
spec:
  containers:
    - name: react-todo-app
      image: your-dockerhub-username/react-todo-app:latest # <-- IMPORTANT: Update this line
...
```

### 3. Start Minikube

If Minikube is not already running, start it with the following command:

```bash
minikube start
```

### 4. Deploy the Application

Now, you can deploy the application and the database to your Minikube cluster by applying the Kubernetes manifest files.

1.  **Create the PostgreSQL Secret:**
    This secret will store the password for the PostgreSQL database.

    ```bash
    kubectl apply -f postgres-secret.yaml
    ```

2.  **Deploy PostgreSQL:**
    This will create the PostgreSQL `Deployment`, `Service`, and `PersistentVolumeClaim`.

    ```bash
    kubectl apply -f postgres-deployment.yaml
    ```

3.  **Deploy the Application:**
    This will create the application `Deployment` and `Service`.

    ```bash
    kubectl apply -f app-deployment.yaml
    ```

### 5. Access the Application

To access the application, you need to get the URL of the `app-service`. Minikube provides a convenient command for this.

```bash
minikube service app-service
```

This command will open the application in your default web browser.

### 6. Cleaning Up

To delete all the resources created in this guide, you can use the `kubectl delete` command:

```bash
kubectl delete -f app-deployment.yaml
kubectl delete -f postgres-deployment.yaml
kubectl delete -f postgres-secret.yaml
```

To stop the Minikube cluster, run:

```bash
minikube stop
```

That's it! You should now have the to-do list application running on your local Minikube cluster.
