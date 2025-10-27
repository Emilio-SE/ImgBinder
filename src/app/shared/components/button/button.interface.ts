import { LucideIconData } from "lucide-angular";
import { ButtonState, ButtonType } from "./button.enum";

export interface ButtonData {
    type?: ButtonType;
    state?: ButtonState;
    icon: LucideIconData;
    text: string;
} 