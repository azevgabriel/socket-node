
import { ICreateNoteDTO } from "../../../dtos/ICreateNoteDTO";
import { INotesRepository } from "../../../repositories/INotesRepository";
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
    const notes = await this.repository.query(`SELECT * FROM notes`);
    return notes;
  }

}

export { NotesRepository };