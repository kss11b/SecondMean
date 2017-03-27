var mongoose = require('mongoose');
var Item = mongoose.model('Item');
var User = mongoose.model('User');
module.exports = {

  item: function(req, res){
    var tagged_users =[]
    tagged_users.push(req.body.author)
    if(req.body.users){
      tagged_users.push(req.body.users)
    }
    var item = new Item({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
      users: tagged_users
    })
    item.save(function(err, doc){
      if(err){
        console.log('could not save original')
        return res.json(err);
      }
      else{
        console.log(item)
        res.json(doc);
      };
    })
  },

  pull: function(req,res){
    console.log("pull")
    Item.find({}, function(err, post){
      if(err){
        res.json(err)
      }
      else{
        res.json(post);
      }
    }).populate("users").populate('author')


  },

show: function(req, res){
  console.log('backend hit')
  User.findById(req.params.id, function(err, doc){
    if(err){
      res.json(err)
    }
    else{
      res.json(doc)
    }
  })
},

done: function(req, res){
  Item.update({_id: req.params.id},{status:true},function(err, doc){
    if(err){
      res.json(err)
    }
    else{
      res.json(doc)
    }
  })
}

}
