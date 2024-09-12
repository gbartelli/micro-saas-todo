import { ReturnTypeWithoutPromise } from "@/types/return-type-without-promise";
import { getUserTodos } from "./actions";

export interface Todo {
  id: string;
  title: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  doneAt: Date | null;
}
