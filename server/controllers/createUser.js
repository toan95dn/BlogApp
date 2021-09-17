export default function createUser(req, res) {
  const user = new User({
    email: req.body.email,
  });
  const newUser = await User.register(user, req.body.password);
  res.status(200).json(user);
}
