import FetchNFT from '..';
import { render, fireEvent } from '@testing-library/react'
import metamaskApi from '../../../api/metamask'

jest.mock('../../../api/metamask');

const myAddress = '0x890BD375543540b31ED6824822975893a2A39C1D'
const intersectionObserverMock = () => ({
    observe: () => null
})
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

describe('Testing the UI', () => {
    test('It should fire the call to fetch the NFT', () => {
        const callMeta = jest.fn();
        const { getByTestId } = render(<FetchNFT callMeta={callMeta} />);
        const address: any = getByTestId('address');
        const id: any = getByTestId('nftId');
        const submit = getByTestId('fetch')
        address.value = myAddress;
        id.value = ''

        fireEvent.click(submit);
        expect(callMeta.mock.calls.length).toBe(1);

    });

})