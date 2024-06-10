import { IGroup } from "../types";
import { generatePosts } from "./utils";
import { v4 as uuid } from "uuid";

export const groups: Array<IGroup> = [
  {
    id: uuid(),
    name: "Technology Enthusiasts",
    description: "A group for people who love technology.",
    createdDate: new Date(
      2021,
      Math.floor(Math.random() * 11),
      Math.floor(Math.random() * 28)
    ),
    posts: generatePosts(7),
  },
  {
    id: uuid(),
    name: "Book Club",
    description: "Discussing our favorite books and authors.",
    createdDate: new Date(
      2020,
      Math.floor(Math.random() * 11),
      Math.floor(Math.random() * 28)
    ),
    posts: generatePosts(7),
  },
  {
    id: uuid(),
    name: "Travel Buddies",
    description: "Sharing travel experiences and tips.",
    createdDate: new Date(
      2022,
      Math.floor(Math.random() * 11),
      Math.floor(Math.random() * 28)
    ),
    posts: generatePosts(7),
  },
  {
    id: uuid(),
    name: "Fitness Freaks",
    description: "Everything about health and fitness.",
    createdDate: new Date(
      2019,
      Math.floor(Math.random() * 11),
      Math.floor(Math.random() * 28)
    ),
    posts: generatePosts(7),
  },
  {
    id: uuid(),
    name: "Food Lovers",
    description: "Exploring cuisines from around the world.",
    createdDate: new Date(
      2023,
      Math.floor(Math.random() * 11),
      Math.floor(Math.random() * 28)
    ),
    posts: generatePosts(7),
  },
  {
    id: uuid(),
    name: "Music Maniacs",
    description: "For those who live and breathe music.",
    createdDate: new Date(
      2018,
      Math.floor(Math.random() * 11),
      Math.floor(Math.random() * 28)
    ),
    posts: generatePosts(7),
  },
  {
    id: uuid(),
    name: "Movie Buffs",
    description: "Discussing movies and series from all genres.",
    createdDate: new Date(
      2020,
      Math.floor(Math.random() * 11),
      Math.floor(Math.random() * 28)
    ),
    posts: generatePosts(7),
  },
  {
    id: uuid(),
    name: "Art Admirers",
    description: "A space for appreciating and discussing art.",
    createdDate: new Date(
      2017,
      Math.floor(Math.random() * 11),
      Math.floor(Math.random() * 28)
    ),
    posts: generatePosts(7),
  },
  {
    id: uuid(),
    name: "Nature Lovers",
    description: "Sharing the beauty and wonder of nature.",
    createdDate: new Date(
      2016,
      Math.floor(Math.random() * 11),
      Math.floor(Math.random() * 28)
    ),
    posts: generatePosts(7),
  },
  {
    id: uuid(),
    name: "Gaming Geeks",
    description: "All about video games and gaming culture.",
    createdDate: new Date(
      2015,
      Math.floor(Math.random() * 11),
      Math.floor(Math.random() * 28)
    ),
    posts: generatePosts(7),
  },
];
