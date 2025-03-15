"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const math_controller_1 = require("../controllers/math.controller");
const router = (0, express_1.Router)();
const mathController = new math_controller_1.MathController();
router.post('/addition', mathController.add);
router.get('/factorial/:number', mathController.factorial);
router.get('/fibonacci/:count', mathController.fibonacci);
exports.default = router;
