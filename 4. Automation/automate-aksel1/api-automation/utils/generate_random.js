// class GenerateRandom {
//     static number() {
//         return Math.floor(Math.random() * 900) + 100;
//     }
// }

// module.exports = GenerateRandom;

class GenerateRandom {
    static number() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        const length = 5; // Length of the random string
        
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        
        return result;
    }
}
module.exports = GenerateRandom;
// console.log(GenerateRandom.number()); // Output: aB3R7tF9
