import { container } from "tsyringe";
import { AddThemeToNoteUseCase } from "./AddThemeToNoteUseCase";

class AddThemeToNoteController {
  async handle(theme: string): Promise<void> {
    const addThemeToNoteUseCase = container.resolve(AddThemeToNoteUseCase);
    await addThemeToNoteUseCase.execute(theme);
    return;
  }
}

export { AddThemeToNoteController };