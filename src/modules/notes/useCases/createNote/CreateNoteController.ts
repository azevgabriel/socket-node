import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateNoteUseCase } from "./CreateNoteUseCase";

class CreateNoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;
    const createNoteUseCase = container.resolve(CreateNoteUseCase);
    try {
      await createNoteUseCase.execute({
        title,
        description
      });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        error: err.message || "Unexpected error"
      });
    }
  }
}

export { CreateNoteController };