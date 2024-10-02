import express from "express";
import ejs from "ejs";

export const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

const messages = [
	{
		text: 'Hi there!',
		user: 'Victor',
		added: new Date()
	},
	{
		text: 'This is a test',
		user: 'Victor again',
		added: new Date()
	}
];

app.locals.routes = {
	newMessage: '/new',
	messageDetails: '/details'
};

app.get('/', (req, res) => {
	res.render('index.html', {
		messages: messages
	});
});

app.get('/new', (req, res) => {
	res.render('form.html', {
		messages: messages
	});
});

app.post('/new', (req, res) => {
	messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
	res.redirect("/");
});

app.post('/details', (req, res) => {
	res.render('details.html', {
		text: req.body.text, user: req.body.user, added: req.body.added
	});
});
