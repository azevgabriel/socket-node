import express from "express";
import { CreateNoteController } from '../../../../modules/notes/useCases/createNote/CreateNoteController';

const createNoteController = new CreateNoteController();

const notesRoutes = express();

notesRoutes.post('/', createNoteController.handle);

export {notesRoutes};