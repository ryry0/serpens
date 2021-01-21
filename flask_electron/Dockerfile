# set base image (host OS). Use debian for stability.
FROM python:3.8-buster

# set the working directory in the container
WORKDIR /app

# install base packages
RUN apt-get update && apt-get install -y \
        wget \
        nodejs \
        npm \
        libnss3 \
        libgbm1 \
        libasound2 \
        libatk-bridge2.0 \
        libx11-xcb-dev \
        libgtk-3-0


# Get pip
#RUN wget https://bootstrap.pypa.io/get-pip.py
#RUN python3.8 get-pip.py
#RUN rm get-pip.py

# install python libraries
# copy the dependencies file to the working directory and install dependencies
COPY requirements.txt .

# Install python libraries:
# jupyter:              jupyter notebooks
# flask:                flask webserver
# flask-cors:           flask cross-origin resource sharing
# umap-learn[plot]:     umap and plotting dependencies
# nltk:                 natural language processing toolkit
# flask-socketio:       websocket communication to frontend
# torch:                pytorch ML librs
# transformers:         NLP libs
RUN pip install -r requirements.txt

# update NPM
RUN npm install npm@latest -g 

# install node libraries
# bootstrap:    Nice HTML5 UI
# electron:     Modern browser-powered desktop app
# python-shell: Python interop
# two.js:       Render SVG
# jquery:       bootstrap peer dep
# popper.js:    bootstrap peer dep
# socketio:     socket communication with python backend.
COPY package-lock.json package.json ./
RUN npm install

# command to run on container start
# CMD [ "python", "./server.py" ]
CMD [ "bash" ]
