import { useState } from 'react'

export default function FetchNFT({ callMeta }: any) {

    const [address, setAddress] = useState('');
    const [id, setId] = useState('');

    function submit(e: any) {
        e.preventDefault();
        const data = {
            address,
            id
        }
        callMeta({ ...data })
    }

    return (
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <h1 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight sm:truncate pb-6'>Fetch your NFT</h1>
            <form onSubmit={submit}>
                <div className="mb-6">
                    <input
                        type="text"
                        name='address'
                        onChange={(e) => { setAddress(e.target.value) }}
                        data-testid='address'
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        placeholder="NTF address"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        name='id'
                        onChange={(e) => { setId(e.target.value) }}
                        data-testid='nftId'
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        placeholder="NTF ID"
                    />
                </div>
                <div className="text-center lg:text-left">
                    <button
                        type="submit"
                        data-testid='fetch'
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Fetch
                    </button>
                </div>
            </form>
        </div>
    )
}