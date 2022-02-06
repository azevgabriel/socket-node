import { Note } from '../infra/typeorm/entities/Note';
import { ICreateNoteDTO } from '../dtos/ICreateNoteDTO';

export interface IAddTheme {
  notes: Note[];
  theme: string;
}

interface INotesRepository {
  create(data: ICreateNoteDTO): Promise<void>;
  findAll(): Promise<Note[]>;
  addTheme(data: IAddTheme): Promise<void>;
}

export { INotesRepository };