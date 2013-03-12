var Quotes = [
	{
		quote: 'If you can imagine Robert Wyatt, struggling to tune in his wireless, during a robot thunderstorm, whilst trying to relay his newest piano song to his friends from Faust, via the power of thought…',
		source: 'Breakthru Radio'
	},
	{
		quote: '…a sense of AMM, Neu! And Tangerine Dream…',
		source: 'Richard Penguin'
	},
	{
		quote: 'Stunning progressive space-rock melancholia…it’s as if the Flaming Lips just gave birth to Spiritualized.',
		source: 'Artrocker'
	},
	{
		quote: 'Young men meddling in the ways of the ancients, unwittingly summoning forth something powerful, remorseless and demonic.',
		source: 'Mojo'
	},
	{
		quote: 'Like a Betamax version of the Large Hadron Collider.',
		source: 'Uncut	'
	},
	{
		quote: 'Imagine the Fuck Buttons jamming with Acid Mothers Temple or Amon Düül II…',
		source: 'Total Music Magazine'
	},
	{
		quote: '…lava lamp two-step…',
		source: 'Rock-a-rolla'
	},
	{
		quote: 'It peeps deliberate around the corner, then all of a sudden it makes you so sad that you want to make a call to the emergency pastoral care but then you don’t, cause you rather keep listening to this gruesome beautiful sound.',
		source: 'Lodown, Berlin'
	},
	{
		quote: "It’s quite long, but it’s entirely worth playing.",
		source: 'Tom Ravenscroft, 6 Music'
	},
	{
		quote: "Quiet, creaking drones – impressive.",
		source: 'The Wire'
	}
];
var formatGig = function(gig){
	var date_parts = gig.start.date.split('-');
	gig.date = formatDate(new Date(date_parts[0], (date_parts[1] - 1), date_parts[2]));
	return gig;
	//this.description = gig.type == 'Festival' ? gig.series.displayName : gig.venue.displayName;
	//this.location = gig.;
};
var formatDate = function(date){
	function formatDay(day){
		var ret = parseFloat(day).toString();
		if(ret.match(/1$/) && ret != '11'){
			ret += 'st'
		} else if(ret.match(/2$/) && ret != '12'){
			ret += 'nd'
		} else if(ret.match(/3$/) && ret != '13'){
			ret += 'rd'
		} else {
			ret += 'th'
		};
		return ret;
	};
	var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	return formatDay(date.getDate()) + " " + months[parseFloat(date.getMonth())] + ", " + date.getFullYear();
}
var renderGigs = function(result) {
	$("#gigs").removeClass('loading-ajax').append($("#gigTemplate").tmpl($.map(result.resultsPage.results.event,function(gig){
		return formatGig(gig);
	})));
};
var loadTwitter = function(count){
	$.ajax({
		url: "http://api.twitter.com/1/statuses/user_timeline.json/",
		type: 'GET',
		dataType: 'jsonp',
		data: {
			screen_name: 'trspt',
			count:count,
			include_entities: true,
			include_rts: false,
			exclude_replies: true
		},
		jsonpCallback: "renderTwitter"
	});
}
var renderTwitter = function(result){
	log(result)
	window.Tweets = result;
	if(tweets.length < 10){
		loadTwitter(result.length + 10);
	} else {
		$("#tweets").removeClass('loading-ajax');
		$('#tweet_container').html($("#tweetTemplate").tmpl(Tweets));
		var content = $("#tweet_container").html();

		//content = content.replace(/(^|\s)@(\w+)/g, '$1<a href="http://www.twitter.com/$2">@$2</a>');
		content = content.replace(/#(\w+)/g, '<a href="http://twitter.com/search?q=%23$1">#$1</a>');

		function getEntity(entityName){
			return _(TweetEntities).chain().pluck(entityName).reject(function(entity){ return _.isEmpty(entity)}).uniq().flatten().value();
		}

		window.TweetEntities = _.pluck(Tweets, 'entities') ;
		_.each(getEntity('media'), function(entity){
			content = content.replace(entity.url, '<a href="'+entity.media_url+'" class="fancybox">view</a>')
		});
		_.each(getEntity('urls'), function(entity){
			content = content.replace(entity.url, '<a href="'+entity.expanded_url+'">'+entity.url+'</a>')
		});


		$('#tweet_container').html(content);
		$(".fancybox", '#tweet_container').fancybox();

		x = [];
		_.each(getEntity('user_mentions'), function(entity){
			$.ajax({
				url: "https://api.twitter.com/1/users/show.json/",
				type: 'GET',
				dataType: 'jsonp',
				data: {
					user_id: entity.id,
					include_entities: true
				},
				success: renderTwitterUserURL
			});
		})
	};
}
function renderTwitterUserURL(result){
	var content = $("#tweet_container").html();
	content = content.replace('@' + result.screen_name, '<a href="'+result.url+'" class="fancybox.iframe">'+result.name+'</a>');
	$('#tweet_container').html(content);
}

$(function() {
	$("#quoteTemplate").tmpl(Quotes[Math.floor(Math.random()*Quotes.length)]).appendTo("#quote");
	$.ajax({
		url: "http://api.songkick.com/api/3.0/artists/1256157/calendar.json",
		data: {'apikey':'ZLkP2ymgx7fHu6ZY'},
		dataType: "jsonp",
		jsonp : "jsoncallback",
		jsonpCallback: "renderGigs"
	});
	loadTwitter(10);
});