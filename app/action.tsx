"use server";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { AnimeProp } from "@/components/AnimeCard";
import AnimeCard from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const response = await axios.get(
    `https://shikimori.one/api/animes?page=${page}&limit=12&order=popularity`
  );

  return response.data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
