import { Note } from "../../../notes/infra/typeorm/entities/Note";
import { INotesRepository } from "../../repositories/INotesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllNotesUseCase {
  constructor (
    @inject("NotesRepository") 
    private notesRepository: INotesRepository
  ) {}

  async execute(): Promise<Note[]> {
    return await this.notesRepository.findAll();
  }
}

export { ListAllNotesUseCase }
