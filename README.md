# Readme

Playground to mess around with python, electron, containerized.

To get results that are written to stdout/stderr, you need to use 
`docker logs [image name]`.

docker exec to run stuff inside container.

stopping a docker with `docker stop` turns it off but keeps it hidden so you can
save the state. See hidden docker images with `docker ps -a`. Use `docker rm` to
delete it from this list.

Seems like they like to make the working directory in images either directly in
the root dir or some folder in root dir.

To-do:
* Learn how to do named mount
    docker volume create <name>
    docker volume inspect <name>
    volumes are stored in the VM.

* Learn how to do bind mount
    -w /app sets working directory to "/app"
    -v <dir>:/app binds <dir> to the "/app" directory

* Need to set up docker compatibility with WSL 1.
    * follow most of this [link](https://nicnetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly), particularly the step where you export the docker server line.
    * you have to make a symbolic link. /c -> /mnt/c
    * when you do bind mounts, you need to use the symbolic link /c/..../dir.

* Need to forward an X server port and install an x client on the host to use x
programs.
* Test image with numpy/matplotlib/umap/ipython notebooks

