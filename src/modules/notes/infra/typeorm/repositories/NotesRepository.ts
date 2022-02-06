
import { ICreateNoteDTO } from "../../../dtos/ICreateNoteDTO";
import { INotesRepository } from "../../../repositories/INotesRepository";
import { getRepository, Repository } from "typeorm";
import { Note } from "../entities/Note";

class NotesRepository implements INotesRepository {

  private repository: Repository<Note>;

  constructor() {
    this.repository = getRepository(Note);
  }

  async create(data: ICreateNoteDTO): Promise<void> {
    const note = this.repository.create(data);
    await this.repository.save(note);
  }

  async findAll(): Promise<Note[]> {
    return await this.repository.query(`SELECT * FROM notes`);
  }

}

export { NotesRepository };