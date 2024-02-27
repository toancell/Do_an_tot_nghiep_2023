const jwt = require("jsonwebtoken");
const config = require("../config/config");

exports.generateToken = function (user, secretSignature, tokenLife) {
	return new Promise((resolve, reject) => {
		// Định nghĩa những thông tin của user mà bạn muốn lưu vào token ở đây
		const userData = {
			userId: user._id,
			userName: user.userName,
			email: user.email,
			isAdmin: user.isAdmin,
			password: user.password,
		};
		// Thực hiện ký và tạo token
		jwt.sign(
			userData,
			secretSignature,
			{
				algorithm: "HS256",
				expiresIn: tokenLife,
			},
			(error, token) => {
				if (error) {
					return reject(error);
				}
				resolve(token);
			}
		);
	});
};

exports.verifyToken = (token, secretKey) => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, secretKey, (error, decoded) => {
			if (error) {
				return reject(error);
			}
			resolve(decoded);
		});
	});
};
