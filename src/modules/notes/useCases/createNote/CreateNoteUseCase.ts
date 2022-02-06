import { ICreateNoteDTO } from "../../../../modules/notes/dtos/ICreateNoteDTO";
import { INotesRepository } from "../../../../modules/notes/repositories/INotesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateNoteUseCase {
  constructor (
    @inject("NotesRepository") 
    private notesRepository: INotesRepository
  ) {}

  async execute({title, description}: ICreateNoteDTO): Promise<void> {
    await this.notesRepository.create({
      title,
      description
    });
  }
}

export { CreateNoteUseCase }
