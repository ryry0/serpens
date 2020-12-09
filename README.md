# Readme

Playground to mess around with python, electron, containerized.

Dockerfile syntax:
* `RUN`: Runs a command. Has a shell form and exec form, exec preferred. Can
  have multiple RUN commands in a Dockerfile.
* `CMD`: Only one of these allowed in a Dockerfile
* `CMD [ "param1", "param2" ]`: Does not execute a shell, so no shell
  preprocessing or environment substitutions occur.
* `COPY` vs `ADD`: prefer copy, does local files. `ADD` can do local files,
  but also does remote files.

Docker run
* `docker run -it <name>` makes a container and starts an interactive
  session inside of it.
* `docker run -it <name> <shell>` makes a container and starts an interactive
  session inside of it, specified by `<shell>`, e.g. `/bin/bash`.
* `--name` flag to give the container a particular name
* `docker run`ning a container that doesn't have a command at the end of the
  dockerfile will just make it run and exit.
* `-d` flag allows it to run in the background, detached from your current
  terminal. Omitting this will have the non-interactive output appear as a
  child process of your terminal.
* `-p 8888:8888` flag maps ports from `host:container`, in this case 8888

To get results that are written to stdout/stderr, you need to use 
* `docker logs [image name]`.

Docker exec:
* `docker exec <container> <command>` to run stuff inside container.
* `docker exec -it /bin/bash` to spawn a shell inside container. 
    However, you'll be logged in as another shell of root. Need to use `ps -ef` to see other shell processes.

`docker pause <name>` pauses a container's execution.

stopping a docker with `docker stop` turns it off but keeps it hidden so you can
save the state. See hidden docker images with `docker ps -a`. Use `docker rm` to
delete it from this list.

Seems like they like to make the working directory in images either directly in
the root dir or some folder in root dir.

Named mounts in `docker run`:
* `docker volume create <name>`
* `docker volume inspect <name>`
* volumes are stored in the WSL VM.

Bind mounts in `docker run`:
* `-w /app` sets working directory to "/app"
* `-v <dir>:/app` binds host <dir> to the "/app" directory
* anything that existed in that directory before the mount is "gone".

See image history:
* `docker image history <image>`  shows the layers of the image.

Dockerized node app should have `.dockerignore` with `node_modules` in it.

To-do:
* ~~Learn how to do named mount~~
* ~~Learn how to do bind mount~~
* ~~Need to set up docker compatibility with WSL 1.~~
    * follow most of this [link](https://nicnetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly), particularly the step where you export the docker server line.
    * you have to make a symbolic link. `/c -> /mnt/c`
    * when you do bind mounts, you need to use the symbolic link `/c/..../dir`.
    * Docker scan does not seem to  work within the wsl 1 environment.


