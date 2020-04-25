const mongoose = require('mongoose')

//Paginação
const mongoosePaginate = require('mongoose-paginate')

// Criando um modelo de produto
const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required: true
    },
    url:{
        type:String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

//Paginação
ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);