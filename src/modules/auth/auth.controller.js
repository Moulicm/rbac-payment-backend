const authService = require("./auth.service");

exports.register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body.email, req.body.password);

    res.status(201).json({
      success: true,
      data: { id: user.id, email: user.email }
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const tokens = await authService.login(req.body.email, req.body.password);

    res.json({
      success: true,
      data: tokens
    });
  } catch (err) {
    next(err);
  }
};