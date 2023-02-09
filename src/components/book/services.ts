import { BookPage } from "../bookPages/model";
import { IBook } from "./interface";
import { Book } from "./model";

interface BOOK {
  title: string;
  description: string;
}

export const getAllBook = async (): Promise<IBook[]> => {
	const book = await Book.find().populate("bookPage");
	return book	
}


export const createBook = async (
  book: BOOK,
  bookText: string
): Promise<IBook> => {
  const books = new Book(book);
  const plainText = bookText.split(" ");
  var count = 1;
  var init = 0;
  var end = 501;
  const booksPagesId: any = [];

  for (let i = 0; i < plainText.length; i = i + 500) {
    const text = plainText.slice(init, end).join(" ");
    const booksPages = new BookPage({
      text,
      page: count,
      book: books._id,
    });
    init = end;
    end = end + 500;
    booksPagesId.push(booksPages._id);
    await booksPages.save();
    count++;
  }
	books._id = books._id + 1
  books.bookPage = booksPagesId;
  await books.save();

  return books;
};


export const getBookPageAndType = async (
  bookId: string,
  pageNumber: any,
  type: string
): Promise<string> => {
  const book = await Book.findById(bookId)
    .populate({
      path: "bookPage",
      match: {
        page: pageNumber,
      },
    });

  let bookText = "";

  if (type.toLowerCase() == "html") {
    bookText = `
        <h1>${book?.title} </h1>
        <h2>
            ${book?.description}
        </h2>
        <p>
            ${book?.bookPage[0].text}
        </p>
        `;
    return bookText;
  }

  if (type.toLowerCase() == "json") {
    bookText = `
            {
                title: ${book?.title},
                description:${book?.description},
                body:${book?.bookPage[0].text}  
            }
        `;
  }

  if (type.toLowerCase() == "text") {
    bookText = `
            ${book?.title}
            ${book?.description}
            ${book?.bookPage[0].text}
        `;
  }

  return bookText!;
};