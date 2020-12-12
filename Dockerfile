#  Create a new image from the base nodejs 7 image.
FROM node:14

# Create the target directory in the imahge
RUN mkdir -p /code

# Set the created directory as the working directory
WORKDIR /code

# Copy the package.json inside the working directory
COPY package.json /code
COPY package-lock.json /code

# Install required dependencies
RUN npm install --verbose

# Copy the client application source files. You can use .dockerignore to exlcude files. Works just as .gitignore does.
COPY . /code
