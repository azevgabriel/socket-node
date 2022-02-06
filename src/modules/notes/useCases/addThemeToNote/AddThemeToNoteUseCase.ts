import { INotesRepository } from "../../../../modules/notes/repositories/INotesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class AddThemeToNoteUseCase {
  constructor (
    @inject("NotesRepository") 
    private notesRepository: INotesRepository
  ) {}

  async execute(theme:string): Promise<void> {
    const notes = await this.notesRepository.findAll();
    await this.notesRepository.addTheme({notes, theme});    
  }
}

export { AddThemeToNoteUseCase }
