"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

export const AuthForm: React.FC = (): JSX.Element => {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    try {

      await signIn('email', { email: data.email, redirect: false });
      toast({
        title: 'Magic Link Sent',
        description: 'Check your email for the magic link to login'
      })
    } catch (error) {
      console.log('error', error)
      toast({
        title: 'Error',
        description: 'An error occurred, Please try again'
      })
    }
  });

  return (
    <>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Magic Link Authentication
            </h1>
            <p className="mt-2 text-muted-foreground">
              Enter your email to receive a magic link and securely sign in.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <Label htmlFor="email" className="sr-only">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                {...form.register("email")}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Magic Link
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
