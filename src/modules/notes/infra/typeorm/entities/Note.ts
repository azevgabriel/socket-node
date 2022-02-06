import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('notes')
class Note {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Note };