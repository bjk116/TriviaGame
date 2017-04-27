var questionBank = {
	1: 	{
		'question': 'What classic film was called production 9401 during filming?',
		'answers':['Psycho', 'Back Window', 'Strangers on a Train', 'Casablana'],
		'picUrl': 'assets/images/psycho.jpg',
		},
	2: 	{
		'question':'What color were the slippers in the original Wizard of Oz?',
		'answers':['Red', 'Gold', 'White', 'Yellow'],
		'picUrl': 'assets/images/wOz.jpg'
		},
	3: {
		'question':'In the first two Jaws movies, what was the police chiefs name?',
		'answers':['Martin Brody', 'John Ash', 'Carl Lennyson', 'Clark Kent'],
		'picUrl': 'assets/images/martinBrody.jpg'
		},
	4: {
		'question':'Raquel Welch once had a job as what?',
		'answers':['Weathergirl', 'Waitress', 'Taxi Driver', 'Full Stack Developer'],
		'picUrl': 'assets/images/raquelWelch.jpg'
		},
	5: {
		'question':'In the Terminator, Sarah Connar was played by who?',
		'answers':['Linda Hamilton', 'Sigourney Weaver', 'Angelina Jolie', 'Meiko Kaji'],
		'picUrl': 'assets/images/lindaHamilton.jpg'
		},
	6: {
		'question':'What screenwriter has recieved the most Oscar nominations?',
		'answers':['Woody Allen', 'Ron Howard', 'David Fincher', 'Stephen King'],
		'picUrl': 'assets/images/woodyAllen.jpg'
		},
	7: {
		'question':'What is Sean Connery\'s real first name?',
		'answers':['Thomas', 'George', 'James', 'Peter'],
		'picUrl': 'assets/images/thomasConnery.jpg'
		},
	8: {
		'question':'Alfred Hitchcock admitted to being afraid of what?',
		'answers':['Policeman', 'Spiders', 'World War', 'Being cliche'],
		'picUrl': 'assets/images/alfredHitchcock.jpg'
		},
	9: {
		'question':'Which actor starred in the Sixth Sense?',
		'answers':['Bruce Willis', 'Dolph Lundgren', 'Charlie Day', 'Glenn Howerton'],
		'picUrl': 'assets/images/bruceWillis.jpg'
		},
	10: {
		'question':'Which actor has been portrayed most on screen by other actors?',
		'answers':['Charlie Chaplin', 'Burt Reynolds', 'Sean Connery', 'William Shatner'],
		'picUrl': 'assets/images/charlieChaplin.jpg'
		},
};

var questionOrder;
var randomizedQuestions;
var answerKey;
var score;
var questionOrder=[];
var currentQIndex;

//shuffle an array, courtesy of Knuth Shuffle
//http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
	console.log('shuffling');
	var currentIndex = array.length, temporaryValue, randomIndex;

  	// While there remain elements to shuffle...
  	while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	}

	return array;
}

function createQuestionOrder() {
	console.log('creating question order array');
	console.log(questionOrder);
	for (var i = 0; i < 10; i++) {
		questionOrder.push(i+1);//index 0 goes to question 1, 2 to 3 etc
	}
	console.log(questionOrder);
	shuffle(questionOrder);
	return ;
}

function gameStart(){
	//Get rid of instructions, 
	console.log('Start clicked');
	$('.disappear').css('opacity','0');
	mainGame(questionBank);
};

function checkAnswer() {
	
}

function mainGame(questions) {
	console.log('Running main game');
	//shows currnet question we are on
	currentQIndex=0;
	//randomize question order
	createQuestionOrder(questionOrder);
	//randomize answer order

	//make answer key

	//display question, answers

	//get answer

	//correct/incorrect, display picture

	//move to next qestion

	//repeat

	//tally score

	//restart?
}

$(document).ready(function() {
	console.log('DOM ready');
	$('#startBtn').on('click', gameStart);
});