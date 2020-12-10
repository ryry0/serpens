How to use:

1. Build the image. `cd` to this directory and run
    * `docker build -t flask-electron-base .`
2. Run the image interactively, mount src directory so source files are shared:
    * `docker run -it -v "$(pwd)/src:/app/src" flask-electron-base`
    * need to add correct flag for x11 forwarding as detailed below.
3. This drops you into a bash shell in the folder `/app`
4. Run `npm start`.

Instructions for GUI for Windows/WSL:
1. Install VcXsrv and run it with default settings. Allow through firewall
2. `docker run -it -e DISPLAY=host.docker.internal:0 flask-electron-base`
3. `npm start` inside the container

TODO:
* failed to load driver: swrast error

Instructions for GUI for Mac:
* [Running Desktop Apps in
  Docker](https://medium.com/better-programming/running-desktop-apps-in-docker-43a70a5265c4)
* [link
2](https://calbertts.medium.com/developing-electron-apps-in-macos-afd21b4a59e3#.avdge04d6)
* [link 3](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
* [link
4](https://medium.com/@SaravSun/running-gui-applications-inside-docker-containers-83d65c0db110)

Other notes: To run electron
* Use npm start
* configured package.json to set start command to `electron . --no-sandbox` <=
    need to remove no-sandbox command later? or configure the docker image to
    log in as non-root....

To run jupyter notebook:
1. `docker run -it -p 8888:8888 -v "$(pwd)/src:/app/src" flask-electron-base` to forward port 8888 to host.
2. `jupyter notebook --ip='0.0.0.0'` The IP flag allows browsers outside the
container to connect. Point browser to `localhost:8888`.


TODO:
* Figure out how to set a persistent password.


TODO

* ~~Create an image with both node and python~~
* ~~create an electron/flask app based on this
  [link](https://www.ahmedbouchefra.com/connect-python-3-electron-nodejs-build-desktop-apps/)~~
* ~~Need to forward an X server port and install an x client on the host to use x
programs.~~
* ~~fix installing the node modules.~~

* Load image with 
    * ~~numpy/matplotlib/umap/~~
    * ~~ipython notebooks~~
    * ~~electron, two js, bootstrap~~
