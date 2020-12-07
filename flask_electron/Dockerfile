# set base imaage (host OS). Use debian for stability and.
FROM debian:bullseye-slim

# set the working directory in the container
WORKDIR /app

# install base packages
RUN apt-get update && apt-get install -y \
        nodejs=12.19.0~dfsg-1 \
        npm=7.1.0+ds-1 \
        python3=3.9.0-4 \
        python3-pip=20.1.1-2

# install node libraries

# install python libraries

# copy the dependencies file to the working directory
# COPY requirements.txt .

# install dependencies
# RUN pip install -r requirements.txt

# copy the content of the local src directory to the working directory
# COPY src/ .

# command to run on container start
# CMD [ "python", "./server.py" ]
