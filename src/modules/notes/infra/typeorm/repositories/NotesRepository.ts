
import { ICreateNoteDTO } from "../../../dtos/ICreateNoteDTO";
import { IAddTheme, INotesRepository } from "../../../repositories/INotesRepository";
import { getRepository, Repository } from "typeorm";
import { Note } from "../entities/Note";

class NotesRepository implements INotesRepository {

  private repository: Repository<Note>;

  constructor() {
    this.repository = getRepository(Note);
  }

  async create({title, description}: ICreateNoteDTO): Promise<void> {
    const note = this.repository.create({title, description});
    await this.repository.save(note);
  }

  async findAll(): Promise<Note[]> {
    const notes = await this.repository.query(`SELECT * FROM notes WHERE theme is null`);
    return notes;
  }

  async addTheme({notes, theme}: IAddTheme): Promise<void> {
    await this.repository.update(notes.map(note => note.id), {theme});
  }

}

export { NotesRepository };