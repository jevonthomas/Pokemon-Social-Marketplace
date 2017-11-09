'use strict';

var moment = require('moment');

module.exports.getInbox = (req, res, next) => {
  const { Inbox, Thread, Message, User } = req.app.get('models');
  Inbox.findOne({
    where: {user_id:req.params.id},
    include: [{model: Thread, include: [{model: Message, limit: 10, order: [['date', 'DESC']], include: [{model: User}]}]}]
  })
  .then( (inbox) => {
    // res.send(JSON.stringify({inbox}));
    res.render('inbox', {inbox});
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getThread = (req, res, next) => {
  const { Inbox, Thread, Message, User } = req.app.get('models');
  Thread.findOne({
    where: {id:req.params.threadid},
    include: [{model: Message, limit: 50, order: [['id', 'DESC']], include: [{model: User}]}]
  })
  .then( (thread) => {
    // res.send(JSON.stringify({thread}));
    res.render('messages', {thread});
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.postThread = (req, res, next) => {
  const { Inbox, Thread, Message, inboxThread, Trade } = req.app.get('models');
  Thread.create({
    active:true
  })
  .then( (thread) => {
    inboxThread.create({
      inbox_id:req.params.userid1,
      thread_id:thread.id
    })
    .then( (inboxThread1) => {
      inboxThread.create({
        inbox_id:req.params.userid2,
        thread_id:thread.id
      })
      .then( (inboxThreadTwo) => {
        Trade.findOne({
          where: {userid:req.params.userid2}
        })
        .then( (trade) => {
          Message.create({
            user_id:req.params.userid2,
            thread_id:thread.id,
            date:moment().format('MMMM Do YYYY, h:mm:ss a'),
            message:trade.comment
          })
          .then( (message) => {
            res.status(200).redirect(`/inbox/${req.params.userid1}/${thread.id}/`)
          })
        })
      })
    })
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.postMessage = (req, res, next) => {
  const { Message } = req.app.get('models');
  Message.create({
    user_id:req.params.userid,
    thread_id:req.params.threadid,
    date:moment().format('MMMM Do YYYY, h:mm:ss a'),
    message:req.body.message
  })
  .then( (message) => {
    res.status(200).redirect(`/inbox/${req.params.userid}/${req.params.threadid}/`);
  })
  .catch( (err) => {
    next(err);
  });
};