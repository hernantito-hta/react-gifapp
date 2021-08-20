import { getGifs } from "../../helpers/getGifs"

describe('Testing method getGifs', () => {
    test('should validate length of parameter', async () => {
        const gifs = await getGifs('Samraui X');
        expect(gifs.length).toBe(10);
    })
    
    test('should return empty array if search does not match', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
})
