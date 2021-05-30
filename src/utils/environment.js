let environment = {};

if (process.env.REACT_APP_ENV === "dev") {
    environment = {
        production: false,
        env: "dev",
        apiEndpoint: "http://127.0.0.1:8000/api/"
    };
} else {
    environment = {
        production: true,
        env: "prod",
        apiEndpoint: "https://transpvis-back.herokuapp.com/api/"
    };
}

export { environment };
