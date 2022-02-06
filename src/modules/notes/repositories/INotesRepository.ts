import { Note } from '../infra/typeorm/entities/Note';
import { ICreateNoteDto } from '../dtos/ICreateNoteDTO';

interface INotesRepository {
  create(data: ICreateNoteDto): Promise<void>;
  findAll(): Promise<Note[]>;
}

export { INotesRepository };