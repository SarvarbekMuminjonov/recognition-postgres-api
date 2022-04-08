import sequelize from './db.js'
 export default async function start() {
	try {
		await sequelize.authenticate();
		await sequelize.sync({
			force: true,
		});
		console.log("db connected");
	} catch (error) {
		console.log(error.message);
	}
}