import mercadopago from "mercadopago"



class Controlador {
    constructor() {
    }


    crearPago = async(req,res) => {
    
    mercadopago.configure({ access_token:'TEST-4202371407803076-062811-2fd71b87bfdd728fafb35c0565c91e69-1410014546',});

    const result =  await mercadopago.preferences.create({

            items:[
                {
                    title:"producto de prueba",
                    unit_price:600,
                    quantity: 1,
                    currency_id: 'ARS',
                },
                {
                    title:"producto de prueba 2 ",
                    unit_price:400,
                    quantity: 1,
                    currency_id: 'ARS',
                }
            ],
            back_urls:{
                success: 'http://localhost:8000/confirmada',
                failure: 'http://localhost:8000/fallida',
            },
    })
    console.log(result)
    res.send('creando orden')

}

}

export default Controlador




