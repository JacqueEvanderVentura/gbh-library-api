export interface IBook {
  title: string;
  description?: string;
  bookPage: [
    {
      text: string;
      page: number;
    }
  ];
}
