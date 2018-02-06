 FROM python:3

 ENV PYTHONUNBUFFERED 1

 RUN echo 'export PATH=/opt/conda/bin:$PATH' > /etc/profile.d/conda.sh && \
    wget --quiet https://repo.continuum.io/miniconda/Miniconda2-4.3.27-Linux-x86_64.sh -O ~/miniconda.sh && \
    /bin/bash ~/miniconda.sh -b -p /opt/conda && \
    rm ~/miniconda.sh
 COPY . /code/

 RUN /opt/conda/bin/conda create --name dev --file /code/server/config/homelessness-env.txt

 ENV PATH /opt/conda/bin:$PATH
