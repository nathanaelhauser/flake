const React = require('react')


module.exports = props => {
    return (
       
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.6/css/mdb.min.css" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
    integrity="sha384-KA6wR/X5RY4zFAHpv/CnoG2UW1uogYfdnP67Uv7eULvTveboZJg0qUpmJZb5VqzN" crossorigin="anonymous"/>
            <title>Welcome to Flake</title>
        </head>
        <body>
            {props.children}

        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>  
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src=""></script>
        </body>
        </html>
    )
}


