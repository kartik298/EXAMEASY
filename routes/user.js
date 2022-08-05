const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/User");
const Student = require("../model/Student");
const Teacher = require("../model/Teacher");
const auth = require("../middleware/auth");
const { STUDENT, TEACHER } = require("../utils/roles");
require("dotenv").config();

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

router.post(
  "/signup",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      className,
      section,
      role,
    } = req.body;

    try {
      let user = await User.findOne({
        email,
      });
      if (user) {
        return res.status(400).json({
          msg: "User Already Exists",
        });
      }

      user = new User({
        firstName,
        lastName,
        email,
        password,
        phone,
        role,
        className,
        section,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      const userData = await user.save();

      switch (role) {
        case STUDENT:
          try {
            student = Student({
              profileInfo: userData._id,
              attemptedTests: [],
            });
            await student.save();
          } catch (err) {
            console.log(err.message);
            return res.status(500).send("Error in Saving Student");
          }
          break;

        case TEACHER:
          try {
            teacher = Teacher({
              profileInfo: userData._id,
              assignedTests: [],
            });
            await teacher.save();
          } catch (err) {
            console.log(err.message);
            return res.status(500).send("Error in Saving Teacher");
          }
          break;

        default:
          console.log("OK 200");
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: "3h",
          //3 hours
        },
        (err, token) => {
          if (err) throw err;

          //cookie
          res.status(200).json({
            token,
            user,
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);

/**
 * @method - POST
 * @param - /login
 * @description - User Login
 */

router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({
        email,
      });
      if (!user)
        return res.status(400).json({
          message: "User Not Exist",
        });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({
          message: "Incorrect Password !",
        });

      const payload = {
        user,
      };

      switch (user.role) {
        case STUDENT:
          let studentData = await Student.findOne({
            profileInfo: user.id,
          });

          const studentProfileID = studentData._id;
          payload.profileID = studentProfileID;
          break;

        case TEACHER:
          let teacherData = await Teacher.findOne({
            profileInfo: user.id,
          });

          const teacherProfileID = teacherData._id;
          payload.profileID = teacherProfileID;
          break;
        default:
          console.log("OK");
      }

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: "3h",
          //3 hours
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            payload,
            token,
          });
        }
      );
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

module.exports = router;