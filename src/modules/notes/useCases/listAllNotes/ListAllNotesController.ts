import { Note } from "../../../notes/infra/typeorm/entities/Note";
import { container } from "tsyringe";
import { ListAllNotesUseCase } from "./ListAllNotesUseCase";

class ListAllNotesController {
  async handle(): Promise<Note[]> {
    const listAllNotesUseCase = container.resolve(ListAllNotesUseCase);
    return await listAllNotesUseCase.execute();
  }
}

export { ListAllNotesController };