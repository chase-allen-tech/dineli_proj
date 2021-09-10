const db = require('../models')
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
      for(let user of users) {
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

  // User.create({
  //   email: req.body.email,
  //   walletAddress: req.body.walletAddress,
  // }).then(site => {
  //   if (site) {
  //     res.status(200).send({
  //       message: 'User created successfully',
  //     })
  //   } else {
  //     res.status(400).send({
  //       message: 'Please try again',
  //     })
  //   }
  // }).catch(err => {
  //   res.status(500).send({message: 'Server error'})
  // })