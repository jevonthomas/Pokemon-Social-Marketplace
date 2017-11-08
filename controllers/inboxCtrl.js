module.exports.getInbox = (req, res, next) => {
  const { Inbox, Thread, Message } = req.app.get('models');
  Inbox.findOne({
    where: {user_id:req.params.id},
    include: [{model: Thread, include: [{model: Message}]}]
  })
  .then( (inbox) => {
    res.send(JSON.stringify({inbox}));
    // res.render('requestInfo', {request, user});
  })
  .catch( (err) => {
    next(err);
  });
};