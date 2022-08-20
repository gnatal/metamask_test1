import metaApi from '../metamask'
import { NTFMock, NTFMock2 } from '../mocks'

describe('Testing sign', () => {
    test('It should get a valid NFT', async () => {
        const owners: any = await metaApi({ ...NTFMock });
        expect(owners.length).toBe(1);
    });
    test('It should not get a valid NFT', async () => {
        const owners = await metaApi({ ...NTFMock2 });
        expect(owners).toBe(false);
    });

})