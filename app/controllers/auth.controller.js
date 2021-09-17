const db = require('../models')
const config = require('../config/auth.config')
const User = db.user
const Role = db.role

const Op = db.Sequelize.Op

var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')

const sendEmail = (email, subject, content) => {
  const transport = nodemailer.createTransport({
    host: 'mail.dineli.com',
    port: 465,
    auth: {
      user: 'emailtest@dineli.com',
      pass: '/DellD620!',
    }
  })
  let sender = 'emailtest@dineli.com'
  const mainOptions = {
    from: sender,
    to: email,
    subject: subject,
    html: content,
  }
  console.log('[MailOptions]', mainOptions)
  transport.sendMail(mainOptions, (err, info) => {
    if(err) {
      console.log('[mail err]', err);
    }
    console.log('[mail info]', info);
  })
  console.log('[mailsend success]');
  //   const msg = {
  //     to: email,
  //     from: 'maksovsouse@gmail.com',
  //     subject: subject,
  //     html: content,
  //   }

  //   sgMail
  //     .send(msg)
  //     .then((response) => {
  //       console.log(response[0].statusCode)
  //       console.log(response[0].headers)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
}
const sendVerifyEmail = (email, string) => {
  sendEmail(email, 'Email confirmation', `Press <a href=https://dineli.com/#/verify/${string}> here </a> to verify your email. Thanks.`)
}
exports.signup = (req, res) => {
  User.count({}).then(count => {
    if (count === 0) {
      req.body.roles = ['admin']
    } else {
      req.body.roles = ['user']
    }
    // Save User to Database
    const randString = Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16)
    User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      username: req.body.username,
      email: req.body.email,
      citizen: req.body.citizen,
      password: bcrypt.hashSync(req.body.password, 8),
      verificationString: randString,
    })
      .then(user => {
        // send email to activate the user
        sendVerifyEmail(req.body.email, randString)
        if (req.body.roles) {
          Role.findAll({
            where: {
              name: {
                [Op.or]: req.body.roles
              }
            }
          }).then(roles => {
            user.setRoles(roles).then(() => {
              res.send({ message: 'User registered successfully!' })
            })
          })
        } else {
          // user role = 1
          user.setRoles([1]).then(() => {
            res.send({ message: 'User registered successfully!' })
          })
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message })
      })
  }
  )
}

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        User.findOne({
          where: {
            email: req.body.username,
          }
        })
          .then(user => {
            if (!user) {
              return res.status(404).send({ message: 'User Not found.' })
            }
            //--------------if username exists,---------------------------
            loginProcess(req, res, user)
          })
        return res.status(404).send({ message: 'User Not found.' })
      }
      //--------------if email exists,---------------------------
      loginProcess(req, res, user)

    })
    .catch(err => {
      res.status(500).send({ message: 'Try again' })
    })
}

loginProcess = (req, res, user) => {
  var passwordIsValid = bcrypt.compareSync(
    req.body.password,
    user.password
  )

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: 'Invalid Password!',
    })
  }
  if (!user.isActive) {
    return res.status(402).send({
      accessToken: null,
      message: 'Not activated yet!'
    })
  }
  var token = jwt.sign({ id: user.id }, config.secret, {
    expiresIn: 86400 // 24 hours
  })

  var authorities = [];
  user.getRoles().then(roles => {
    for (let i = 0; i < roles.length; i++) {
      authorities.push(roles[i].name.toUpperCase())
    }
    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      roles: authorities,
      accessToken: token,
      walletAddress: user.walletAddress
    })
  })
}

exports.verifyEmail = (req, res) => {
  const { verificationString } = req.params;
  User.findOne({
    where: {
      verificationString: verificationString
    }
  }).then((user) => {
    if (!user) {
      res.status(404).send({
        message: 'User not found!',
      })
    }
    user.isActive = true;
    user.save()
    res.send({
      message: 'User activated successfully!',
    })
  }).catch(() => {
    res.status(500).send({
      message: 'Try again!',
    })
  })
}
exports.resetPassword = (req, res) => {
  // console.log('--------------------- username', req.body.username)
  User.findOne({
    where: {
      [Op.or]: [
        {
          username: req.body.username,
        },
        {
          email: req.body.username,
        },
      ]
    }
  })
    .then(user => {
      console.log('000000000000000000000', user)
      if (!user) {
        res.status(404).send({
          message: 'User not found!',
        })
      }
      const randString = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10)
      console.log('---------', randString)
      user.password = bcrypt.hashSync(randString, 8)
      user.save()
      sendEmail(user.email, 'Reset Password', `Your password has been changed. Your new password is <b>${randString}</b>`)
      res.status(200).send({
        message: 'Your password has been changed successfully!',
      })
    })
    .catch(err => {
      res.status(500).send({ message: err })
    })
}

exports.resetNewPassword = (req, res) => {
  // console.log('--------------------- username', req.body.username)
  User.findOne({
    where: {
      [Op.or]: [
        {
          username: req.body.username,
        },
        {
          email: req.body.username,
        },
      ]
    }
  })
    .then(user => {
      console.log('000000000000000000000', user)
      if (!user) {
        res.status(404).send({
          message: 'User not found!',
        })
      }
      // const randString = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10)
      // console.log('---------',randString)
      user.password = bcrypt.hashSync(req.body.password, 8)
      user.save()
      sendEmail(user.email, 'Reset Password', `Your password has been changed. Your new password is <b>${req.body.password}</b>`)
      res.status(200).send({
        message: 'Your password has been changed successfully!',
      })
    })
    .catch(err => {
      res.status(500).send({ message: err })
    })
}