import type { NextPage } from 'next';
import Router, { withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import metaApi from '../api/metamask';
import FetchNFT from '../components/fetchNFT';
import HomeImage from '../components/HomeImage';
import Modal from '../components/modal';
import { selectAuthState, setAddress } from "../store/auth";

const Home: NextPage = () => {

  const [isMetamaskInstalled, setMetamaskInstalled] = useState(true);
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.ethereum) {
      console.log('Metamask available')
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(res => {
          // Return the address of the wallet
          console.log(`Addresses loged in`, res)
          dispatch(setAddress(res[0]));
        }).catch(res => {
          console.log('could not fetch')
        })
    } else {
      setMetamaskInstalled(false)
    }
    console.log(`auth state`, authState)
  }, [])

  async function callMeta({ address, id }: any) {
    try {
      const top_ownerships = await metaApi({ address, id });
      const { owner } = top_ownerships[0]
      if (owner.address === authState.address) {
        Router.push(`/nfts/${owner.address}`)
      } else {
        alert(`You need ${owner.address} NFT to view the content`);
      }
    } catch (e) {
      console.log(`Error fetching nft: ${e.message}`);
    }
  }

  return (
    <>
      <Modal open={!isMetamaskInstalled} />
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
          >
            <HomeImage />
            <FetchNFT callMeta={callMeta} />
          </div>
        </div>
      </section>

    </>
  )
}

export default withRouter(Home)
