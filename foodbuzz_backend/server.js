import express from 'express';
import cors from 'cors';
import bodyParser from 'body-Parser';
import mongoose from 'mongoose';

const app=express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/issue');

const connection=mongoose.connection;

connection.once('open', ()=>{
    console.log('MOngo DB connection established succesfully');
});
const Schema = mongoose.Schema;
const issue=new Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    email: {
        type: String
    },
    dob: {
        type: String
    }
});
const iss = mongoose.model('issue',issue);
const Userschema=new Schema({
    
    username:{
        type:String
    },
    password:{
        type:String
    },
    email: {
        type: String
    },
    dob: {
        type: String
    },
    phoneno:{
        type:String
    }
});

const Usersc= mongoose.model('Userschema',Userschema);
const Userschema1=new Schema({
    
    username:{
        type:String
    },
    password:{
        type:String
    },
    email: {
        type: String
    },
    dob: {
        type: String
    },
    phoneno:{
        type:String
    }
});

const Usersc1= mongoose.model('Userschema1',Userschema1);

var MenuSchema = mongoose.Schema({
	res_name :{
		type : String,
		required:true
	},
	res_address:{
		type : String,
		required:true
    },

          item_id:{
              type:Number
            },
          item_name:{
              type:String
            },
          item_price:{
              type:Number
            },
          item_category:{
              type:String
            },
          item_img:{
              type:String
            },
            item_count:{
                type:Number
              },
          
    res_mobile_no:{
            type:String
        }
});

var menu=mongoose.model('menu',MenuSchema);
var TestSchema = mongoose.Schema({
    user_id:{
        type:String
    },
	res_name :{
		type : String,
		required:true
	},
	res_address:{
		type : String,
		required:true
    },

          item_id:{
              type:Number
            },
          item_name:{
              type:String
            },
          item_price:{
              type:Number
            },
          item_category:{
              type:String
            },
          item_img:{
              type:String
            },
            item_count:{
                type:Number
              },
          
    res_mobile_no:{
            type:String
        }
});

var test=mongoose.model('test',TestSchema);

router.post('/testadd', function (req, res) {
    const userInfo = req.body;
    if (!userInfo.res_name || !userInfo.res_address || !userInfo.res_mobile_no || !userInfo.item_name) {
        res.json({status: false, msg: 'All fields are mercenary'});
        console.log(userInfo);
        console.log(userInfo.res_name + '|' + userInfo.res_address + '|' + userInfo.res_mobile_no + '|' + userInfo.item_name);
        res.end();
    } else {
        let count = 0;
        test.find(function (err, users) {
            count = users.length;
            console.log(count);
                const newUser = new test({
                    user_id: userInfo.user_id,
                    res_name: userInfo.res_name,
                    res_address: userInfo.res_address,
                    res_mobile_no: userInfo.res_mobile_no,
                    item_name: userInfo.item_name,
                    item_category: userInfo.item_category,
                    item_price: userInfo.item_price,
                    item_id: userInfo.item_id,
                    item_img: userInfo.item_img,
                    item_count:userInfo.item_count
                });
                newUser.save(function (err, data) {
                    if (err) {
                        res.json({status: false, msg: 'Something went wrong'});
                        console.log('l2');
                        res.end();
                    } else {
                        res.json({status: true, msg: 'Done'});
                        res.end();
                    }
                });
            
        });
        console.log('count is here' + count);

    }
});

router.route('/test_list').get((req,res)=>{
    test.find((err,data) => {
        if(err) 
            console.log(err);
        else
            console.log('from issue get');
           
            res.json(data);
    });
});
router.route('/menu_list').get((req,res)=>{
    menu.find((err,data) => {
        if(err) 
            console.log(err);
        else
            console.log('from issue get');
            console.log(data);
            res.json(data);
    });
});

router.route('/list').get((req,res)=>{
    Usersc1.find((err,data) => {
        if(err) 
            console.log(err);
        else
            console.log('from issue get');
            console.log(data);
            res.json(data);
    });
});
router.route('/menu_add').get((req, res) => {
    let data = new menu({
        res_name:"navjivan",
        res_address:"Vaniyvad,Nadiad",
        res_mobile_no:"8154981662",
        item_id:1,item_img:"test",item_name: "bhaji Pav",item_price:100,item_category:"Lunch",
        item_count: 5
      
    });
    data.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});
router.post('/menuadd', function (req, res) {
    console.log(req.body);
    const userInfo = req.body;
    if (!userInfo.res_name || !userInfo.res_address || !userInfo.res_mobile_no || !userInfo.item_name) {
        res.json({status: false, msg: 'All fields are mercenary'});
        console.log(userInfo);
        console.log(userInfo.res_name + '|' + userInfo.res_address + '|' + userInfo.res_mobile_no + '|' + userInfo.item_name);
        res.end();
    } else {
        let count = 0;
        menu.find(function (err, users) {
            count = users.length;
            console.log(count);
                const newUser = new menu({
                    res_name: userInfo.res_name,
                    res_address: userInfo.res_address,
                    res_mobile_no: userInfo.res_mobile_no,
                    item_name: userInfo.item_name,
                    item_category: userInfo.item_category,
                    item_price: userInfo.item_price,
                    item_id: userInfo.item_id,
                    item_img: userInfo.item_img,
                    item_count:userInfo.item_count
                });
                newUser.save(function (err, data) {
                    if (err) {
                        res.json({status: false, msg: 'Something went wrong'});
                        console.log('l2');
                        res.end();
                    } else {
                        res.json({status: true, msg: 'Done'});
                        res.end();
                    }
                });
            
        });
        console.log('count is here' + count);

    }
});

