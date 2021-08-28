import {
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import H2 from "../../components/Headings/H2";
import Header from "../../layouts/Header/Header";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import cryptoCoins from "../../assets/crypto.png";
import Section from "../../layouts/Section/Section";
import rocket from "../../assets/Asset 30.svg";
import wallet from "../../assets/Asset 610.png";

const Index = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <H2 className="text-6xl font-bold text-center mt-40">
          Your crypto addresses all in one place
        </H2>
        <div className="flex flex-col items-center w-full mt-20">
          <Link
            to="/signup"
            className="bg-blue-400 p-4 px-6 rounded-full text-center text-white font-bold max-w-xs hover:bg-blue-500 shadow-lg"
          >
            Create your free LinkLedger
          </Link>
          <p className="mt-2">
            or <Link to="/login">login</Link>
          </p>
        </div>

        <Section>
          <div className="flex justify-center gap-10">
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-4xl text-gray-600"
            />
            <FontAwesomeIcon
              icon={faTwitch}
              className="text-4xl text-gray-600"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-4xl text-gray-600"
            />
          </div>
          <div className="mt-6 text-center">
            <H2>Your wallets - everywhere</H2>
            <p className="text-gray-600">
              Take your wallet addresses wherever you go, to give your audiences
              a way to help you with crypto.
            </p>
          </div>
        </Section>

        <Section>
          <img src={cryptoCoins} alt="" className="w-48 ml-auto mr-auto" />
          <div className="text-center mt-4">
            <H2>No cryptocurrency left behind</H2>
            <p className="text-gray-600">
              Don’t leave any cryptocurrency behind. No matter the wallet.
            </p>
          </div>
        </Section>

        <Section>
          <img src={rocket} alt="" className="w-48 ml-auto mr-auto" />
          <div className="text-center mt-8">
            <H2>Getting started is super easy</H2>
            <p className="text-gray-600">
              Create your own LinkLedger in seconds. No more copy and pasting a
              bunch addresses.
            </p>
          </div>
        </Section>

        <Section>
          <img src={wallet} alt="" className="w-48 ml-auto mr-auto" />
          <div className="text-gray-800 text-xl ml-auto mr-auto mt-4 underline">
            <span className="font-bold">linkledger.app/</span>
            <input placeholder="yourusername" />
          </div>
        </Section>
      </Wrapper>
    </>
  );
};

export default Index;
