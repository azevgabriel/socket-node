import { Note } from "modules/notes/infra/typeorm/entities/Note";
import { INotesRepository } from "modules/notes/repositories/INotesRepository";
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
