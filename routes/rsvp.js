var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(req, res){
  res.render('rsvp', data);
};

exports.addRSVP = function(req, res) {
	var rsvpEmail = req.body.rsvpEmail;
	// Print when POST is made
	console.log(rsvpEmail);
	// Push new RSVP
	data.rsvp.push(rsvpEmail);
	// Send task name back so browser knows it worked out
	res.send(rsvpEmail);
}
