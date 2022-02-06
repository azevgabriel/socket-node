import { Note } from '../infra/typeorm/entities/Note';
import { ICreateNoteDTO } from '../dtos/ICreateNoteDTO';

interface INotesRepository {
  create(data: ICreateNoteDTO): Promise<void>;
  findAll(): Promise<Note[]>;
}

export { INotesRepository };