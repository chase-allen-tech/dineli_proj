const db = require('../models')
const sendEmail = require('./auth.controller').sendEmail;

const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;

exports.allAccess = (req, res) => {
  res.status(200).send('Public Content.')
}

exports.userBoard = (req, res) => {
  res.status(200).send('User Content.')
}

exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.')
}

exports.moderatorBoard = (req, res) => {
  res.status(200).send('Moderator Content.')
}

async function getRole(user) {
  return new Promise((resolve, reject) => {
    var authorities = [];
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        authorities.push(roles[i].name.toUpperCase())
      }
      resolve(authorities);
    })
      .catch(err => reject(err));
  });
}

exports.getUsers = (req, res) => {
  const count = Number(req.query.count) ? Number(req.query.count) : 20
  User.findAll({
    limit: count,
    order: ['id'],
  })
    .then(async users => {
      let payload = [];
      for (let user of users) {
        let tmpUser = Object.assign({}, user.dataValues);
        tmpUser['role'] = await getRole(user);
        payload.push(tmpUser);
      }
      res.status(200).json(payload);
    })
    .catch(err => {
      console.log('err', err);
      res.status(500).json({ message: err.message })
    })
}

exports.createUser = (req, res) => {

  User.create({
    email: req.body.email,
    walletAddress: req.body.walletAddress,
  })
    .then(user => {
      // send email to activate the user
      console.log(req.body.role)
      if (req.body.role) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: [req.body.role]
            }
          }
        }).then(roles => {
          console.log(roles);
          user.setRoles(roles).then(() => {
            res.send({ message: 'User registered successfully!' })
            sendEmail(req.email, 'User Registered', `User(${req.email} registerd succesfully!)`);
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
      console.log('[err]', err);
      res.status(500).send({ message: err.message })
    })
}

exports.saveUser = (req, res) => {
  User.findOne({
    where: {
      id: req.body.id,
    }
  }).then(user => {
    if (!user) {
      res.status(400).send({
        message: 'Order not found',
      })
    }
    // console.log('update user', req.body);
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.username = req.body.username;
    user.phone = req.body.phone;
    user.email = req.body.email;
    user.citizen = req.body.citizen;
    user.isActive = req.body.isActive ? true : false;
    user.walletAddress = req.body.walletAddress;
    user.type = req.body.type
    user.save()
    user.setRoles([Number(req.body.role)]).then(() => {
      console.log(`${user.email} updated success`);
      res.send({ message: 'User updated successfully!' })
    })
  })
}

exports.updateCard = (req, res) => {
  User.findOne({
    where: {
      id: req.body.id,
    }
  }).then(user => {
    if (!user) {
      res.status(400).send({
        message: 'Order not found',
      })
    }

    user.card = req.body.card;
    user.save()
    res.status(200).send({
      message: 'Card sumbit successfully',
    })
  })
}

exports.updateRoleType = (req, res) => {
  User.findOne({
    where: {
      id: req.body.id,
    }
  }).then(user => {
    if (!user) {
      res.status(400).send({
        message: 'Order not found',
      })
    }

    user.type = req.body.type;
    user.save()
    user.setRoles([req.body.role]).then(() => {
      res.status(200).send({
        message: 'User approved successfully',
      })
    })
  })
}

