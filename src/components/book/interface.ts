export interface IBook {
  _id: number;
  title: string;
  description?: string;
  bookPage: [
    {
      text: string;
      page: number;
    }
  ];
}
