let fast_sales = [
    {
        //SALE_TOKEN ES UN STRING (ENCRIPTAR)
        'sale_token': 'akjsgb#x76JASNFDdd',
        //MODELS ES UN ARRAY QUE CONTIENE LOS PRODUCTOS SELECCIONADOS
        'models': ['CEM001','CEM002'],
        //SIZES ES UN ARRAY QUE CONTIENE LAS TALLAS DE LOS PRODUCTOS EN EL MISMO AORDEN QUE ESTOS (MODELS)
        //(ABSTRACCIÓN NUMERICA)
        'sizes': ['XL','S'],
        //TIMESTAMP ES UN 'DATE' DE LA FECHA Y HORA DE LA COMPRA
        'timestamp': 'xx-xx-xx',
        //BUYER_IP ES UNA DIRECCION IP
        'buyer_ip': '192.0.0.1',
        //BUYER_TOKEN ES UN STRING
        'buyer_token': 'Buyxxx',
        //AUTH ES UN BOOLEANO
        'auth': true
    }
]

function models_faker(quantity) {
    let fake_models = [];

    for (let i = 0; i < quantity; i++) {
        let fake_model = {};
        let min_max = {
            'name_min': 0,
            'name_max': 6,
            'last_name_min': 0,
            'last_name_max': 4,
            'color_min': 0,
            'color_max': 5,
            'price_min': 100,
            'price_max': 500,
            'sizes_min': 0,
            'sizes_max': 4,
            'stock_min': 1,
            'stock_max': 4,

        }
        //MODEL_ID
        fake_model.model_id = i;
        //NAME
        let zero_index = Math.floor(Math.random()*(min_max.name_max-min_max.name_min+1)+min_max.name_min);
        let first_name = ['Camisa', 'Playera', 'Mandil', 'Parche', 'Pantalon', 'Short', 'Calcetines'];
        let one_index = Math.floor(Math.random()*(min_max.last_name_max-min_max.last_name_min+1)+min_max.last_name_min);
        let last_name = ['verano', 'cigarrillos', 'naruto', 'exterminio', 'plutonio'];
        let two_index = Math.floor(Math.random()*(min_max.color_max-min_max.color_min+1)+min_max.color_min);
        let color = ['rojo', 'azul', 'naranja', 'carmin', 'cian', 'amarillo'];
        let model_name = `${first_name[zero_index]} ${last_name[one_index]} ${color[two_index]}`; 
        fake_model.name = model_name;
        //MODEL
        let model_model = `${first_name[zero_index].substr(0,1) + last_name[one_index].substr(0,1) + color[two_index].substr(0,1) + '00' + i}`;
        fake_model.model = model_model;
        //IMAGE 
        let model_image = `${'00' + i + '.png'}`;
        fake_model.image = model_image;
        //PRICE
        let model_price = Math.floor(Math.random()*(min_max.price_max-min_max.price_min+1)+min_max.price_min);
        fake_model.price = model_price;
        //SIZES
        let possible_sizes = ['XL', 'L', 'M', 'S', 'XS'];
        let reduce_sizes = ['M', 'S'];
        let model_sizes;
        i%2 == 0 ? model_sizes = possible_sizes : model_sizes = reduce_sizes;
        fake_model.sizes = model_sizes;
        //DESCRIPTION
        let model_description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, dolores voluptates velit suscipit doloribus eligendi dicta tempora.';
        fake_model.description = model_description;
        //COLOR
        let model_color = color[two_index];
        fake_model.color = model_color;
        //STOCK
        let model_stock = Math.floor(Math.random()*(min_max.stock_max-min_max.stock_min+1)+min_max.stock_min);
        fake_model.stock = model_stock;
        //TYPE
        let model_type = first_name[zero_index];
        fake_model.type = model_type;
        //SALES
        let model_sales = 0;
        fake_model.sales = model_sales;
        //FINAL
        fake_models[i] = fake_model;
    }

    return fake_models;
}


function fast_sales_faker(quantity) {
    let fake_sales = [];

    for (let i = 0; i < quantity; i++) {
        let fake_sale = {};
        let min_max = {
            'network_min': 134,
            'network_max': 296
        }
        //SALE_ID
        let sale_id = i;
        fake_sale.sale_id = sale_id;
        //BUYER_IP
        let network_id_one = Math.floor(Math.random()*(min_max.network_max-min_max.network_min+1)+min_max.network_min);
        let network_id_two = Math.floor(Math.random()*(min_max.network_max-min_max.network_min+1)+min_max.network_min);
        let network_id_three = Math.floor(Math.random()*(min_max.network_max-min_max.network_min+1)+min_max.network_min);
        let sale_buyer_ip = `${network_id_one + '.' + network_id_two + '.' + network_id_three}`;

        fake_sale.sale_buyer_ip = sale_buyer_ip;
        //BUYER_TOKEN
        //TIMESTAMP
        //MODELS
        //SIZES
        //SALE_TOKEN
        //FINAL
        fake_sales[i] = fake_sale;
    }

    return fake_sales;
}

console.log(fast_sales_faker(5));




//document.addEventListener('keypress', (e) => {
//});
