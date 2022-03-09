exports.login = (req, res)=>{
  return res.json({
    success:true,
    message: 'Login Success!'
  })
}

exports.register = (req, res)=> {
  return res.json({
    success:true,
    message: 'Register Success!'
  })
}