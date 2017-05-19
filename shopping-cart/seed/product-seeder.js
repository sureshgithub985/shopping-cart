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
  imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
  tittle: 'Gothic Video Game',
  description: 'Awesome Game!!!!',
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
  imagePath: 'http://www.planwallpaper.com/images#static/images/desktop-year-of-the-tiger-images-wallpaper.jpg',
  tittle: 'tiger',
  description: 'Awesome Tiger!!!!',
  price: 50
}),
new Product({
  imagePath: 'https://static.pexels.com/photos/3247/nature-forest-industry-rails.jpg',
  tittle: 'Railyway',
  description: 'Railwayssss!!!!',
  price: 60
})
];

var done=0;
for(var i =0 ; i <products.legth;i++){
  products[i].save(function(err,result){
    done++;
    console.log('Inside the seeder  machhhh...');
    if(done== products.length)
    exit();
  });
}

function exit()
{
  mongoose.disconnect();
}
