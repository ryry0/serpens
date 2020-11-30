# Readme

Playground to mess around with python, electron, containerized.

To get results that are written to stdout/stderr, you need to use 
`docker logs [image name]`.

docker exec to run stuff inside container.

stopping a docker with `docker stop` turns it off but keeps it hidden so you can
save the state. See hidden docker images with `docker ps -a`. Use `docker rm` to
delete it from this list.

To-do:
* Need to set up docker compatibility with WSL 1.
* Need to forward an X server port and install an x client on the host to use x
programs.
* Test image with numpy/matplotlib/umap/ipython notebooks

