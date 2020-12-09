How to use:

1. Build the image
    `docker build -t flask-electron-base .`
2. Run the image interactively, mount current directory so files are shared:
    `docker run -it -v "$(pwd):/app" flask-electron-base`

Instructions for GUI for Windows/WSL:

Instructions for GUI for Mac:
* [link
1](https://calbertts.medium.com/developing-electron-apps-in-macos-afd21b4a59e3#.avdge04d6)
* [link 2](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
* [link
3](https://medium.com/@SaravSun/running-gui-applications-inside-docker-containers-83d65c0db110)

TODO

* ~~Create an image with both node and python~~
* Need to forward an X server port and install an x client on the host to use x
programs.

* Load image with 
    * ~~numpy/matplotlib/umap/~~
    * ipython notebooks
    * ~~electron, two js, bootstrap~~
