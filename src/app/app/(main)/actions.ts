"use server";

import { auth } from "@/services/auth";
import { prisma } from "@/services/database";
import { upsertTodoSchema } from "./schema";
import { z } from "zod";

export async function getUserTodos() {
  const session = await auth();

  const todos = await prisma.todo.findMany({
    where: {
      userId: session?.user?.id,
    },
  });

  return todos;
}

export async function upsertTodo(data: FormData, FormData: { new(form?: HTMLFormElement, submitter?: HTMLElement | null): FormData; prototype: FormData; }, input: z.infer<typeof upsertTodoSchema>) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Not Authorized",
      data: null,
    };
  }

  if (input.id) {
    const todo = await prisma.todo.findFirst({
      where: {
        userId: session.user.id,
      },
      select: {
        id: true,
      },
    });

    if (!todo) {
      return {
        error: "Not Found",
        data: null,
      };
    }

    const updatedTodo = await prisma.todo.update({
      where: {
        id: input.id,
        userId: session?.user?.id,
      },
      data: {
        title: input.title,
        doneAt: input.doneAt,
      },
    });
    return {
      error: null,
      data: updatedTodo,
    };
  }

  if (!input.title) {
    return {
      error: "Title is required",
      data: null,
    };
  }

  const todo = await prisma.todo.create({
    data: {
      title: input.title,
      userId: session?.user?.id,
    },
  });

  return todo;
}
