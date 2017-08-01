//Global data
InterestsContainner = [];
	
	InterestsContainner['Music'] 		= "<div class='container col-md-12'> <h1> Music </h1> <br><h4> I have always been related to music </h4> <br><p> On my family, both my sisters have been studying in a music conservatory. They were learning piano, so when I had the proper age, I listed myself on the conservatory as well. There i learned piano for six years (even though I didn't got to 6th grade on piano). There I studied Solfeg (up to 6th grade) and harmony (2 years). However, i didn't like much the ways of learning in that school. I felt like it was too academic and that I didn't undertand or feel the music properly; it was like solving maths and I didn't like it that way.</p><p> A couple o years later I got an electric guitar. It was one of my best decisions so far. When I got the guitar I started learning and playing by myself. Not much later, we created a band with some friends so we could meet to play and enjoy the music. We use to play rock or metal mostly but we played a lot of diverse genres, as the members of the band had different music tastes and that enriched the banc. The band had some memebers changes on their way, but it last up until I got to Barcelona to study to get my engineering degree (It was the year everyone was getting into) </p><p> While I was on the band I got myself into electric guitar classes with a teacher I will always be greatfull. WIth him, I learned how to understand music even though you don't have any knowledge of solfeg. Thanks to him I was back to music. Actually I'm still playing both guitar and piano, and I have started to improve the list of instruments I play</p><p> On college, we got the oportunity to develop a Pure Data application, and we decided to develop a mobile app where you could plug your guitar and play along. The app would catch your signal and you would be able to change the effects of the sound or play along some backing track we programm in. </p></div>";
	InterestsContainner['Media'] 		= "";
	InterestsContainner['Volunteer'] 	= "<div class='container col-md-12'> <table class='table'> <thead> <tr> <th class='col-md-2'></th> <th class='col-md-2'>Event</th> <th class='col-md-3'>Location</th> <th class='col-md-3'>Position</th> <th class='col-md-2'>Performed on</th> </tr></thead> <tbody> <tr> <td><img src=''/> </td><td>Games of the Small States of Europe</td><td>Andorra la Vella, Andorra</td><td>Volunteer</td><td>2005</td></tr><tr> <td><img src=''/> </td><td>Synchro Swim competitions</td><td>Andorra la Vella, Andorra</td><td>Volunteer</td><td></td></tr><tr> <td><img src=''/> </td><td>HARD ROCK MOUNTAIN FESTIVAL</td><td>Andorra la Vella, Andorra</td><td>Waitress</td><td>Summer 2009</td></tr><tr> <td><img src='../img/femradio.png'/></td><td>FEM RADIO</td><td>Barcelona, Spain</td><td>Sound Technician</td><td>February - May 2014</td></tr></tbody> </table></div>";
	InterestsContainner['Sports'] 		= "<div class='container col-md-12'> <h1> Sports </h1> <br><h4> I have always been playing Sport </h4> <br><p> Everytime, even since when I was a little boy, I've playing lots of sports both for fun and in a more competitve way</p> <br><h4> Swim </h4> <p> When I was 4, i listed on the swimming school team. I was there compiting up to 15 years old. I used to train on morning before going to the school. As an andorran swimmer, I classified multiple times to the contest such as the Spain' Championship or the Catalunya's championship</p><br><h4> Rugby </h4> <p> When I was 15, i listed on the andorra's rugby team. It was a very interestin place to train. The difference between rugby and the other sports i played was not only the obvious physical heavy interactions but that in the team we had students from all over the country, from all the educational systems, such as french native speakers. We played on the french league, in asossiation with a french little town team called Tarrascon. We used to play every weekend on France so I got used to meet new people everytime and became more open-minded. What i remember more kindly is the intership we made on portugal, where we trained hand in hand with both the Spanish team and the Portugueese team. At the end of the stage, all the teams faced each other and it was incredible.</p><br><h4> Australian football </h4> <p> When I was playing rugby, a friend of mine proposed me to give a try to the autralian football. It was similar to rugby (apparently) but it was more fluid and interactive and not so paused. This sport is not really popular over Catalunya or Andorra so me only had a minor league where we faced one french team and two from Catalunya. As a country team, we got to the eurpean tournament in Croatia. That was by happiest moment on that sport as we where facing teams like the nederland or england.</p></div>";

//Functions to rediret the page to the corresponding information
function setContent(element){
	$('#InfoContainer').empty();
	switch(element.attributes['name'].value){
		case 'Music':
			$('#InfoContainer').html(InterestsContainner['Music'])
			break;
		case 'Media':
			$('#InfoContainer').html(InterestsContainner['Media'])
			break;
		case 'Volunteer':
			$('#InfoContainer').html(InterestsContainner['Volunteer'])
			break;
		case 'Sports':
			$('#InfoContainer').html(InterestsContainner['Sports'])
			break;
		default:
			console.log('No case');
			break;
	};
}