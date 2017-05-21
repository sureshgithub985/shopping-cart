var Product = require('../models/product');
var mongoose = require('mongoose');
var dbUrl ='mongodb://localhost/shopping';

mongoose.connect(dbUrl, function(err,res){
  if(err)
  {
    console.log('DB_CONNECTION_FAILED: '+err);
  }
  else{
    console.log('DB_CONNECTION_SUCCESS:'+dbUrl)
  }
});

var products = [new Product({
  imagePath: 'https://www.thetelugufilmnagar.com/wp-content/uploads/2017/04/Sharwanands-Radha-Movie-HD-Stills_thetelugufilmnagar5.jpg',
  tittle: 'Radha Movie',
  description: 'Radha Movie!!!!',
  price: 10
}),
    new Product({
        imagePath: 'https://static.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg',
        tittle: 'Flower',
        description: 'Awesome Flower!!!!',
        price: 20
    }),
    new Product({
        imagePath: 'http://im.rediff.com/movies/2016/jan/11telugu-films1.jpg',
        tittle: 'Bahubali',
        description: 'Awesome Movie!!!!',
        price: 30
    }),
    new Product({
        imagePath: 'http://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
        tittle: 'Nature',
        description: 'Awesome Nature1!!!!',
        price: 40
    }),
    new Product({
        imagePath: 'http://stat.homeshop18.com/homeshop18/images/productImages/81/lava-a67-dual-sim-android-mobile-phone-medium_3a86d70832ad27694f49cea1aba8dd81.jpg',
        tittle: 'Mobile',
        description: 'Awesome Features are there',
        price: 50
    }),
    new Product({
        imagePath: 'https://static.pexels.com/photos/3247/nature-forest-industry-rails.jpg',
        tittle: 'Railyway',
        description: 'Railwayssss!!!!',
        price: 60
    })
];

var done = 0;
for(var i = 0 ; i < products.length; i++){
    console.log('closing the connection bylle!!');
  products[i].save(function(err,result){
    done++;
    if(done == products.length)
    exit();
  });
}

function exit()
{
    console.log('closing the connection bye!!');
  mongoose.disconnect();
}
