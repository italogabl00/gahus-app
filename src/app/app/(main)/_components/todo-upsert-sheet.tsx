'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useRef } from "react"
import { Todo } from "./todo-data-table"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"

type TodoUpsertSheetProps = {
    children?: React.ReactNode
    defaultValue?: Todo
}

export function TodoUpsertSheet({ children }: TodoUpsertSheetProps) {

    const ref = useRef<HTMLDivElement>(null)

  const form = useForm()

  const onSubmit = form.handleSubmit((data) => {
    console.log(data)
  })


  return (
    <Sheet>
      <SheetTrigger asChild>
        <div ref={ref}>
            {children}
        </div>
      </SheetTrigger>
    
      <SheetContent>
          <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8h-screen ">
        <SheetHeader>
          <SheetTitle>Create todo</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
       
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter your todo title" {...field} />
              </FormControl>
              <FormDescription>
                This will be the publicy displayed name for the task
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <SheetFooter className="mt-auto">
            <Button type="submit">Save changes</Button>
        </SheetFooter>
        </form>
        </Form>
      </SheetContent>
  
    </Sheet>
  )
}
