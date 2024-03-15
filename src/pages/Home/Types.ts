export type cardType = {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: string;
  date: number;
  img: string;
  description: string;
  director: string;
};

export type SortDataType = {
  title: string;
  sortBy: string;
};

export type CurrentPageType = {
  currentPage?: number;
  setCurrentPage: (event: number) => void;
};