router.route('/list/:id').get((req,res)=>{
   
    iss.findById(req.params.id,(err,issue) => {
        if(err)
            console.log(err);
        else
            res.json(issue);
    });
});

router.post('/login',function(req,res){
    const userInfo=req.body;
    if(!userInfo.username || !userInfo.password){
        res.json({status:false,msg:'field are mercenary'});
        console.log('test1');
        res.end();
    }else{
        iss.find({username: userInfo.username},function(err, user){
            if(user.length <= 0){
                res.json({status:false,msg:'wrong isername and password'});
                res.end();
            }
            else{
                res.json({status:true,msg:'successfully logged in',user: user});
                res.end();
            }
        });
    }

});

router.post('/userlogin',function(req,res){
    const userInfo=req.body;
    if(!userInfo.username|| !userInfo.password ){
        res.json({status:false,msg:'field are mercenary'});
        console.log('test1');
        res.end();
    }else{
        Usersc.find({username: userInfo.username},function(err, user){
            if(user.length <= 0){
                res.json({status:false,msg:'wrong isername and password'});
                res.end();
            }
            else{
                res.json({status:true,msg:'successfully logged in',user: user});
                res.end();
            }
        });
    }

});



router.post('/usersignup', function (req, res) {
    const userInfo = req.body;
    console.log(req.body);
    if(!userInfo.username || !userInfo.email || !userInfo.password  || !userInfo.dob || !userInfo.phoneno){
        res.json({status: false, msg: 'All fields are mercenary'});
        console.log('rahul  hhh');
        console.log(userInfo.email + '|' + userInfo.username + '|' + userInfo.dob + '|' + userInfo.password + '|' + userInfo.phoneno + '|' +userInfo.userid);
        res.end();
    } else {
        let count = 0;
        Usersc.find({username: userInfo.username}, function (err, users) {
            count = users.length;
            console.log(count);
            if (count <= 0) {
                const newUser = new Usersc({
                    email: userInfo.email,
                    username: userInfo.username,
                    dob: userInfo.dob,
                    password: userInfo.password,
                    phoneno: userInfo.phoneno
                });
                newUser.save(function (err, data) {
                    if (err) {
                        res.json({status: false, msg: 'Something went wrong'});
                        console.log('l2');
                        res.end();
                    } else {
                        res.json({status: true, msg: 'Done'});
                        res.end();
                    }
                });
            } else {
                res.json({status: false, msg: 'User already exists'});
                console.log('false-l3');
                res.end();
            }
        });
        console.log('count is here' + count);

    }
});

router.post('/postuser', function (req, res) {
    const userInfo = req.body;
    if (!userInfo.email || !userInfo.username || !userInfo.dob || !userInfo.password) {
        res.json({status: false, msg: 'All fields are mercenary'});
        console.log('rahul  hhh');
        console.log(userInfo.email + '|' + userInfo.username + '|' + userInfo.dob + '|' + userInfo.password);
        res.end();
    } else {
        let count = 0;
        iss.find({username: userInfo.username}, function (err, users) {
            count = users.length;
            console.log(count);
            if (count <= 0) {
                const newUser = new iss({
                    email: userInfo.email,
                    username: userInfo.username,
                    dob: userInfo.dob,
                    password: userInfo.password
                });
                newUser.save(function (err, data) {
                    if (err) {
                        res.json({status: false, msg: 'Something went wrong'});
                        console.log('l2');
                        res.end();
                    } else {
                        res.json({status: true, msg: 'Done'});
                        res.end();
                    }
                });
            } else {
                res.json({status: false, msg: 'User already exists'});
                console.log('false-l3');
                res.end();
            }
        });
        console.log('count is here' + count);

    }
});


router.route('/add').get((req, res) => {
    let data = new iss({
        username:"rahul@gmail.com",
        password:"rahul",
        dob:17/12/1998,
        email:"raghul@kdgjshg.com"
    });
    data.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});
router.route('/issue/update/:id').post((req, res) => {
    iss.findById(req.params.id, (err, issue) => {
        if (!issue)
            return next(new Error('Could not load Document'));
        else {
           // issue.title = req.body.title;
            //issue.responsible = req.body.responsible;
            //issue.description = req.body.description;
            //issue.severity = req.body.severity;
            //issue.status = req.body.status;

            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/list/delete').post((req, res) => {
    console.log(req.body);
    const userInfo=req.body;
    test.remove(userInfo , (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

router.route('/listed/delete').post((req, res) => {
    console.log(req.body);
    const userInfo=req.body;
    menu.remove(userInfo , (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

app.use('/',router)

app.listen(4000,() => console.log('Express Server in port 4000')); 