module.exports = {

    addProduct: (req, res) => {
        let prod_id = req.cart.id
        let {prod_name, price, image} = req.body;
        console.log(req.user);
        req.app.get('db').products.create_product(prod_name, price, image, prod_id).then((response) =>{
            console.log(response);
            res.status(200).send(response)

        }).catch(console.log);
    },

    getProducts: (req, res) => {
        req.app.get('db').products.get_product(req.params.prod_id).then((response) =>{
            console.log(response);
            res.status(200).send(response)
        }).catch(console.log);
    },
    
    editProduct: (req, res, next) => {
           const dbInstance = req.app.get('db');
           const { params } = req;

           dbInstance.edit_product([
               params.id, 
               params.prod_name,
               params.price,
                ])
           .then( () => res.status(200).send() )
           .catch( () => res.status(500).send() );
    },
    deleteProduct: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        
    dbInstance.delete_product([params.id])
    .then( () => res.status(200).send() )   
    .catch( () => res.status(500).send() );   
    },

}
