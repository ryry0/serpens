# set base imaage (host OS). Use debian for stability.
FROM debian:bullseye-slim

# set the working directory in the container
WORKDIR /app

# install base packages
RUN apt-get update && apt-get install -y \
        wget=1.20.3-1+b3 \
        llvm=1:11.0-51 \
        nodejs=12.19.0~dfsg-1 \
        npm=7.1.0+ds-1 \
        python3.8=3.8.6-1 \
        python3.8-dev=3.8.6-1 \
        python3-distutils=3.8.6-1 \
        libnss3=2:3.59-1 \
        libgbm1=20.2.3-1 \
        libasound2=1.2.3.2-1+b1

# Get pip
RUN wget https://bootstrap.pypa.io/get-pip.py
RUN python3.8 get-pip.py
RUN rm get-pip.py

# install python libraries
# copy the dependencies file to the working directory and install dependencies
COPY requirements.txt .

RUN pip install -r requirements.txt

# install node libraries
COPY package-lock.json package.json .
RUN npm install

# command to run on container start
# CMD [ "python", "./server.py" ]
