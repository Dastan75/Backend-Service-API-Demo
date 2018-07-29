
// // ['seconds', 'minutes', 'hours', 'dayOfMonth', 'month', 'dayOfWeek']
// const fetch = require('node-fetch');

// asyncForEach = async (array, callback) => {
//     for (let index = 0; index < array.length; index++) {
//         await callback(array[index], index, array)
//     }
// }

module.exports.cron = {
    updateSmsEvery10s: {
        schedule: '*/10 * * * * *',
        onTick: async function () {
            asyncForEach = async (array, callback) => {
                for (let index = 0; index < array.length; index++) {
                    await callback(array[index], index, array)
                }
            }
            sails.log.debug("Cron: updateSmsEvery10s called");
            let users = null
            try {
                users = await User.find({ state: 1 });
            } catch (err) {
                sails.log.debug("error cron: updateSmsEvery10s list users:", err);
            }
            await asyncForEach(users, async user => {
                // NEED CALL FUNCTION SEND SMS IF GOOD CHANGE STATE
                await User.update(user.id).set({ state: 2 });
            })
        },
    }
};