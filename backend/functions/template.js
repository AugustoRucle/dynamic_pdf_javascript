module.exports = ({ assitant, workshop, date }) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Certificado de MotiCode</title>

            <style>
                
                body, html{
                    margin: 0;
                    padding:0;
                }

                .container{
                    height: 90vh;
                    padding: 30px;
                    background-color: blue;
                }

                .row{
                    width: 100%;
                    height: 50px;
                    background-color: aquamarine;
                    display: flex;
                }

                .text-center{
                    margin: auto;
                }

                .text-uppercase{
                    text-transform: uppercase;
                }

                .text-bold{
                    font-weight: bold;
                }

            </style>

        </head>
        <body>
            <div class="container">
                <div class="row">
                    <p class="text-center">Certifica a:</p> 
                </div>
                <div class="row">
                    <h3 class="text-center text-uppercase">${assitant}</h3>
                </div>   
                <div class="row">
                    <p class="text-center">Por participar en el taller de :</p> 
                </div>    
                <div class="row">
                    <h1 class="text-center text-uppercase">${workshop}</h3>
                </div>  
                <div class="row">
                    <p class="text-center text-bold">el ${date}</p>  
                </div>
        </body>
        </html>        
    `
}
