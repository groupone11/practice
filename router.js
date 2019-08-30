
var express = require('express')

var router = express.Router()
var User = require('./models/user')
var Content = require('./models/content')

router.get('/',function(req,rsp){
	var contents = ''
	Content.find({},function(err,data){
		if(data){
			contents = data
			rsp.render('index.html',{
			contents:contents
			})
		}
	})
})

router.get('/login',function(req,rsp){
	rsp.render('login.html')
})

router.post('/login',function(req,rsp){
	var user = req.body
	User.findOne({
		email:user.email,
		password:user.password
	},function(err,user){
		if (user){
			req.session.user = user
			rsp.render('index.html',{
				user:user
			})
		}
		else {
			console.log(err)
			rsp.send('登陆失败')
		}
	})
})

router.get('/register',function(req,rsp){
	rsp.render('register.html')
})

router.post('/register',function(req,rsp){
	console.log(User)
	var user = new User(req.body)
	user.save().then(() => rsp.send('ok'))
})


router.get('/about',function(req,rsp){
	rsp.render('about.html')
})

router.get('/publish',function(req,rsp){
	rsp.render('publish.html')
})

router.get('/question',function(req,rsp){
	rsp.render('question.html')
})

router.get('/article',function(req,rsp){
	rsp.render('article.html')
})

router.get('/save',function(req,rsp){
	
	var lists = [{
		title:"非遗专家刘魁立：他们研究精英，我研究世俗",
		like_nums:123,
		comment_nums:345,
		status:0
	},
	{
		title:"为岌岌可危的传统工艺注入活力",
		like_nums:123,
		comment_nums:345,
		status:1
	},
	{
		title:"中国非遗保护的思路与出路—读乌丙安 《非物质文化遗产保护理论与方法》",
		like_nums:123,
		comment_nums:345,
		status:0
	},
	{
		title:"李荣启：论非物质文化遗产抢救性保护",
		like_nums:123,
		comment_nums:345,
		status:1
	},
	{
		title:"为非遗的当代价值传递、实现、增值赋能",
		like_nums:123,
		comment_nums:345,
		status:1
	},{
		title:"遗产地保护与经济发展相冲突，怎么办？",
		like_nums:123,
		comment_nums:345,
		status:1
	}]
	for(var index in lists){
		console.log(index)
		var content = new Content(lists[index])
		content.save().then(()=>{
			console.log('OK?')
		})
	}
})
router.get('/delete',function(rep,rsp){
	Content.deleteMany()
})
//




module.exports = router
