import Home from '../pages';
import { render, fireEvent } from '@testing-library/react'
import metamaskApi from '../api/metamask'
import { renderWithStore } from '../hooks/renderWithStore'
let owners = [{
    user: 'none',
    owner: {
        address: '123'
    }
}]

jest.mock('../api/metamask', () => jest.fn());

(metamaskApi as jest.Mock).mockReturnValue(owners)
const myAddress = '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656'
const myId = '4770406375063643829349922239997972566119178443275917001405312008013624639489'
const intersectionObserverMock = () => ({
    observe: () => { },
    disconnect: () => { }
})
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
window.alert = jest.fn()

describe('Testing the UI', () => {
    test('It should fire the call to fetch the NFT', () => {

        const { getByTestId } = renderWithStore(<Home initialState={false} />);
        const address: any = getByTestId('address');
        const id: any = getByTestId('nftId');
        const submit = getByTestId('fetch')
        address.value = myAddress;
        id.value = myId

        fireEvent.click(submit);
        expect((metamaskApi as jest.Mock).mock.calls.length).toBe(1);

    });

})