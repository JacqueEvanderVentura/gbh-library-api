import { NextFunction, Request, Response } from "express";
import { Book } from "./model";
import { createBook, getAllBook, getBookPageAndType } from "./services";
import { loremText } from "./text";


export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book = await getAllBook();
      res.status(200).send(book);
    } catch (error: any) {
      res.status(500).send(error.message);
      next(error);
    }
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
			 

			const test = [
        {
          book: {
						
						title: "La prueba del code 2",
            description: "Esto es la description 2",
          },
				
          text: loremText,
        },
        {
          book: {
						title: "La prueba del code 3",
            description: "Esto es la description 3",
          },
          text: loremText,
        },
      ];
      
			test.forEach(async (items)=>{
				await createBook(items.book, items.text);
			})
      res.sendStatus(201);
    } catch (error: any) {
      res.status(500).send(error.message);
      next(error);
    }
  },
  getAllPages: async (req: Request, res: Response, next: NextFunction) => {
    try {
			const { bookId, page, type } = req.params;
      const book = await getBookPageAndType(bookId, page, type);
      res.status(200).send(book);
    } catch (error: any) {
      res.status(500).send(error.message);
      next(error);
    }
  },
};
