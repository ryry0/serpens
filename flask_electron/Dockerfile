# set base imaage (host OS). Use debian for stability and.
FROM debian:bullseye-slim

# set the working directory in the container
WORKDIR /app

# install base packages
RUN apt-get update && apt-get install -y \
        wget=1.20.3-1+b3 \
        llvm=1:9.0-49.1 \
        nodejs=12.19.0~dfsg-1 \
        npm=7.1.0+ds-1 \
        python3.8=3.8.6-1 \
        python3-distutils=3.8.6-1

# Get pip
RUN wget https://bootstrap.pypa.io/get-pip.py
RUN python3.8 get-pip.py
RUN rm get-pip.py

# install node libraries

#RUN wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
#RUN bash Miniconda3-latest-Linux-x86_64.sh -p /miniconda -b
#RUN rm Miniconda3-latest-Linux-x86_64.sh
#ENV PATH=/miniconda/bin:${PATH}
#RUN conda update -y conda

# install python libraries
# copy the dependencies file to the working directory
# COPY requirements.txt .

# install dependencies
# RUN pip install -r requirements.txt

# copy the content of the local src directory to the working directory
# COPY src/ .

# command to run on container start
# CMD [ "python", "./server.py" ]
