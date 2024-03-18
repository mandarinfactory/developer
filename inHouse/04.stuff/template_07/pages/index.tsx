"use client";

import { useRecoilState } from "recoil";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import { REDIRECT_URL, SCOPE } from "@/utils/constants";
import { authenticationTokenState } from "@/recoil/atom";

const Home = ({ spotifyAuthUrl }: { spotifyAuthUrl: string }) => {
  const [savedAuthToken, setSavedAuthToken] = useRecoilState(
    authenticationTokenState
  );
  const [removeAuth, setRemoveAuth] = useState(false);

  useEffect(() => {
    if (removeAuth) {
      localStorage.removeItem("authToken");
      setSavedAuthToken(null);
    }
  }, [removeAuth]);

  return (
    <Sidebar spotifyAuthUrl={spotifyAuthUrl}>
      <Hero />
    </Sidebar>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const encodeRedirectUri = encodeURIComponent(REDIRECT_URL);
  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeRedirectUri}&scope=${SCOPE}`;
  return { props: { spotifyAuthUrl } };
};

export default Home;
