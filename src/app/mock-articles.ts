import { Article } from "./article";

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Acoustic guitar",
    key: "acoustic-guitar",
    date: new Date(),
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    description: "This is Acoustic guitar",
    imageUrl: "assets/images/guitar.png",
  },
  {
    id: 2,
    title: "Drums",
    key: "drums",
    date: new Date(),
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    description: "My new drums",
    imageUrl: "assets/images/drums.png",
  },
];
